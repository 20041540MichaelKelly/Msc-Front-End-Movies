import React from "react";
import { useQuery } from "react-query";
import PageTemplate from '../components/movies/templateMovieListPage'
import { getUpcomingMovies } from "../api/movie-api";
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import { useParams } from "react-router-dom";
import Pagination from "../components/pagination";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movies/movieFilterUI";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const UpcomingMoviesPage = (props) => {
  const { page } = useParams();

  const { data, error, isLoading, isError } = useQuery(["upcoming", { page: page }],getUpcomingMovies);

  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type, value) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const movies = data ? data.results : [];
  const displayedMovies = filterFunction(movies);

  const urlValue = "/movies/upcoming/page/"

  return (
    <>
    <PageTemplate
      title='Upcoming Movies'
      movies={displayedMovies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
      actionFav={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
    <Pagination urlValue = { urlValue } pg={ page }/>
    <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
     />
    </>
  );
};
export default UpcomingMoviesPage;

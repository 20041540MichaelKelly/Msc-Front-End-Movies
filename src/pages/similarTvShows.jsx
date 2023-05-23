import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PageTemplate from '../components/tvshows/templateTvShowListPage'
import { getSimilarTvShows } from "../api/movie-api";
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import Pagination from "../components/pagination";

// import MovieFilterUI, {
//   titleFilter,
//   genreFilter,
// } from "../components/movies/movieFilterUI";

// const titleFiltering = {
//   name: "title",
//   value: "",
//   condition: titleFilter,
// };
// const genreFiltering = {
//   name: "genre",
//   value: "0",
//   condition: genreFilter,
// };

const SimilarTvShowsPage = (props) => {
  const { id } = useParams();
  const { page } = useParams();

  const { data: similar, error, isLoading, isError } = useQuery(
    ["similarTvShows", { id: id , page: page }],
    getSimilarTvShows
  );

//   const { filterValues, setFilterValues, filterFunction } = useFiltering(
//     [],
//     [titleFiltering, genreFiltering]
//   );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

//   const changeFilterValues = (type, value) => {
//     const changedFilter = { name: type, value: value };
//     const updatedFilterSet =
//       type === "title"
//         ? [changedFilter, filterValues[1]]
//         : [filterValues[0], changedFilter];
//     setFilterValues(updatedFilterSet);
//   };

  const tvShows = similar ? similar.results : [];
//   const displayedMovies = filterFunction(movies);

  return (
    <>
    <PageTemplate
      title='Similar TV Shows'
      tvShows={tvShows}
      actionFav={(tvShow) => {
        return <AddToFavouritesIcon movie={tvShow} />
      }}
      action={(tvShow) => {
       return <AddToPlaylistIcon movie={tvShow} />
     }}
    />
      <Pagination pg={ page }/>

    {/* <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
     /> */}
    </>
  );
};
export default SimilarTvShowsPage;
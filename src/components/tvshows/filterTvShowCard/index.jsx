import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import { getTvGenres } from "../../../api/movie-api";
import { useQuery } from "react-query";
import Spinner from '../../spinner';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Rating from '@mui/material/Rating';

const styles = {
    root: {
        maxWidth: 345,
    },
    media: { height: 300 },

    formControl: {
        margin: 1,
        minWidth: 220,
        backgroundColor: "rgb(255, 255, 255)",
    },
};

export default function FilterTvShowCard(props) {
    const { data, error, isLoading, isError } = useQuery("tvGenres", getTvGenres);
    const [vote, setVote] = React.useState('');
    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const genres = data.genres;
    if (genres[0].name !== "All") {
        genres.unshift({ id: "0", name: "All" });
    }

    const handleUserImput = (e, type, value) => {
        e.preventDefault();
        props.onUserInput(type, value);
    };

    const handleTextChange = (e, props) => {
        handleUserImput(e, "tvTitle", e.target.value);
    };

    const handleGenreChange = (e) => {
        handleUserImput(e, "tvGenre", e.target.value);
    };

    const handleVoteChange = (e, props) => {
        handleUserImput(e, "tvVote", e.target.value);
        setVote(e.target.value);
    };

    return (
        <>
            <Card sx={styles.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h1">
                        <FilterAltIcon fontSize="large" />
                        Filter the TV Shows.
                    </Typography>
                    <TextField
                        sx={styles.formControl}
                        id="filled-search"
                        label="Search field"
                        type="search"
                        value={props.tvTitleFilter}
                        variant="filled"
                        onChange={handleTextChange}
                    />
                    <FormControl sx={styles.formControl}>
                        <InputLabel id="genre-label">Genre</InputLabel>
                        <Select
                            labelId="genre-label"
                            id="genre-select"
                            variant="filled"
                            value={props.tvGenreFilter}
                            onChange={handleGenreChange}
                        >
                            {genres.map((genre) => {
                                return (
                                    <MenuItem key={genre.id} value={genre.id}>
                                        {genre.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                    <FormControl sx={styles.formControl}>
                        <Typography sx={{ pt: 2 }} component="legend">Vote</Typography>
                        <Rating
                            name="simple-controlled"
                            value={vote}
                            max={10}
                            onChange={handleVoteChange}
                        />
                    </FormControl>
                </CardContent>
            </Card >
            <Card sx={styles.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h1">
                        <SortIcon fontSize="large" />
                        Sort the TV Shows.
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
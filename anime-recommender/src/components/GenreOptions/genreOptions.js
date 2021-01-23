import React from 'react';
import { connect } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import genreList from "../../data/genreListData";
import PropTypes from 'prop-types';
import "./genreOptions.css";
import { updateGenreList, loadSpinner } from "../../actions/index";
import { LOAD_GENRE_SPINNER } from '../../constants/action-types';
import { GenreOptionsStyles } from "../../styles";

const GenreOptions = (props) => {
    const { updateGenreList, loadSpinner } = props;

    return (
        <div className="genreOptionsContainer">
            <h2 className="optionsTitle">Filters</h2>
            <Autocomplete
                multiple
                options={genreList}
                getOptionLabel={(option) => option.title}
                onChange={(event, values) => {
                    loadSpinner(LOAD_GENRE_SPINNER, true)
                    updateGenreList(values)
                }}
                renderInput={(params) => (
                    <GenreOptionsStyles
                        {...params}
                        placeholder="Genre"
                        variant="standard"
                    />
                )}
            />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        filterGenreOptions: state.genres.filterGenreOptions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateGenreList: (genreList) => dispatch(updateGenreList(genreList)),
        loadSpinner: (type, bool) => dispatch(loadSpinner(type, bool))
    };
}

GenreOptions.propTypes = {
    filterGenreOptions: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreOptions)
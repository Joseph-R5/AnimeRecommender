import React from 'react';
import { connect } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import genreList from "../../data/genreListData";
import PropTypes from 'prop-types';
import "./genreOptions.css";

import { updateGenreList, loadSpinner } from "../../actions/index";
import { LOAD_GENRE_SPINNER } from '../../constants/action-types';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: 20,
        paddingRight: 20,
    },
}));

const CssTextField = withStyles({
    root: {
        '& .MuiInputBase-root': {
            color: 'white',
        }
    }
})(TextField);


const GenreOptions = (props) => {
    const classes = useStyles();
    const { updateGenreList, loadSpinner } = props;

    return (
        <div className={classes.root}>
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
                    <CssTextField
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
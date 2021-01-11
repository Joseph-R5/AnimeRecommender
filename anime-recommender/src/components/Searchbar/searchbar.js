import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import "./searchbar.css";
import PropTypes from 'prop-types';
import ErrorMessage from "../ErrorMessage/errorMessage";
import { withStyles } from '@material-ui/core/styles'

import {
    autoCompleteSearchBar,
    clearAutoCompleteSuggestions,
    updateQuery,
    addAnime,
    loadSpinner,
} from "../../actions/index";

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'grey',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'grey',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'grey',
            },
        },
        '& .MuiInputBase-root': {
            color: '#red',
        }
    }
})(TextField);

class ConnectedSearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleChange(event) {
        const eventInput = event.target.value
        const { updateQuery, autoCompleteSearchBar,
            clearAutoCompleteSuggestions } = this.props;

        this.setState({
            text: eventInput
        }, () => {
            updateQuery(eventInput)

            if (eventInput && eventInput.length > 2) {
                autoCompleteSearchBar(eventInput);
            } else if (eventInput.length === 0) {
                clearAutoCompleteSuggestions("")
            }
        })
    }

    handleOnClick(anime) {
        this.setState({
            text: ""
        }, () => {
            this.props.loadSpinner(true);
            this.props.addAnime(anime);
        })
    }

    render() {
        const { autoCompleteList, showErrorMsg, errorResponse } = this.props;

        return (
            <div className="searchBar">
                {showErrorMsg === true &&
                    <ErrorMessage message={errorResponse} />
                }
                <Autocomplete
                    options={autoCompleteList.map((option) => option.title)}
                    loading
                    loadingText="Searching..."
                    onChange={(event, value) => this.handleOnClick(value)}
                    renderInput={(params) => (
                        <CssTextField
                            {...params}
                            onChange={this.handleChange}
                            label="Enter your anime here"
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                style: { color: '#cfcccc' }
                            }}
                        />
                    )}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        query: state.query,
        autoCompleteList: state.autoCompleteList,
        animeList: state.animeList,
        showErrorMsg: state.showErrorMsg,
        errorResponse: state.errorResponse
    };
}

function mapDispatchToProps(dispatch) {
    return {
        autoCompleteSearchBar: anime => dispatch(autoCompleteSearchBar(anime)),
        clearAutoCompleteSuggestions: () => dispatch(clearAutoCompleteSuggestions()),
        updateQuery: query => dispatch(updateQuery(query)),
        addAnime: anime => dispatch(addAnime(anime)),
        loadSpinner: bool => dispatch(loadSpinner(bool))
    };
}

ConnectedSearchBar.propTypes = {
    query: PropTypes.string,
    autoCompleteList: PropTypes.array,
    animeList: PropTypes.array,
    showErrorMsg: PropTypes.bool,
    errorResponse: PropTypes.string
}

const SearchBar = connect(mapStateToProps, mapDispatchToProps)(ConnectedSearchBar)

export default SearchBar;
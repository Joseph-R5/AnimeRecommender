import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './filterOptions.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { toggleFilterButton, loadSpinner } from "../../actions/index";
import { LOAD_FILTER_SPINNER } from '../../constants/action-types';

const FilterOptions = (props) => {
    const { filterOptions, toggleFilterButton, loadSpinner } = props;

    return (
        <div className="filterOptionsContainer">
            <ul className="filterOptionsList">
                {filterOptions.map((option) => {
                    if (option) {
                        return <li key={"key-" + option.title}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={option.enabled}
                                        onClick={() => {
                                            loadSpinner(LOAD_FILTER_SPINNER, true)
                                            toggleFilterButton(option)
                                        }}
                                        name={option.title}
                                        style={{
                                            color: '#3EA2AC',
                                        }}
                                    />
                                }
                                label={option.title}
                                style={{
                                    color: 'white'
                                }}
                            />
                        </li>
                    }
                    return null;
                })}
            </ul>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        filterOptions: state.filters.filterOptions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleFilterButton: (option) => dispatch(toggleFilterButton(option)),
        loadSpinner: (type, bool) => dispatch(loadSpinner(type, bool))
    }
}

FilterOptions.propTypes = {
    filterOptions: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterOptions);


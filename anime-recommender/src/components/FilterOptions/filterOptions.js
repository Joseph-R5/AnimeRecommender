import React from 'react';
import { connect } from 'react-redux';
import './filterOptions.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { toggleFilterButton, loadFilterSpinner } from "../../actions/index";

const FilterOptions = (props) => {
    const { filterOptions, toggleFilterButton, loadFilterSpinner } = props;

    return (
        <div className="filterOptionsContainer">
            <ul className="filterOptionsList">
                {filterOptions.map((option) => {
                    if (option) {
                        return <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={option.enabled}
                                        onClick={() => {
                                            loadFilterSpinner(true)
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
        loadFilterSpinner: (bool) => dispatch(loadFilterSpinner(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterOptions);


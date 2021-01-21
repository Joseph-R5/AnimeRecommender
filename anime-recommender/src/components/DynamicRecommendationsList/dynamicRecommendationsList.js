import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './dynamicRecommendationsList.css';
import RecommendedAnimes from "../RecommendedAnimes/recommendedAnimes";
import "./dynamicRecommendationsList.css";
import { getPaginationPageCount, getActivePage, convertAcronym } from "../../util";

const DynamicRecommendationsList = (props) => {
    const { section, animeList, index } = props;
    const paginationPageCount = getPaginationPageCount(animeList.length);
    const sectionHeader = convertAcronym(section);

    if (animeList.length > 0) {
        return (
            <div>
                <div className="recommendedAnimeSectionContainer">
                    <div>
                        <h2 className="sectionHeader">{sectionHeader}</h2>
                    </div>
                    <div className="paginationContainer">
                        {
                            paginationPageCount.map((val, pageIndex) => {
                                return <div className="paginationItem">
                                    <div
                                        className={getActivePage(index, pageIndex, paginationPageCount)}
                                    />
                                </div>
                            })
                        }
                    </div>

                </div>
                <RecommendedAnimes
                    list={animeList}
                    index={index}
                    section={section}
                />
            </div>
        )
    } else { return null; }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DynamicRecommendationsList)
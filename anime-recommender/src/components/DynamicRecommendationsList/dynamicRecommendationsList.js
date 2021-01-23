import React from 'react';
import './dynamicRecommendationsList.css';
import RecommendedAnimes from "../RecommendedAnimes";
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
                                return <div 
                                    className="paginationItem"
                                    key={"key-" + val}
                                >
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

export default DynamicRecommendationsList;
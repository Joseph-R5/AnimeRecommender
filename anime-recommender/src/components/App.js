import React from "react";
import SearchBar from "./Searchbar/searchbar";
import Title from "./Title/title";
import RecommendationAnimeList from "./RecommendationAnimeList/recommendationAnimeList";
import "./App.css";

const App = () => {
    return (
        <div className="app">
            <Title />
            <SearchBar />
            <RecommendationAnimeList />
        </div>
    )
}

export default App;
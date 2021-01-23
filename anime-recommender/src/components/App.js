import React from "react";
import SearchBar from "./Searchbar";
import Title from "./Title";
import RecommendationAnimeList from "./RecommendationAnimeList";
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
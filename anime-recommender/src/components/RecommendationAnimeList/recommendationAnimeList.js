import React, { Component } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Spinner from "../Spinner/spinner";
import PropTypes from 'prop-types';
import "./recommendationAnimeList.css";
import { withHooksHOC } from "./recommendationAnimeListContainer";
import SideMenu from "../SideMenu";
import DynamicRecommendationsList from "../DynamicRecommendationsList";
import Modal from "../Modal"
import { MOVIE, ONA, TV } from "../../constants/filter-options";
import { getRecommendationlist, clearRecommendations } from "../../actions/index";
import { loadRecommendations, hasOneSection } from "../../util";

const classes = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: 'theme.palette.text.secondary',
    },
    cover: {
        width: 151,
    },
}));

class RecommendationAnimeList extends Component {
    componentDidUpdate(prevProps) {
        const { animeTitleList, filterOptions, getRecommendationlist,
            filterGenreOptions, clearRecommendations } = this.props;

        if (prevProps.animeTitleList !== animeTitleList ||
            prevProps.filterOptions !== filterOptions ||
            prevProps.filterGenreOptions !== filterGenreOptions) {
            animeTitleList.length > 0 ?
                getRecommendationlist(animeTitleList, filterOptions, filterGenreOptions) :
                clearRecommendations()
        }
    }

    render() {
        const {
            movieRecommendations, tvRecommendations,
            onaRecommendations, showModal, loadingAnimeList,
            tvRecommendationIndex, movieRecommendationIndex, onaRecommendationIndex,
            showMobileView, loadingModal, loadingFilter, loadingGenre
        } = this.props;

        const size = showMobileView ? 13 : 10;
        const showLoader =
            loadingAnimeList || loadingModal
            || loadingFilter || loadingGenre;
        const listHeight = hasOneSection(movieRecommendations, tvRecommendations, onaRecommendations);

        if (loadRecommendations(movieRecommendations, tvRecommendations, onaRecommendations)) {
            return (
                <div className="recAnimeListContainer">
                    <Grid container spacing={0}>
                        <Grid item xs={2}>
                            <Paper
                                className={classes.paper}
                            >
                                <SideMenu />
                            </Paper>
                        </Grid>
                        <Grid item xs={size}>
                            <Paper
                                className={classes.paper}
                                style={{
                                    backgroundColor: '#24323F',
                                    boxShadow: "0px 0 10px rgba(0, 0, 0, 0.8);",
                                    height: listHeight,
                                    paddingBottom: '21px',
                                }}>
                                {showLoader ? <Spinner /> : null}
                                <DynamicRecommendationsList
                                    section={TV}
                                    animeList={tvRecommendations}
                                    index={tvRecommendationIndex}
                                />
                                <DynamicRecommendationsList
                                    section={MOVIE}
                                    animeList={movieRecommendations}
                                    index={movieRecommendationIndex}
                                />
                                <DynamicRecommendationsList
                                    section={ONA}
                                    animeList={onaRecommendations}
                                    index={onaRecommendationIndex}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                    {showModal && <Modal />}
                </div>
            )
        } else if (showLoader) {
            return (<Spinner />)
        } else {
            return (null)
        }
    }
}

function mapStateToProps(state) {
    return {
        animeTitleList: state.animeListReducer.animeTitleList,
        filterOptions: state.filters.filterOptions,
        filterGenreOptions: state.genres.filterGenreOptions,
        showErrorMsg: state.errorHandler.showErrorMsg,
        errorResponse: state.errorHandler.errorResponse,
        showModal: state.modalReducer.showModal,
        loadingAnimeList: state.animeListReducer.loadingAnimeList,
        loadingModal: state.modalReducer.loadingModal,
        loadingFilter: state.filters.loadingFilter,
        loadingGenre: state.genres.loadingGenre,
        recommendedIndex: state.animeListReducer.recommendedIndex,
        movieRecommendations: state.recommendations.movieRecommendations,
        tvRecommendations: state.recommendations.tvRecommendations,
        ovaRecommendations: state.recommendations.ovaRecommendations,
        onaRecommendations: state.recommendations.onaRecommendations,
        tvRecommendationIndex: state.paginations.tvRecommendationIndex,
        movieRecommendationIndex: state.paginations.movieRecommendationIndex,
        ovaRecommendationIndex: state.paginations.ovaRecommendationIndex,
        onaRecommendationIndex: state.paginations.onaRecommendationIndex
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getRecommendationlist: (animeTitleList, filterOptions,
            filterGenreOptions) => dispatch(getRecommendationlist(animeTitleList, filterOptions, filterGenreOptions)),
        clearRecommendations: () => dispatch(clearRecommendations())
    };
}

RecommendationAnimeList.propTypes = {
    animeTitleList: PropTypes.array,
    filterOptions: PropTypes.array,
    filterGenreOptions: PropTypes.array,
    errorResponse: PropTypes.string,
    showErrorMsg: PropTypes.bool,
    showModal: PropTypes.bool,
    isLoading: PropTypes.bool
}

export default
    withHooksHOC(
        connect(mapStateToProps, mapDispatchToProps)
            (RecommendationAnimeList)
    );
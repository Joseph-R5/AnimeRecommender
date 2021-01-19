import React from "react";
import { connect } from "react-redux";
import "./recommendedAnimes.css";
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import 'fontsource-roboto';
import { toggleModal, increaseRecommendedIndex, decreaseRecommendedIndex, loadSpinner } from "../../actions/index";
import { animeRecommendationListSlicer, showArrowNext, showArrowBack } from "../../util/utils";
import { LOAD_MODAL_SPINNER } from "../../constants/action-types";

const RecommendedAnimes = (props) => {
    const {
        list, index, showModal,
        toggleModal, loadSpinner,
        section, increaseRecommendedIndex, decreaseRecommendedIndex,
    } = props;

    const slicedList = animeRecommendationListSlicer(index, list, false)

    if (slicedList.length > 0) {
        return (
            <div className="recommendedAnimeSecionList">
                <div className="arrowLeft">
                    <ArrowBackIcon
                        fontSize="large"
                        onClick={() => {
                            decreaseRecommendedIndex(index, section)
                        }}
                        style={{
                            color: '#fff',
                            visibility: showArrowBack(index)
                        }}
                    />
                </div>
                <div className="recommendedAnimeList">
                    {slicedList.map(el => (
                        <div className="recommendedAnimeItem">
                            <Card
                                style={{
                                    height: 360,
                                    width: 200,
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none'
                                }}>
                                <CardMedia
                                    style={{ height: 300, width: 200 }}
                                    onClick={() => {
                                        loadSpinner(LOAD_MODAL_SPINNER);
                                        toggleModal(showModal, el);
                                    }}
                                    image={el.image_url}
                                />
                                <span className="recommendedAnimeTitle">{el.title}</span>
                            </Card>
                        </div>
                    ))}
                </div>
                <div className="arrowRight">
                    <ArrowForwardIcon
                        fontSize="large"
                        onClick={() => {
                            increaseRecommendedIndex(index, list.length, section)
                        }}
                        style={{
                            color: '#fff',
                            visibility: showArrowNext(index, list.length)
                        }}
                    />
                </div>
            </div>
        )
    } else {
        return null
    }
}

function mapStateToProps(state) {
    return {
        showModal: state.modalReducer.showModal
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleModal: (toggle, anime) => dispatch(toggleModal(toggle, anime)),
        increaseRecommendedIndex: (index, length, section) => dispatch(increaseRecommendedIndex(index, length, section)),
        decreaseRecommendedIndex: (index, section) => dispatch(decreaseRecommendedIndex(index, section)),
        loadSpinner: (type) => dispatch(loadSpinner(type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedAnimes);
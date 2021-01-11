import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { toggleModal } from "../../actions/index";
import CardMedia from '@material-ui/core/CardMedia';
import Slide from '@material-ui/core/Slide';
import "./modal.css";
import PropTypes from 'prop-types';
import { calculateAverageAnimeWatchTime, numberFormatter, timestampConverter } from '../../util/utils';
import { addAnime } from "../../actions/index";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = (props) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
    const { recommendedAnime, addAnime, toggleModal, showModal } = props;
    const { airing, end_date, episodes, image_url, members, rated, score, start_date, synopsis, title, type, url } = recommendedAnime.results[0]
    const durationTime = calculateAverageAnimeWatchTime(episodes, type);
    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={showModal}
                onClose={() => toggleModal(true, null)}
                TransitionComponent={Transition}
            >
                <DialogTitle>
                    <h1 className="modalTitle">{title}</h1>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div className="dialogListContainer">
                            <div className="dialogCardMedia">
                                <CardMedia
                                    style={{
                                        height: 300,
                                        width: 200
                                    }}
                                    image={image_url}
                                />
                            </div>
                            <div className="dialogListInformationContainer">
                                <div className="dialogListInformationItem">
                                    {type === "TV" ? " " + episodes + " episodes" : ""}
                                </div>
                                <div className="dialogListInformationItem">
                                    {timestampConverter(start_date)}
                                    {type === "TV" ?
                                        " " + type + " Show" :
                                        " " + type
                                    }
                                </div>
                                <div className="dialogListInformationItem">
                                    Rated {rated}
                                </div>
                                <div className="dialogListInformationItem">
                                    {numberFormatter(members)} members
                                </div>
                                <div className="dialogListInformationItem">
                                    {airing ? "Airing" : "Completed"}
                                </div>
                                <div className="dialogListInformationItem">
                                    {score} / 10
                                </div>
                                <div className="dialogListInformationItem">
                                    {durationTime > 0 ?
                                        durationTime + " days to complete" :
                                        "Less than one day to finish"
                                    }
                                </div>
                            </div>
                        </div>
                        <br />
                        {synopsis}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus
                        onClick={() => {
                            toggleModal(true, null)
                            addAnime(title)
                        }}
                        color="primary"
                    >
                        +Add
                    </Button>
                    <Button
                        autoFocus
                        onClick={() =>
                            toggleModal(true, null)
                        }
                        color="secondary"
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        showModal: state.showModal,
        recommendedAnime: state.recommendedAnime
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleModal: (toggle, n) => dispatch(toggleModal(toggle, n)),
        addAnime: (title) => dispatch(addAnime(title))
    };
}

Modal.propTypes = {
    showModal: PropTypes.bool,
    recommendedAnime: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

{/* <ul className="dialogListContainer">
                            <li>
                                <CardMedia
                                    style={{
                                        height: 300,
                                        width: 200,

                                    }}
                                    image={image_url}
                                />
                            </li>
                            <li>
                                <ul className="dialogListInfoContainer">
                                    <li>
                                        {type === "TV" ? " " + episodes + " episodes" : ""}
                                        <hr />
                                    </li>
                                    <li>
                                        {timestampConverter(start_date)}
                                        {type === "TV" ?
                                            " " + type + " Show" :
                                            " " + type
                                        }
                                        <hr />
                                    </li>
                                    <li>
                                        Rated {rated}
                                        <hr />
                                    </li>
                                    <li>
                                        {numberFormatter(members)} members
                                        <hr />
                                    </li>
                                    <li>
                                        {airing ? "Airing" : "Completed"}
                                        <hr />
                                    </li>
                                    <li>
                                        {score} / 10
                                        <hr />
                                    </li>
                                    <li>
                                        {durationTime > 0 ?
                                            durationTime + " days to complete" :
                                            "Less than one day to finish"
                                        }
                                    </li>
                                </ul>
                            </li>
                        </ul> */}
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './animeListChip.css';
import Chip from '@material-ui/core/Chip';
import Typography from "@material-ui/core/Typography";
import { deleteAnimeFromList } from "../../actions/index";

const AnimeListChip = (props) => {
    const { animeTitleList, deleteAnimeFromList } = props;

    if (animeTitleList.length > 0) {
        return (
            <div>
                <h2 className="animeListHeader">My Anime List</h2>
                <div className="myAnimeListContainer">
                    {animeTitleList.map((anime, index) => {
                        return (
                            <div 
                                className="myAnimeListItem"
                                key={"key-" + anime}
                            >
                                <Chip
                                    key={"key-" + anime}
                                    variant="outlined"
                                    onDelete={() => deleteAnimeFromList(null, index)}
                                    label={
                                        <Typography
                                            style={{
                                                whiteSpace: 'normal',
                                                textAlign: 'center',
                                                fontSize: '0.9725rem'
                                            }}
                                        >
                                            {anime}
                                        </Typography>
                                    }
                                    style={{
                                        color: '#3EA2AC',
                                        backgroundColor: 'white',
                                        maxWidth: '180px',
                                        height: '100%'
                                    }}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return null;
    }
}

function mapStateToProps(state) {
    return {
        animeTitleList: state.animeListReducer.animeTitleList,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteAnimeFromList: (n, index) => dispatch(deleteAnimeFromList(n, index))
    }
}

AnimeListChip.propTypes = {
    animeTitleList: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimeListChip);
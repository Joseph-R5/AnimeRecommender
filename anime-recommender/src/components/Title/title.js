import React from "react";
import "./title.css";
import { connect } from "react-redux";
import { setMobileOpen } from "../../actions/index";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    }
}));

const Title = (props) => {
    const { setMobileOpen, mobileOpen, animeTitleList } = props;
    const classes = useStyles();

    return (
        <div>
            {!mobileOpen && animeTitleList.length > 0 ? 
            <IconButton
                color="inherit"
                edge="start"
                onClick={() => setMobileOpen(true)}
                className={classes.menuButton}
            >
                <MenuIcon 
                    style={{
                        color: 'white',
                        paddingLeft: '20px'
                    }}
                />  
            </IconButton> : null}
            <h1 className="anime-recommender-title">Anime Recommender</h1>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        mobileOpen: state.mobileReducer.mobileOpen,
        animeTitleList: state.animeListReducer.animeTitleList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setMobileOpen: (payload) => dispatch(setMobileOpen(payload))
    }
}

Title.propTypes = {
    mobileOpen: PropTypes.bool,
    animeTitleList: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);
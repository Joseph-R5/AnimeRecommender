import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import FilterOptions from "../FilterOptions";
import GenreOptions from "../GenreOptions";
import AnimeListChip from "../AnimeListChip";
import { makeStyles } from "@material-ui/core/styles";
import { calculateDrawerWidth, calculateScrollDrawerPosition } from "../../util/";
import { setMobileOpen } from "../../actions/index";
import { useScrollbar, useWindowSize} from "../../hooks";
import "./sideMenu.css";

const useStyles = (scrollPosition, scrollDrawerWidth) => makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    drawerPaper: {
        background: '#3B4956',
        height: '100%',
        width: scrollDrawerWidth,
        top: scrollPosition,
        boxShadow: "10px 2px 10px -2px rgba(0,0,0,0.3)"
    },
    drawerPaperMobile: {
        background: '#3B4956',
        height: '100%',
        width: 317,
        boxShadow: "10px 2px 10px -2px rgba(0,0,0,0.3)"
    },
}));


const SideMenu = (props) => {
    const { mobileOpen, setMobileOpen } = props;
    const scrollPosition = useScrollbar();
    const scrollDrawerPosition = calculateScrollDrawerPosition(scrollPosition)
    const screenWidth = useWindowSize().width;
    const scrollDrawerWidth = calculateDrawerWidth(screenWidth);
    const classes = useStyles(scrollDrawerPosition, scrollDrawerWidth)();

    const drawer = (
        <div className="drawerContainer">
            <AnimeListChip />
            <GenreOptions />
            <FilterOptions />
        </div>
    );

    return (
        <div className={classes.root}>
            <Hidden smDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaperMobile
                    }}
                    variant="temporary"
                    open={mobileOpen}
                    ModalProps={{
                        keepMounted: true
                    }}
                    onClose={() =>
                        setMobileOpen(false)
                    }
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        mobileOpen: state.mobileReducer.mobileOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setMobileOpen: payload => dispatch(setMobileOpen(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
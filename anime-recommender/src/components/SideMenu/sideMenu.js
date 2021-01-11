import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import FilterOptions from "../FilterOptions/filterOptions";
import GenreOptions from "../GenreOptions/genreOptions";
import AnimeListChip from "../AnimeListChip/animeListChip";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { calculateScrollDrawerPosition } from "../../util/utils";
import { setMobileOpen } from "../../actions/index";
import "./sideMenu.css";

const drawerWidth = 317;

const useStyles = scrollPosition => makeStyles((theme) => ({
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
        width: 317,
        top: scrollPosition,
        boxShadow: "10px 2px 10px -2px rgba(0,0,0,0.3)"
    },
    drawerPaperMobile: {
        background: '#3B4956',
        height: '100%',
        width: drawerWidth,
        boxShadow: "10px 2px 10px -2px rgba(0,0,0,0.3)"
    },
}));


const SideMenu = (props) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const theme = useTheme();

    const { mobileOpen,
        setMobileOpen
    } = props;


    const classes = useStyles(calculateScrollDrawerPosition(scrollPosition))();

    const drawer = (
        <div className="drawerContainer">
            <AnimeListChip />
            <GenreOptions />
            <FilterOptions />
        </div>
    );

    return (
        <div className={classes.root}>
            <Hidden smUp implementation="css">
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
        mobileOpen: state.mobileOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setMobileOpen: payload => dispatch(setMobileOpen(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);

{/* <Drawer
variant="temporary"
anchor={theme.direction === "rtl" ? "right" : "left"}
open={!mobileOpen}
onClose={() => setMobileOpen(mobileOpen)}
classes={{
    paper: classes.drawerPaperMobile
}}
ModalProps={{
    keepMounted: true
}}
>
{drawer}
</Drawer> */}
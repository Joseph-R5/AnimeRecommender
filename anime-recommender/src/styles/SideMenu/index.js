import { makeStyles } from "@material-ui/core/styles";

const sideMenuStyles = (scrollPosition, scrollDrawerWidth) => makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawerPaper: {
        background: '#3B4956',
        height: '100%',
        width: scrollDrawerWidth,
        top: scrollPosition,
        boxShadow: "10px 2px 10px -2px rgba(0,0,0,0.3)",
    },
    drawerPaperMobile: {
        background: '#3B4956',
        height: '100%',
        width: 317,
        boxShadow: "10px 2px 10px -2px rgba(0,0,0,0.3)"
    },
}));

export default sideMenuStyles;
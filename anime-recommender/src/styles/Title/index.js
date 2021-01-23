import { makeStyles } from '@material-ui/core/styles';

const titleStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    }
}));

export default titleStyles;
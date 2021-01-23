import { makeStyles } from '@material-ui/core/styles';

const recommendationAnimeListStyles = makeStyles((theme) => ({
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

export default recommendationAnimeListStyles;
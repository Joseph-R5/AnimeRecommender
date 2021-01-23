import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const GenreOptionsStyles = withStyles({
    root: {
        '& .MuiInputBase-root': {
            color: 'white',
        }
    }
})(TextField);

export default GenreOptionsStyles;
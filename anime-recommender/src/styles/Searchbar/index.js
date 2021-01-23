import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';

const SearchBarStyles = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'grey',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'grey',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'grey',
            },
        },
        '& .MuiInputBase-root': {
            color: '#red',
        }
    }
})(TextField);

export default SearchBarStyles;
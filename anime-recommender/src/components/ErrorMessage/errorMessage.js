import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';

import {
    closeErrorMessage
} from "../../actions/index";

function Alert(props) {
    return <MuiAlert elevation={1} variant="filled" {...props} />;
}

class ErrorMessageHandler extends Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.props.closeErrorMessage();
    };

    render() {
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'centre',
                    }}
                    open={this.props.showErrorMsg}
                    autoHideDuration={6000}
                    onClose={() => this.handleOnClick}>
                    <Alert severity="error">
                        {this.props.message}
                        <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleOnClick}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                    </Alert>
                </Snackbar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        showErrorMsg: state.showErrorMsg
    };
}

function mapDispatchToProps(dispatch) {
    return {
        closeErrorMessage: () => dispatch(closeErrorMessage())
    };
}

ErrorMessageHandler.propTypes = {
    showErrorMsg: PropTypes.bool
}

const ErrorMessage = connect(mapStateToProps, mapDispatchToProps)(ErrorMessageHandler)

export default ErrorMessage;
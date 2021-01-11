import React from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import './spinner.css';
import { DialogContent } from '@material-ui/core';

const Spinner = () => {
    return (
        <Dialog
            PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                },
            }}
            open={true}>
            <DialogContent
                style={{ overflow: "hidden" }}
            >
                <CircularProgress />
            </DialogContent>
        </Dialog>
    )
}

Spinner.propTypes = {
    isLoading: PropTypes.bool
}

export default connect(null, null)(Spinner)
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4)
    }
}))

const Footer = props => {
    const classes = useStyles();
    const { className, ...rest } = props;
    return (
        <div {...rest} className={clsx(classes.root, className)}>
            <Typography variant="body1">
                &copy;{' '}
                <Link
                    component="Source"
                    href="/dashboard"
                    target="_blank"
                >
                    For the good future
                </Link>
            </Typography>
            <Typography variant="caption">
            Created with love for the environment. By designers and developers who
            love to work together in offices!
            </Typography>
        </div>
    )
}

Footer.propTypes = {
    className: PropTypes.string
}

export default Footer;

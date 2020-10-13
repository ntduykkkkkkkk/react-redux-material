import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Avatar, Typography } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content'
    },
    avatar: {
        width: '60',
        height: '60'
    },
    name: {
        marginTop: theme.spacing(1)
    }
}))

const Profile = props => {
    const { className, ...rest } = props;
    const classes = useStyles();
    const user = {
        name: 'Zhang Min',
        avatar: '/images/avatars/avatar_6.png',
        bio: 'For a sweet feature'
    }
    return (
        <div {...rest} className={clsx(classes.root, className)}>
            <Avatar
                alt='person'
                className={classes.avatar}
                src={user.avatar}
                component={RouterLink}
                to='/account'
            />
            <Typography className={classes.name} variant='h4'>{user.name}</Typography>
            <Typography variant='body2'>{user.bio}</Typography>
        </div>
    )
}

Profile.propTypes = {
    className: PropTypes.string
}

export default Profile;
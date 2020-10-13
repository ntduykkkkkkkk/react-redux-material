import React from 'react';
import { Avatar, Typography, withStyles } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom";

const styles = theme => ({
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
})

const Profile = ({classes}) => {
    const user = {
        name: 'Zhang Min',
        avatar: '/images/avatars/avatar_6.png',
        bio: 'For a sweet feature'
    }
    return (
        <div className={`${classes.root}`}>
            <Avatar
                variant="square"
                className={classes.square}
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

export default withStyles(styles)(Profile)
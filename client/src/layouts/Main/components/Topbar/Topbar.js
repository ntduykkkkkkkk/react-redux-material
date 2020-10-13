import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import NotifycationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: 'none'
    },
    flexGrow: {
        flexGrow: '1'
    },
    signOutButton: {
        marginLeft: theme.spacing(1)
    }
}))

const Topbar = props => {
    const { className, onSidebarOpen, ...rest } = props;
    const classes = useStyles();
    const [notifycation] = useState([]) 
    return (
        <AppBar {...rest} className={clsx(classes.root, className)}>
            <Toolbar>
                <RouterLink to="/">
                    <img alt="logo" src="/images/logos/logo--white.svg" /> 
                </RouterLink>
                <div className={classes.flexGrow} />
                <Hidden mdDown>
                    <IconButton color="inherit">
                        <Badge badgeContent={notifycation.length} color="primary" variant="dot">
                            <NotifycationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton className={classes.signOutButton} color="inherit">
                        <InputIcon />
                    </IconButton>
                </Hidden>
                <Hidden lgUp>
                    <IconButton color="inherit" onClick={onSidebarOpen}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

Topbar.propTypes = {
    className: PropTypes.string,
    openSidebar: PropTypes.func
}

export default Topbar;

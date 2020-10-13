import React, { useState } from 'react';
import { Sidebar, Topbar, Footer } from './components';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 56,
        height: '100%',
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64
        }
    },
    content: {
        height: '100%'
    },
    shiftContent: {
        paddingLeft: 240
    }
}))

const Main = props => {
    const { children } = props;
    const classes = useStyles();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
        defaultMatches: true
    })
    const [openSidebar, setOpenSidebar] = useState(false)
    const handleSidebarOpen = () => {
        setOpenSidebar(true);
    }
    const handleSidebarClose = () => {
        setOpenSidebar(false);
    }
    const shouldOpenSidebar = isDesktop ? true : openSidebar;
    return (
        <div className={clsx({
            [classes.root]: true,
            [classes.shiftContent]: isDesktop
        })}>
            <Topbar openSidebar={handleSidebarOpen} />
            <Sidebar 
                onClose={handleSidebarClose}
                open={shouldOpenSidebar}
                variant={isDesktop ? 'persistent' : 'temporary'}
            />
            <main className={classes.content}>
                {children}
                <Footer />
            </main>
        </div>
    )
}

Main.propTypes = {
    children : PropTypes.node
}

export default Main

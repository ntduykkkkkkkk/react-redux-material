import React from 'react'
import { withStyles, AppBar, Toolbar } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

const styles = theme => ({
    root: {
        boxShadow: 'none'
    }
})

const Topbar = ({classes}) => {
    return (
        <AppBar className={`${classes.root}`} color="primary" position="fixed">
            <Toolbar>
                <RouterLink to="/" ><img alt="logo" src="/images/logos/logo--white.svg" /></RouterLink>
            </Toolbar>
        </AppBar>
    )
}

export default (withStyles(styles)(Topbar))

import React from 'react'
import { withStyles } from '@material-ui/core'
import { Topbar } from './components'
import PropTypes from 'prop-types'

const styles = theme => ({
    root: {
        paddingTop: 64,
        height: '100%',
    },
    content: {
        height: '100%',
    }
})

const Minimal = ({classes, ...props}) => {
    const { children } = props;
    return (
        <div className={`${classes.root}`}>
            <Topbar />
            <main className={classes.content}>{children}</main>
        </div>
    )
}

Minimal.propTypes = {
    children: PropTypes.node
}

export default (withStyles(styles)(Minimal))

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Button } from '@material-ui/core'

const styles = theme => ({
    root: {},
    row: {
        height: '42px',
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(1)
    },
    spacer: {
        flexGrow: 1
    },
    importButton: {
        marginRight: theme.spacing(1)
    },
    exportButton: {
        marginRight: theme.spacing(1)
    },
})

const Toolbar = ({classes, ...props}) => {
    const { className, ...rest } = props;
    return (
        <div {...rest} className={`${classes.root}`}>
            <div className={`${classes.row}`}>
                <span className={`${classes.spacer}`}/>
                <Button className={`${classes.importButton}`}>Import</Button>
                <Button className={`${classes.exportButton}`}>Emport</Button>
                <Button color="primary" variant="contained">New User</Button>
            </div>
        </div>
    )
}

Toolbar.propTypes = {
    className: PropTypes.string
}

export default (withStyles(styles)(Toolbar))

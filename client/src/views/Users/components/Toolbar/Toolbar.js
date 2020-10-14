import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

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
        marginRight: theme.spacing(2)
    },
    exportButton: {
        marginRight: theme.spacing(2)
    },
    deleteButton: {
        marginRight: theme.spacing(2)
    },
})

const Toolbar = ({classes, ...props}) => {
    const { className, ...rest } = props;
    return (
        <div {...rest} className={`${classes.root}`}>
            <div className={`${classes.row}`}>
                <span className={`${classes.spacer}`}/>
                <Button
                    // variant="contained"
                    // color="primary"
                    // size="small"
                    className={`${classes.importButton}`}
                    // startIcon={<SaveIcon />}
                >
                    <Link to="/create-user">Create</Link>
                    
                </Button>
                <Button 
                    // color="secondary" 
                    className={`${classes.importButton}`} 
                    // variant="contained" 
                    // size="small"
                    // startIcon={<DeleteIcon />}
                >
                        Delete
                </Button>
                <Button className={`${classes.importButton}`}>Import</Button>
                <Button className={`${classes.exportButton}`}>Export</Button>
            </div>
        </div>
    )
}

Toolbar.propTypes = {
    className: PropTypes.string
}

export default (withStyles(styles)(Toolbar))

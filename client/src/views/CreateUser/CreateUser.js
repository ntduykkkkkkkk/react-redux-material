import React from 'react'
import { Details, Profile } from './components'
import { withStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const styles = theme => ({
    root: {
        padding: theme.spacing(4)
    }
})

const CreateUser = ({classes, ...props}) => {
    return (
        <div className={`${classes.root}`}>
            <Grid container spacing={4}>
                <Grid item lg={4} md={6} xl={4} xs={12}><Profile /></Grid>
                <Grid item lg={8} md={6} xl={8} xs={12}><Details /></Grid>
            </Grid>
        </div>
    )
}

export default (withStyles(styles)(CreateUser));

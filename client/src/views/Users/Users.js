import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import mockData from './data'
import { Toolbar, UserTable } from './components'

const styles = theme => ({
    root: {
        padding: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(2)
    }
})

const Users = ({classes, ...props}) => {
    const [users] = useState(mockData)
    return (
        <div className={`${classes.root}`}>
            <Toolbar />
            <div className={`${classes.content}`}>
                <UserTable users={users} />
            </div>
        </div>
    )
}
export default (withStyles(styles)(Users))

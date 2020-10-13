import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import moment from 'moment'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { connect } from 'react-redux'
import * as userActions from '../../../../_actions/user'
import { 
    Card,
    CardActions,
    Typography,
    CardContent,
    Avatar,
    Checkbox,
    Table,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    TablePagination
} from '@material-ui/core'

const styles = theme => ({
    root: {},
    content: {
        padding: 0
    },
    inner: {
        minWidth: 1050
    },
    nameContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        marginRight: theme.spacing(2)
    },
    actions: {
        justifyContent: 'flex-end',
    }
})

const UserTable = ({classes, ...props}) => {

    useEffect(() => {
        props.fetchAllUsers()
    }, [])
    const [selectedUsers, setSelectedUsers] = useState([])
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [page, setPage] = useState(0)

    const handleSelectAll = (event) => {
        let selectedUsers;
        if (event.target.checked) {
            selectedUsers = props.userList.map(user => user._id)
        }else{
            selectedUsers = [];
        }
        setSelectedUsers(selectedUsers);
    }

    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedUsers.indexOf(id);
        let newSelectedUsers = [];

        if (selectedIndex === -1) {
            newSelectedUsers = newSelectedUsers.concat(selectedUsers, id)
        }else if (selectedIndex === 0){
            newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1))
        }else if (selectedIndex === selectedUsers.length - 1){
            newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1))
        }else if (selectedIndex > 0) {
            newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, selectedIndex), selectedUsers.slice(selectedIndex + 1))
        }
        setSelectedUsers(newSelectedUsers)
    }

    const handlePageChange = (event, page) => {
        setPage(page)
    }

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(event.target.value)
    }
    return (
        <Card className={`${classes.root}`}>
            <CardContent className={`${classes.content}`}>
                <PerfectScrollbar>
                    <div className={`${classes.inner}`}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox 
                                            checked={selectedUsers.length === props.userList.length}
                                            color="primary"
                                            indeterminate={
                                                selectedUsers.length > 0 && selectedUsers.length < props.userList.length
                                            }
                                            onChange={handleSelectAll}
                                        />
                                    </TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Registration</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.userList.slice(0, rowsPerPage).map(user => (
                                        <TableRow key={user._id} hover className={classes.tableRow} selected={selectedUsers.indexOf(user._id) !== -1}>
                                            <TableCell padding="checkbox">
                                                <Checkbox 
                                                checked={selectedUsers.indexOf(user._id) !== -1}
                                                color="primary"
                                                onChange={event => handleSelectOne(event, user._id)}
                                                value="true"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <div className={`${classes.nameContainer}`}>
                                                    <Avatar className={`${classes.avatar}`} src={user.avatarUrl}>{user.name}</Avatar>
                                                    <Typography variant="body1">{user.firstName} {user.lastName}</Typography>
                                                </div>
                                            </TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.firstName}</TableCell>
                                            <TableCell>{user.lastName}</TableCell>
                                            <TableCell>{moment(user.createdAt).format('DD/MM/YYYY')}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </div>
                </PerfectScrollbar>
            </CardContent>
            <CardActions>
                <TablePagination 
                    component="div"
                    count={props.userList.length}
                    onChangePage={handlePageChange}
                    onChangeRowsPerPage={handleRowsPerPageChange}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </CardActions>
        </Card>
    )
}

UserTable.propTypes = {
    className: PropTypes.string
}

const mapStateToProps = state => ({
    userList: state.user.list
})

const mapActionToProps = {
    fetchAllUsers: userActions.fetchAllUsers
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(UserTable))

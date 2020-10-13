import React from 'react'
import moment from 'moment';
import { Card, Avatar, Typography, CardContent, CardActions, Divider, Button, LinearProgress, withStyles } from '@material-ui/core';
 
const styles = theme => ({
    root: {},
    details: {
        display: 'flex',
    },
    avatar: {
        marginLeft: 'auto',
        height: 110,
        width: 100,
        flexShrink: 0,
        flexGrow: 0
    },
    progress: {
        marginTop: theme.spacing(2)
    },
    uploadButton: {
        marginRight: theme.spacing(2)
    }
})

const Profile = ({classes, ...props}) => {
    const user = {
        name: 'Zhang Min',
        avatar: '/images/avatars/avatar_6.png',
        bio: 'For a sweet feature',
        city: 'Shang Hai',
        country: 'China',
        timezone: 'GTM-7',
    }
    return (
        <Card className={`${classes.root}`}>
            <CardContent>
                <div className={`${classes.details}`}>
                    <div>
                        <Typography gutterBottom variant="h2">{user.name}</Typography>
                        <Typography className={classes.locationText} corlor="textSecondary" variant="body1">{user.city}, {user.country}</Typography>
                        <Typography className={classes.dateText} corlor="textSecondary" variant="body1">{moment().format('hh:mm A')} ({user.timezone})</Typography>
                    </div>
                    <Avatar variant="square" className={classes.square} className={`${classes.avatar}`} src={user.avatar}/>
                </div>
                <div className={`${classes.progress}`}>
                    <Typography variant="body1"> Profile Completeness: 70%</Typography>
                    <LinearProgress value={70} variant="determinate" />
                </div>
            </CardContent>
            <Divider />
            <CardActions>
                <Button className={`${classes.uploadButton}`} color="primary" variant="text">
                    Upload picture
                </Button>
                <Button className={`${classes.uploadButton}`} color="action" variant="text">
                    Remove picture
                </Button>
            </CardActions>
        </Card>
    )
}

export default (withStyles(styles)(Profile))

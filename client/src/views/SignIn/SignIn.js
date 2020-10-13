import React, { useState, useEffect } from 'react'
import { 
    withStyles,
    Grid,
    Button,
    IconButton,
    TextField,
    Link,
    Typography
} from '@material-ui/core';
import validate from 'validate.js'
import { Link as RouterLink, withRouter } from 'react-router-dom'
import { Facebook as FacebookIcon, Google as GoogleIcon } from '../../icons';
import { signInSchema } from './validator'

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        height: '100%'
    },
    grid: {
        height: '100%'
    },
    quoteContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    quote: {
        backgroundColor: theme.palette.neutral,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(/images/avatar.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    quoteInner: {
        textAlign: 'center',
        flexBasis: '700px',
    },
    quoteText: {
        color: theme.palette.white,
        fontWeight: 300
    },
    name: {
        marginTop: theme.spacing(2),
        color: theme.palette.white
    },
    bio: {
        color: theme.palette.white,
    },
    contentContainer: {},
    content: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    contentHeader: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    logoImage: {
        marginLeft: theme.spacing(4)
    },
    contentBody: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center'
        }
    },
    form: {
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 125,
        flexBasis: 700,
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        }
    },
    title: {
        marginTop: theme.spacing(3)
    },
    socialButtons: {
        marginTop: theme.spacing(3)
    },
    socialIcon: {
        marginRight: theme.spacing(1)
    },
    suggestion: {
        marginTop: theme.spacing(2)
    },
    textField: {
        marginTop: theme.spacing(2)
    },
    signInButton: {
        margin: theme.spacing(2, 0)
    }
})

const SignIn = ({classes, ...props}) => {
    const handleSignIn = event => {
        event.preventDefault();
        console.log("signin")
    }
    const [formState, setFormState] = useState({
        isValid: false,
        errors: {},
        touched: {},
        values: {}
    })
    
    useEffect(() =>{
        const errors = validate(formState.values, signInSchema)

        setFormState(formState => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {}
        }))
    }, [formState.values])

    const handleChange = event => {
        event.persist()

        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values, 
                [event.target.name] : event.target.type === 'checkbox' ? event.target.checked : event.target.value
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true
            }
        }))
    }

    const hasError = field => formState.touched[field] && formState.errors[field] ? true : false
    
    return (
        <div className={`${classes.root}`}>
            <Grid className={`${classes.grid}`} container>
                <Grid className={`${classes.quoteContainer}`} item lg={5}>
                    <div className={`${classes.quote}`}>
                        <div className={`${classes.quoteInner}`}>
                            <div className={`${classes.person}`}>
                                {/* <Typography className={`${classes.name}`} variant="body1">
                                    Nguyen Thanh Duy
                                </Typography>
                                <Typography className={`${classes.bio}`} variant="body2">
                                    Normal Person
                                </Typography> */}
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid className={`${classes.content}`} item lg={7} xs={12}>
                    <div className={`${classes.content}`}>
                        <div className={`${classes.contentHeader}`}></div>
                        <div className={`${classes.contentBody}`}>
                            <form className={`${classes.form}`} onSubmit={handleSignIn}>
                                <Typography className={`${classes.title}`} variant="h2">Sign In</Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    Here's everything you want to see
                                </Typography>
                                <Grid className={`${classes.socialButtons}`} container spacing={2}>
                                    <Grid item>
                                        <Button color="primary" variant="contained" size="large" onClick={handleSignIn}>
                                            <FacebookIcon className={`${classes.socialIcon}`} />
                                            Login with Facebook
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button color="primary" variant="contained" size="large" onClick={handleSignIn}>
                                            <GoogleIcon className={`${classes.socialIcon}`} />
                                            Login with Google
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Typography className={`${classes.suggestion}`} align="center" color="textSecondary" variant="body1">
                                    or login with email address
                                </Typography>
                                <TextField 
                                    className={`${classes.textField}`} 
                                    error={hasError('email')}
                                    fullWidth
                                    helperText={
                                        hasError('email') ? formState.errors.email[0] : null
                                    }
                                    label="Email address"
                                    name="email"
                                    onChange={handleChange}
                                    type="text"
                                    value={formState.values.email || ''}
                                    variant="outlined"
                                />
                                <TextField 
                                    className={`${classes.textField}`} 
                                    error={hasError('password')}
                                    fullWidth
                                    helperText={
                                        hasError('password') ? formState.errors.password[0] : null
                                    }
                                    label="Password"
                                    name="password"
                                    onChange={handleChange}
                                    type="password"
                                    value={formState.values.password || ''}
                                    variant="outlined"
                                />
                                <Button 
                                    className={`${classes.signInButton}`}
                                    color="primary"
                                    disabled={!formState.isValid}
                                    fullWidth  
                                    size="large"
                                    type="submit"
                                    variant="contained"  
                                >
                                    Sign In
                                </Button>
                                <Typography color="textSecondary" variant="body1">
                                    Don't have an account?{' '}
                                    <Link to="/sign-up" component={RouterLink} variant="h6">Sign Up</Link>
                                </Typography>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default (withStyles(styles)(SignIn))

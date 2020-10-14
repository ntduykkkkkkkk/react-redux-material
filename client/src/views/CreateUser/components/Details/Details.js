import React, { useState } from 'react'
import { withStyles } from '@material-ui/core';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Divider,
    Grid,
    Button,
    TextField
  } from '@material-ui/core';

const styles = theme => ({
    root: {}
})

const Details = ({classes, ...props}) => {
    const [values, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    }) 
    const handleChange = (event) => {
        setValue({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const states = [
        {
            value: "Chong-qing",
            label: "Chong Qing"
        },
        {
            value: "nan-jing",
            label: "Nan jing"
        },
        {
            value: "bei-jing",
            label: "Bei Jing"
        }
    ]
    return (
        <Card className={`${classes.root}`}>
            <form noValidate autoComplete="off">
                <CardHeader subheader="Account's information" title="Profile" />
                <Divider />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <TextField 
                                fullWidth 
                                helperText="Please type the first name" 
                                label="Fist name"
                                margin="dense" 
                                name="firstName" 
                                onChange={handleChange}
                                value={values.firstName}
                                variant="outlined"
                                />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                                fullWidth 
                                helperText="Please type the last name" 
                                label="Last name"
                                margin="dense" 
                                name="lastName" 
                                onChange={handleChange}
                                value={values.lastName}
                                variant="outlined"
                                />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                                fullWidth 
                                helperText="Please type the email" 
                                label="Email"
                                margin="dense" 
                                name="email" 
                                onChange={handleChange}
                                value={values.email}
                                variant="outlined"
                                required
                                />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                                fullWidth 
                                helperText="Please type the password" 
                                label="Password"
                                margin="dense" 
                                name="password" 
                                onChange={handleChange}
                                value={values.password}
                                variant="outlined"
                                required
                                />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                                fullWidth 
                                helperText="Please type the password confirm" 
                                label="Password confirm"
                                margin="dense" 
                                name="passwordConfirm" 
                                onChange={handleChange}
                                value={values.passwordConfirm}
                                variant="outlined"
                                required
                                />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                                fullWidth 
                                helperText="Please select your state" 
                                label="State"
                                margin="dense" 
                                name="state" 
                                onChange={handleChange}
                                value={values.firstName}
                                variant="outlined"
                                select
                                value={values.state}
                                SelectProps={{ native: true }}
                            >
                                {
                                    states.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))
                                }
                            </TextField>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <CardActions>
                    <Button color="primary" variant="contained">
                        Save details
                    </Button>
                </CardActions>
            </form>
        </Card>
    )
}


export default (withStyles(styles)(Details))

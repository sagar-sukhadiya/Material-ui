import React from 'react'
import Container from '@material-ui/core/Container';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import umbrella from '../images/umbrella.jpg';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Formik , Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";
function Contact() {
    const useStyles = makeStyles((theme) => ({
        title: {
            marginTop: "20px",
            fontWeight: "650",
            paddingBottom: theme.spacing(3),

        },
        container: {
            border: "green solid",
            borderRadius: "30px",
            height: "65vh",
            marginBottom: "20px",
            marginTop: "20px",
            background: `linear-gradient(to bottom right, #04303140,#00606473),url(${umbrella})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        },
        card: {
            borderRadius:"10px",
            width: "50vh",
            height: "60vh",
            marginBottom: "20px",
            backgroundColor: "#83678B",
            padding:"25px",
        }
    }))
    const classes = useStyles();
    const initialValues={
        email:'',
        phone:'',
        address:'',
    }

    const validationSchema=Yup.object().shape({
        email:Yup.string().email("Enter a valid emial").required("Required"),
        phone:Yup.number().typeError("Enter a valid number").required("Required"),
        address:Yup.string().required("Required")
    })
    const onSubmit= async(values,props)=>{
    
        // console.log(values);
        await axios.post("http://127.0.0.1:3002/posts",
        JSON.stringify(values),{
            headers: {
              "Content-Type": "application/json",
          },
         

        }
        )
        alert("submitted");
        props.resetForm()
    }
    return (
        <div id="contact">
            <Container className={classes.container}>
                <Typography variant="h4" className={classes.title}>Contact</Typography>
                <Grid container spacing={4} maxWidth="lg">
                    <Grid item xs={12} sm={6}>
                        <Box className={classes.card}>
                            <Formik initialValues={initialValues}
                                    onSubmit={onSubmit}
                                    validationSchema={validationSchema}>
                            {(props)=>(
                                <Form >
                                    <fieldset style={{textAlign:"center", marginTop:"40px"}}>
                                    <legend style={{color:"white"}}>Contact Form</legend>
                                    
                                    <Field as={TextField} required id="standard-required" type="email" label="Email"
                                                name="email"
                                                error={props.errors.email && props.touched.email}
                                                value={props.values.email}
                                                onChange={props.handleChange}  
                                                helperText={<ErrorMessage name="email"/>}
                                                /><br/>
                                    
                                    <Field as={TextField} required id="standard-required" label="Phone" 
                                                name="phone"
                                                error={props.errors.phone && props.touched.phone}
                                                value={props.values.phone}
                                                onChange={props.handleChange} 
                                                helperText={<ErrorMessage name="phone"/>}
                                    /><br/><br/>
                                    
                                    <Field as={TextField}
                                        id="outlined-multiline-static"
                                        label="Address"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        name="address"
                                        value={props.values.address}
                                        onChange={props.handleChange}
                                        error={props.errors.address && props.touched.address}
                                        helperText={<ErrorMessage name="address"/>}
                                        /><br/><br/>
                                    <Button variant="contained" size="small" color="secondary" type="submit" className={classes.margin}>Submit</Button>
                                    </fieldset>
                                </Form>
                            )}
                                
                            </Formik>
                        </Box>
                    </Grid>
                </Grid>


            </Container>
        </div>
    )
}

export default Contact

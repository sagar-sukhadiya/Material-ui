import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import bird from '../images/bird.png'

function About() {
    const useStyles = makeStyles((theme) => ({
       title:{
           marginTop:"20px",
           fontWeight: "650",
           paddingBottom: theme.spacing(3),
           
       },
       top:{
           marginTop:"10px",
       },
       paper:{
           marginTop:"10px",
           backgroundColor:"#C39EA0",
       },
       container: {
        paddingTop: theme.spacing(3),
        marginBottom:"20px"
       }
    }))
    const classes = useStyles();
    return (
        <div id="about" style={{marginTop:"20px"}}>       
        <Container style={{borderRadius:"5px"}}>
        <Typography variant="h4" className={classes.title}>About</Typography>
            <Grid container spacing={4} maxWidth="lg" className={classes.container}>           
                <Grid item  xs={12} sm={6}>
                    <Paper className={classes.papar} style={{backgroundColor:"#C39EA0"}}>
                        <Box p={3} >
                            <Typography variant="h4" style={{color:"#FA255E"}}>Read Docs</Typography>
                            <Typography variant="subtitle1" className={classes.top}>
                                Positive thinking is a belief, a mental attitude that admits into the mind thoughts, words and images that good things will happen and that one’s efforts will be crowned with success. Positive thinking is opposed to negative thinking which harbours the mind through thoughts on apprehensiveness, fearfulness, and unsure of success in efforts.
                                Positive thinking is reinforced by thoughts such as optimism, hope, and belief that hard work is never wasted. A positive mind anticipates happiness, health,  joy, and a successful outcome of every situation and action and works wonders like magic.
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item  xs={12} sm={6}>
                    
                        <img src={bird} style={{width:"400px", height:"334px"}}/>
                   
                </Grid>
            </Grid>
        </Container>
            
        </div>

    )
}

export default About

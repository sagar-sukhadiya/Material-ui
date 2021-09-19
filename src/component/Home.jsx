import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';




function Home() {
    const useStyles = makeStyles((theme) => ({
       
        hero: {
            marginTop:"67px",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://source.unsplash.com/user/erondu")`,
            height: "700px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "4rem",
            [theme.breakpoints.down("sm")]:{
                height:300,
                fontSize:"3em"
            },
           

        },
       
        navlink:{
            color:"black",
            textDecoration:"none",
            marginRight:20,
            fontSize:20,
            fontWeight:"bold",
            justifyContent:"flex-end"
            
        },
        
        toolbar:{
            display:"flex",
            justifyContent:"flex-end"
        },
       
    }));
    const classes = useStyles();
    return (
        <>
            <div id="main">
            <Container>

            <Box className={classes.hero}>
                <Box>
                    Blog
                </Box>
            </Box>
            </Container>

            </div>
           
        </>
    )
}
export default Home;
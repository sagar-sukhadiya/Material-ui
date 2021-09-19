import React from 'react'
import { NavLink } from 'react-router-dom';
import { AppBar,Toolbar,Typography, makeStyles } from '@material-ui/core'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import Container from '@material-ui/core/Container'

function Navbarr() {
    const useStyle = makeStyles({
        appbar: {
            backgroundColor: "#001F3F"
        },
        toolbar:{
            display:"flex",
            justifyContent:"flex-end"
        },
        navlink:{
            color:"white",
            textDecoration:"none",
            marginRight:10,
            fontSize:20,
            
            cursor:"pointer",
            
            
        },
    });
    const classes = useStyle();
    return (
        <div>
        <Container>
            <AppBar position="fixed" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
            {/* <BrowserRouter>
                <Switch>
                <Route>
                    <NavLink className={classes.navlink} smooth={true} duration={1000} to="/" exact>Home</NavLink>
                    <NavLink className={classes.navlink} smooth={true} duration={1000} to="article" exact>Article</NavLink>
                    <NavLink className={classes.navlink} smooth={true} duration={1000} to="about" exact>about</NavLink>
                    <NavLink className={classes.navlink} mooth={true} duration={1000} to="contact" exact>contact</NavLink>
                </Route>
                </Switch>
                </BrowserRouter> */}
                
                <ul><Link to="main" activeClass="active" spy={true}  smooth={true}  className={classes.navlink}>Home</Link></ul>
                <ul><Link to="about" activeClass="active" spy={true} offset={20} smooth={true}  className={classes.navlink}>About</Link></ul>
                <ul><Link to="article" activeClass="active" spy={true} offset={20} smooth={true}  className={classes.navlink}>Article</Link></ul>
                <ul><Link to="contact" activeClass="active" spy={true} offset={20} smooth={true}  className={classes.navlink}>Contact</Link></ul>
                
                </Toolbar>
            </AppBar>
        </Container>
        </div>
    )
}

export default Navbarr

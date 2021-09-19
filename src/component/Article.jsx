import React from 'react'
import { Avatar, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
function Article() {
    const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(3),
        marginTop:"20px"
    },
    blogTitle: {
        fontWeight: "650",
        paddingBottom: theme.spacing(3),
       
    },
    card:{
        maxWidth:"100%"
    },
    media:{
        height:240
    },
    action:{
        display:"flex",
        margin:"0 10px",
        justifyContent:"space-between"
    },
    author:{
        display:"flex"
    },
}))
    const classes = useStyles();
    return (
        <div id="article">
           
             <Container maxWidth="lg" className={classes.container} style={{borderRadius:"5px"}}>
                <Typography variant="h4" className={classes.blogTitle}>Articles</Typography>
                <Grid container spacing={3} style={{marginBottom:"20px"}}> 
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?cs=srgb&dl=pexels-fauxels-3184418.jpg&fm=jpg"
                                    title="Charity photos"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Team
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.action}>
                               <Box className={classes.author}>
                                   <Avatar
                                   src="https://images.pexels.com/photos/7260647/pexels-photo-7260647.jpeg?cs=srgb&dl=pexels-los-muertos-crew-7260647.jpg&fm=jpg"
                                   />
                                   <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Kinj Borcha
                                        </Typography>
                                        <Typography variant="subtitle2" component="p" color="textSecondary">
                                            14/09/2021
                                        </Typography>
                                   </Box>
                               </Box>
                               <Box>
                                       <BookmarkBorderIcon />
                                   </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?cs=srgb&dl=pexels-pixabay-355948.jpg&fm=jpg"
                                    title="Charity photos"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Team
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.action}>
                               <Box className={classes.author}>
                                   <Avatar
                                   src="https://images.pexels.com/photos/4342401/pexels-photo-4342401.jpeg?cs=srgb&dl=pexels-edmond-dant%C3%A8s-4342401.jpg&fm=jpg"
                                   />
                                   <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            john Rana
                                        </Typography>
                                        <Typography variant="subtitle2" component="p" color="textSecondary">
                                            14/09/2021
                                        </Typography>
                                   </Box>
                               </Box>
                               <Box>
                                       <BookmarkBorderIcon />
                                   </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?cs=srgb&dl=pexels-min-an-853168.jpg&fm=jpg"
                                    title="Charity photos"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Team
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.action}>
                               <Box className={classes.author}>
                                   <Avatar
                                   src="https://images.pexels.com/photos/4865524/pexels-photo-4865524.jpeg?cs=srgb&dl=pexels-cottonbro-4865524.jpg&fm=jpg"
                                   />
                                   <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            kunj 
                                        </Typography>
                                        <Typography variant="subtitle2" component="p" color="textSecondary">
                                            14/09/2021
                                        </Typography>
                                   </Box>
                               </Box>
                               <Box>
                                       <BookmarkBorderIcon />
                                   </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://images.pexels.com/photos/7063764/pexels-photo-7063764.jpeg?cs=srgb&dl=pexels-dziana-hasanbekava-7063764.jpg&fm=jpg"
                                    title="Charity photos"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Team
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.action}>
                               <Box className={classes.author}>
                                   <Avatar
                                   src="https://images.pexels.com/photos/7063764/pexels-photo-7063764.jpeg?cs=srgb&dl=pexels-dziana-hasanbekava-7063764.jpg&fm=jpg"
                                   />
                                   <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Herry
                                        </Typography>
                                        <Typography variant="subtitle2" component="p" color="textSecondary">
                                            14/09/2021
                                        </Typography>
                                   </Box>
                               </Box>
                               <Box>
                                       <BookmarkBorderIcon />
                                   </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            
        </div>
    )
}
export default Article;
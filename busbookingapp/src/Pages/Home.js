import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginBottom: '80px'
  },
  gridList: {
    width: '50vw',
    height: 'auto',
  },
  gridimgs: {
      transition: '0.3s',
      boxShadow: 'none',
      '&:hover': {
        transform: 'scale(1.04)',
        boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
      }
  }
}));


const tileData = [
    {
        img: 'https://image.tmdb.org/t/p/w1000_and_h563_face/o9OKe3M06QMLOzTl3l6GStYtnE9.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: 'https://www.quentintarantinofanclub.com/upload/img/02201628144328-minimalist-posters.jpg',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: 'https://image.tmdb.org/t/p/w250_and_h141_face/skvI4rYFrKXS73BJxWGH54Omlvv.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: 'https://image.tmdb.org/t/p/w250_and_h141_face/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: 'https://rukminim1.flixcart.com/image/832/832/poster/9/k/z/athah-poster-spiderman-minimalist-athedaepos363-medium-original-imadwa5wu95hgzac.jpeg?q=70',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: 'https://i.imgur.com/aupSjp8.jpg',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: 'http://getwallpapers.com/wallpaper/full/1/7/d/872117-top-batman-minimalist-wallpaper-1920x1080-for-ipad.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
];

export default function Home() {
    const classes = useStyles();
  
    return (
        <div>
            <h1>New Releases</h1>
            <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} className={classes.gridimgs}/>
                    </GridListTile>
                ))}
                </GridList>
            </div>
            {/*<img style={{
                margin: '50px', 
                width: '45%', 
		transform: 'rotate(-90deg)',
                height: 'auto', 
                filter: 'contrast(120%)',
                border: '10px solid white',
                borderRadius: '2%',
                boxShadow: '0 4px 20px 0 rgba(0,0,0,0.25)'
            }} src={require("./pmt/pmt11.jpg")} height='100%' width='100%'/>*/}
        </div>
    );
  }

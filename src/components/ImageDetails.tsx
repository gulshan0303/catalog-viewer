import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { CatalogImage } from './types';

interface ImageDetailsProps {
  image: CatalogImage;
}

const useStyles = makeStyles({
  imageContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding:'1.5rem'
  
    // height: '80vh',
    // overflow: 'hidden',
   
  },
  
});

const ImageDetails: React.FC<ImageDetailsProps> = ({ image }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.imageContainer}>
     
      <Grid xs={12} sm={12} md={6} item className="imgBox">
      <img src={image.src} alt={"img"}  className="image" />
      </Grid>
      <Grid xs={12} sm={12} md={6} item className='content'>
        <Typography variant="h5">{image.title}</Typography>
        <Typography variant="body1" className='desc'>{image.description}</Typography>
      </Grid>
    </Grid>
  );
};

export default ImageDetails;
export { };
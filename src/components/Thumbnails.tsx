import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper } from '@material-ui/core';
import { CatalogImage } from './types';

interface ThumbnailsProps {
  catalogData: CatalogImage[];
  currentImageIndex: number;
  onThumbnailClick: (index: number) => void;
}

const useStyles = makeStyles({
  thumbnailContainer: {
    display: 'flex',
    justifyContent: 'center',
    width:"100%",
  },
  thumbnail: {
    // height: '6rem',
    // width: '6rem',
    width:"100%",
    height:"8rem",
    borderRadius:'0.63rem',
    filter: 'grayscale(100%)',
  },
  selectedThumbnail: {
    filter: 'grayscale(0%)',
  },
});

const Thumbnails: React.FC<ThumbnailsProps> = ({
  catalogData,
  currentImageIndex,
  onThumbnailClick,
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.thumbnailContainer}>
       
          <Grid item  xs={12} md={12} sm={12} className='slider-Grid'>
          {catalogData.map((image:any, index:any) => (
            <Box 
              onClick={() => onThumbnailClick(index)}
              className={`${classes.thumbnail} ${
                currentImageIndex === index ? classes.selectedThumbnail : ''
              }`}
            >
              <img src={image.src} alt={image.alt} className='img' />
            </Box>
              ))}
          </Grid>
      
    </Grid>
  );
};

export default Thumbnails;
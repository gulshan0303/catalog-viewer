import React, { useState, useEffect } from 'react';
import { catalogData } from '../Data';
import ImageDetails from './ImageDetails';
import Thumbnails from './Thumbnails';
import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import { Box, Grid } from '@material-ui/core';

const CatalogViewer: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);

  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? catalogData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === catalogData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handlePlayPauseClick = () => {
    setIsSlideshowActive((prevValue) => !prevValue);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSlideshowActive) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === catalogData.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isSlideshowActive]);

  return (
    <div>
      <div className='imageDetails'>
        <Grid container className='mainGrid'>
          <Grid item xs={12} sm={12} md={12} spacing={2} className='topImg' >
            <ImageDetails image={catalogData[currentImageIndex]} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} className='sliderImg'>
            <Grid container xs={12} sm={12} md={12} className='imageSlider-container'>
              <Grid item xs={10} sm={10} md={10} className='left-grid'>
              <ArrowBackIosOutlined onClick={handlePreviousClick} className='arrow' />
            <Thumbnails
              catalogData={catalogData}
              currentImageIndex={currentImageIndex}
              onThumbnailClick={handleThumbnailClick}
            />
            <ArrowForwardIosIcon onClick={handleNextClick} className='arrow' />
              </Grid>
              <Grid item xs={2} sm={2} md={2} className='right-grid'>
              <Box onClick={handlePlayPauseClick} sx={{width:"2.5rem",height:"2.5rem"}}>
              {isSlideshowActive ? <PauseCircleOutlineIcon className='btn' /> : <PlayCircleOutlineIcon className='btn' />}
            </Box>
              </Grid>

            </Grid>
           
           
          </Grid>
        </Grid>




      </div>

    </div>
  );
};

export default CatalogViewer;

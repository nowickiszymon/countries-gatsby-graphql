import React from 'react';

import Grid from '@material-ui/core/Grid';

// STATIC
import './style.scss';
import infoImg from '../../../images/info.png';

import ReadmoreButton from '../../atoms/ReadmoreButton/index.js';
import InfoContent from '../../atoms/InfoContent/index.js';

let subText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit nunc, venenatis consectetur feugiat in, tristique dapibus justo. Duis imperdiet lectus odio, vitae finibus magna condimentum et.";

export const Info = () => {

        return(
                <div className="info" id="about">
                        <Grid container justify="center">
                                <Grid item xs={10} md={6}>
                                        <div className="info__left">
                                                <InfoContent title={"Search all countries using our webpage"} subtitle={subText} />
                                                <InfoContent title={"It’s always will be free!"} subtitle={subText} />
                                                <InfoContent title={"Start now!"} subtitle={subText} />
                                        </div>
                                </Grid>

                                <Grid item xs={10} md={6}>
                                        <div className="info__right">
                                                <div className="info__right__img__wrapper">
                                                        <img src={infoImg} alt="picture" />
                                                </div>
                                        </div>
                                </Grid>
                                
                                <Grid item xs={10}>
                                        <div className="info__button">
                                                <ReadmoreButton title="Start searching..." />
                                        </div>
                                </Grid>
                        </Grid>
                </div>
        );
};

export default Info;
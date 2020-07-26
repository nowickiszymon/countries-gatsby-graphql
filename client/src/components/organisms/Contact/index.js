import React from 'react';

import './style.scss';

import Grid from '@material-ui/core/Grid';

import EndRow from '../../atoms/EndRow/index.js';
import PrimaryButton from '../../atoms/PrimaryButton/index.js';
const Contact  = () => {
        return(
                <div className="contact" id="contact">
                        <Grid container>
                                <Grid item xs={12}>
                                        <h1>LET'S STAY IN CONTACT</h1>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                        <div className="contact__forms">
                                                <input type="input" placeholder="Name" className="contact__input__data" />
                                                <input type="input" placeholder="Email" className="contact__input__data" />
                                                <input type="input" placeholder="Phone" className="contact__input__data" />
                                        </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                        <textarea cols="50" rows="5" placeholder="Message content..." className="contact__input__contact" />
                                </Grid>
                                <Grid item xs={11} >
                                        <EndRow>
                                                <PrimaryButton title={"Send"} />
                                        </EndRow>
                                </Grid>
                        </Grid>
                </div>
        );
};

export default Contact;
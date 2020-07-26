import React from "react";

import Grid from '@material-ui/core/Grid';

import './style.scss';



const DesktopNavbar = () => (
        <nav style={{width: '100%', height: 'auto'}} className="desktopNavbar">
                <Grid container>
                        <Grid item lg={5}>
                                <ul type="none">
                                        <a href="http://localhost:8000/#header">
                                                <li>Home</li>
                                        </a>
                                        < a href="http://localhost:8000/#about">
                                                <li>About</li>
                                        </a>
                                        <a href="http://localhost:8000/allCountries">
                                                <li>All Countries</li>
                                        </a>
                                        <a href="http://localhost:8000/#contact">
                                                <li>Contact</li>
                                        </a>
                                </ul>
                        </Grid>

                </Grid>
        </nav>
)

export default DesktopNavbar;

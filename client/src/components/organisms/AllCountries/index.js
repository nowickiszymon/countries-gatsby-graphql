import React, {useState} from "react";
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';


import './style.scss';

import Grid from '@material-ui/core/Grid';

import CenterRow from '../../atoms/CenterRow/index.js';
import ReadmoreButton from '../../atoms/ReadmoreButton/index.js';


const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: 'https://countries.trevorblades.com'
      });

      const LIST_COUNTRIES = gql`
      {
        countries {
          name
          code
        }
      }
    `;

function AllCountries() {
        const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});

        if (loading || error) {
                return <p>{error ? error.message : 'Loading...'}</p>;
        }

        return(
                <div className="allcountries">
                        <Grid container>
                                <Grid item xs={12}>
                                        <CenterRow>
                                                <h1>List all countries</h1>
                                        </CenterRow>
                                </Grid>
                                <Grid item xs={12}>
                                        <div className="allcountries__list__wrapper">
                                                <ul>
                                                        <Grid container>
                                                              {data.countries.slice(0,20).map(country => (
                                                                <Grid item xs={4} sm={3} md={2} lg={1}>
                                                                        <li>
                                                                        {country.name}
                                                                        </li>
                                                                        </Grid>
                                                                ))}
                                                        </Grid>
                                                </ul>
                                        </div>
                                </Grid>

                                <Grid item xs={12}>
                                        <CenterRow>
                                                <a href="http://localhost:8000/allCountries/">
                                                        <ReadmoreButton title="Load more..." />
                                                </a>
                                        </CenterRow>
                                </Grid>
                        </Grid>
                </div>
        );
};
     


export default AllCountries;

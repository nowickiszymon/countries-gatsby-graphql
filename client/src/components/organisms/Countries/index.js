import React from 'react';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';



import './style.scss';

import Grid from '@material-ui/core/Grid';

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


const Countries = () => {
        const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});

        if (loading || error) {
                return <p>{error ? error.message : 'Loading...'}</p>;
        }

        return(
                <div className="countries" id="countries">
                        <ul type="none">
                                <Grid container>
                                {data.countries.map(country => (
                                        <Grid item xs={4} sm={3} md={2} lg={1}>
                                              <li>{country.name}</li>
                                        </Grid>
                               ))}
                                </Grid>
                        </ul>
                </div>
        );
};

export default Countries;
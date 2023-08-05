import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Tabs from '../components/Tabs';
import Sorting from '../components/Sorting';
import CardSection from '../components/CardSection';
import Restaurants from '../components/Restaurants';
import axios from 'axios';
import { Grid, Hidden } from '@mui/material';
import Scrolled from '../components/Scrolled';


export default function Index() {
    const [data, setData] = useState(null);
    const [standard, setStandard] = useState(true);
    const [componentQuery, setComponentQuery] = useState({
      search: "",
      sorting: "",
    })

    const handleComponentChange = (event) => {
      const { name, value } = event.target;

      setComponentQuery((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }

    const fetchData = async (endpoint) => {
      try {
          const response = await axios.get(endpoint);
          setData(response.data);
          console.log(data)
      } catch (error) {
          console.error('Error fetching data', error);
      }
      };
      
    useEffect(() => {
      setStandard(false);
      if (componentQuery.search != '') {
        const endpoint=`http://localhost:8000/search?query=${componentQuery.search}`;
        fetchData(endpoint);
      }
      else if (componentQuery.sorting != '') {
        const endpoint=`http://localhost:8000/get-sorting?sortParam=${componentQuery.sorting}`;
        fetchData(endpoint);
      } 
    }, [componentQuery])
    

    useEffect(() => {
      const endpoint='http://localhost:8000/restaurants';
      fetchData(endpoint);
    }, []);
  return (
    <>
      <Head>
        <title>Heyfood | Stores</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <>
        <Navbar value={componentQuery.search} handleChange={handleComponentChange} />
        <Tabs />
        <Scrolled />
        <Grid container spacing={2} px='45px'>
          <Hidden smDown>
          <Grid item md={3}>
            <Sorting numOfStores={data ? data.length : 0} value={componentQuery.sorting} handleChange={handleComponentChange} />
          </Grid>
          </Hidden>
          <Grid item xs={12} md={9}>
            <CardSection />
            <Restaurants data={data} />
          </Grid>
        </Grid>
      </>
    </>
  );
}

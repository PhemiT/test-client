import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Box, Grid, Hidden } from '@mui/material';
import Scrolled from '../components/Scrolled';
import FoodClassBtn from '../components/foodClassBtn';
import Navbar from '../components/Navbar';
import Tabs from '../components/Tabs';
import Sorting from '../components/Sorting';
import CardSection from '../components/CardSection';
import Restaurants from '../components/Restaurants';



export default function Index() {
    const [data, setData] = useState([]);
    const [standard, setStandard] = useState(true);
    const [componentQuery, setComponentQuery] = useState({
      search: "",
      sorting: "",
    })
    const [foodClasses, setFoodClasses] = useState([]);
    const [heading, setHeading] = useState('All Restaurants');
    const [resetToggle, setResetToggle] = useState(false);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    const foodClassBoxStyles ={
      display: 'flex',
      alignItem: 'center',
      gap: '20px',
      p: {xs: '25px', md:'25px 45px'},
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      scrollbarWidth: 'none',
      '-ms-overflow-style': 'none'
    }

    const handleComponentChange = (event) => {
      const { name, value } = event.target;

      setComponentQuery((prevState) => {
        if (name === 'search') {
          return { ...prevState, search: value, sorting: "" };
        } else if (name === 'sorting') {
          return { ...prevState, sorting: value, search: "" };
        } else {
          return prevState;
        }
      });
    }

    const fetchData = async (endpoint) => {
      try {
          const response = await axios.get(endpoint);
          setData(response.data);
      } catch (error) {
          console.error('Error fetching data', error);
      }
      };

    const findFoodClass = (foodClass) => {
      setStandard(false);
      setHeading(`Search Food: ${foodClass}`)
      const endpoint=`${apiUrl}restaurants/food-class/${foodClass}`;
      fetchData(endpoint);
    }

    const reset = () => {
      setResetToggle(prevState => !prevState);
      setComponentQuery({
          search: "",
          sorting: "",
      });
      setStandard(true);
      setHeading("All Restaurants");
    }
  

    useEffect(() => {
      if (componentQuery.search !== '' || componentQuery.sorting !== '') {
        setStandard(false);
        if (componentQuery.search !== '') {
          setHeading('Search');
          const endpoint=`${apiUrl}search?query=${componentQuery.search}`;
          fetchData(endpoint);
        } 
        else if (componentQuery.sorting !== '') {
          setHeading('Sorting');
          const endpoint=`${apiUrl}get-sorting?sortParam=${componentQuery.sorting}`;
          fetchData(endpoint);
        }
      } 
    }, [componentQuery])
    
    
    useEffect(() => {
      const endpoint=`${apiUrl}restaurants`;
      fetchData(endpoint);
    }, [resetToggle]);

    useEffect(() => {
      const fetchFoodClasses = async () => {
        try {
            const response = await axios.get(`${apiUrl}food-classes`);
            setFoodClasses(response.data);
        } catch (error) {
            console.error('Error fetching data', error);
        }
        };
        fetchFoodClasses();
    }, [])
    


  return (
    <>
      <Head>
        <title>Heyfood | Stores</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <>
        <Navbar value={componentQuery.search} handleChange={handleComponentChange} />
        <Tabs />
        <Box
        sx={{...foodClassBoxStyles}}
        >
          {foodClasses ? foodClasses.map((foodClass, index) => 
            <FoodClassBtn key={index} name={foodClass} handleClick={() => findFoodClass(foodClass)} />
          ) : 'Loading...'}
        </Box>
        <Hidden mdDown>
          <Scrolled />
        </Hidden>
        <Grid container spacing={2} px={{xs: '25px', md:'45px'}}>
          <Grid item md={3}>
            <Sorting numOfStores={data ? data.length : 0} value={componentQuery.sorting} handleChange={handleComponentChange} />
          </Grid>
          <Grid item xs={12} md={9}>
            {standard 
              ?
              <CardSection />
              :
              ''
            }
            <Restaurants data={data} heading={heading} reset={reset} />
          </Grid>
        </Grid>
        
      </>
    </>
  );
}

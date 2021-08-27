import React, { useState, useEffect } from 'react';
//API
import API from '../API';

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL, API_KEY } from '../config';

// Component

// Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {


    const { state, loading, error } = useHomeFetch();
    console.log(state);

    return (
        <div>Home Page</div>
    )
}

export default Home;
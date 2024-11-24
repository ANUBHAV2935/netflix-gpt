import React from 'react';
import Header from './Header';
import UseNowPlayingMovie from '../Hook/useNowPlayingMovie';
import MainContainer from './MainContainer';
import SecondinaryContainer from './SecondinaryContainer';
import useNowPopularMovie from '../Hook/useNowPopularMovie';
import useNowTrandingMovie from '../Hook/useNowTrandingMovie';
import useNowCrimeMovie from '../Hook/useNowCrimeMovie';




const Browse = () => {
    UseNowPlayingMovie();
    useNowPopularMovie();
    useNowTrandingMovie();
    useNowCrimeMovie();
    
    return (
        <div className=' '>
           
           <Header/>
           <MainContainer/>
           <SecondinaryContainer/>
        

        </div>
    );
}

export default Browse;

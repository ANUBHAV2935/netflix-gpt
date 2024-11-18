import React from 'react';
import Header from './Header';
import UseNowPlayingMovie from '../Hook/useNowPlayingMovie';
import MainContainer from './MainContainer';
import SecondinaryContainer from './SecondinaryContainer';




const Browse = () => {
    UseNowPlayingMovie();
    
    return (
        <div className='flex justify-between '>
           
           <Header/>
           <MainContainer/>
           <SecondinaryContainer/>
           
           
           
           {
            /**
             *MainContainer
             - videoBackground
             - videoTittle
             *SecondinaryContainer
              -movieList *n
              -cards*n

             */

           }




        </div>
    );
}

export default Browse;

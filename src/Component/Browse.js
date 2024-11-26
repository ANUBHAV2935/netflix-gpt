import React from 'react';
import Header from './Header';
import UseNowPlayingMovie from '../Hook/useNowPlayingMovie';
import MainContainer from './MainContainer';
import SecondinaryContainer from './SecondinaryContainer';
import useNowPopularMovie from '../Hook/useNowPopularMovie';
import useNowTrandingMovie from '../Hook/useNowTrandingMovie';
import useNowCrimeMovie from '../Hook/useNowCrimeMovie';
import ChatGptSearch from './ChatGptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
    const ShowGptSearch = useSelector(store => store.gptReducer?.ShowGptSearch);
    
    
   
    

    // Call custom hooks
    UseNowPlayingMovie();
    useNowPopularMovie();
    useNowTrandingMovie();
    useNowCrimeMovie();

    return (
        <div>
            <Header />
            {ShowGptSearch ? (
                <ChatGptSearch />
            ) : (
                <>
                    <MainContainer />
                    <SecondinaryContainer />
                </>
            )}
        </div>
    );
};

export default Browse;

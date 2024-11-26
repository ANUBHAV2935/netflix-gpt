import React from 'react';
import SearchBar from './SearchBar';
import { NetflixBackground } from '../Utils/Constant';



const ChatGptSearch = () => {
    return (
        <div>
             <div className="absolute -z-10">
                <img
                    src={NetflixBackground}
                    alt="Netflix background"
                    className="w-full h-full object-cover"
                />
            </div>
            <SearchBar/>

        </div>
    )
}

export default ChatGptSearch

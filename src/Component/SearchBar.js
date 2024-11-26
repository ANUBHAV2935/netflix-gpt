import React from "react"
import {Language} from "../Utils/Language";
import { useSelector } from "react-redux";
const SearchBar = () => {
    const langKey = useSelector(store=>store.config?.langlingo);
    console.log(langKey);
    
  
    return (
        <div
            className="flex justify-center px-[10%] " >

            <form className="my-64 w-1/2 border bg-black py-4 rounded-lg"
                onSubmit={(e) => e.preventDefault()} >
                <input type="text" placeholder={Language[langKey]?.LangPlaceholder} className="w-4/5 py-2 mx-4 rounded-lg px-4" />
                <button className='border py-2 px-2 bg-cyan-400 text-gray-50 rounded-lg cursor-pointer  hover:bg-cyan-700 ease-in duration-300 -ml-3' >{Language[langKey]?.Search}</button>



            </form>
        </div>
    )
}

export default SearchBar;
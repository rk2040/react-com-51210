import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";
import './Spinner.css';

const Spinner = () => {
    return (
        <div className='spinner'>
            <PacmanLoader color="#ebe52d" size={50}/>
        </div>
    )
}

export default Spinner
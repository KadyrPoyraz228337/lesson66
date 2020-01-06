import React from 'react';
import './Backdrop.css';
import Spiner from "../spiner/spiner";

const Backdrop = (
    {show}
) => {
    return show && (
        <div className='Backdrop d-flex align-items-center justify-content-center'>
            <Spiner show={show}/>
        </div>
    );
};

export default Backdrop;
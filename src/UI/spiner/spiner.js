import React from 'react';
import {Spinner} from "reactstrap";

const Spiner = (
    {show}
) => {
    return show && (
        <>
            <Spinner style={{fontSize: '50px', width: '100px', height: '100px'}} color="light" />
        </>
    );
};

export default Spiner;
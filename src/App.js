import React, {Component} from 'react';
import CatsPicturesGenerator from "./components/CatsPicturesGenerator/CatsPicturesGenerator";
import {Container} from "reactstrap";


class App extends Component {


    render() {
        return (
                <Container className='d-flex flex-column align-items-center border rounded bg-light my-2'
                           style={{height: 'calc(100vh - 16px)'}}>
                    <CatsPicturesGenerator/>
                </Container>
        );
    }
}

export default App;
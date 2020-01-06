import React, {Component} from 'react';
import axios from 'axios';
import {Button} from "reactstrap";
import withLoader from "../../hoc/withLoader/withLoader";

class CatsPicturesGenerator extends Component {
    state = null;

    async componentDidMount() {
        this.getNewCat();
    }

    getNewCat = async () => {
        const resp = await axios('https://aws.random.cat/meow');
        this.setState(resp.data);
    };

    render() {
        return this.state && (
            <>
                <h1 className='m-0 text-center'>Cats pictures generator app</h1>
                <Button className='my-3' onClick={this.getNewCat}>Get new cat</Button>
                <div className='border rounded overflow-auto' style={{width: '35%', maxHeight: 'calc(100vh - 150px)'}}>
                    <img src={this.state.file} alt="" className='h-auto w-100' />
                </div>
            </>
        );
    }
}

export default withLoader(CatsPicturesGenerator, axios);
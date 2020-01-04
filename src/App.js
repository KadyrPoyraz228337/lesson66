import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  state = null;

  async componentDidMount() {
    const resp = await axios('https://aws.random.cat/meow');
    console.log(resp.data);
    this.setState(resp.data);
  }

  render() {
        return this.state && (
            <div>
              <img src={this.state.file} alt=""/>
            </div>
        );
    }
}

export default App;
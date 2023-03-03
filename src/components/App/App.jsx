import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'components/Form/Form';
import { Info } from 'components/Info/Info';

export class App extends Component {
  state = {
    queryValue: '',
  };

  handleFormSubmit = queryValue => {
    // console.log(queryValue);

    this.setState({ queryValue: queryValue });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit} />

        <Info queryValue={this.state.queryValue} />

        <ToastContainer style={{ fontSize: '15px' }} />
      </div>
    );
  }
}

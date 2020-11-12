import FormCreate from './MainForm';
import { Component } from 'react';
import Response from './Response';
import Loader from './Loader';
import { mapDispatchToProps, mapStateToProps } from '../connect/';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    startLoading: false
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.startLoading && this.props.formObject) {
      this.setState({
        startLoading: false
      })
    }
  }

  startLoading = () => {
    this.setState({
      startLoading: true
    })
  }

  renderResponse = () => {
    if(this.state.startLoading === true) {
      return <Loader />
    } 

    if(this.props.formObject.id) {
      return <Response 
                data={this.props.formObject}
             />
    }

    return ''
  }

  render() {
    return (
      <div>
        <FormCreate
          startLoading={this.startLoading}
        />
        {this.renderResponse()}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
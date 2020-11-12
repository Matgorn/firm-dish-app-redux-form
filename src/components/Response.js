import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../connect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice, faHamburger, faMugHot } from '@fortawesome/free-solid-svg-icons'
import { Component } from 'react';
import './Response.css';

class Response extends Component {
  showResponse = (result = []) => {
    const data = this.props.data;

    for(const prop in data) {
      if(prop !== 'error') {
        if(data[prop] === 'pizza') {
          result.push(
            <div key={prop} className="result-field">
              <h4>{prop.toUpperCase()}</h4>
              <span><FontAwesomeIcon icon={faPizzaSlice} /></span>
            </div>
          )
        } else if (data[prop] === 'sandwich') {
          result.push(
            <div key={prop} className="result-field">
              <h4>{prop.toUpperCase()}</h4>
              <span><FontAwesomeIcon icon={faHamburger} /></span>
            </div>
          )
        } else if (data[prop] === 'soup') {
          result.push(
            <div key={prop} className="result-field">
              <h4>{prop.toUpperCase()}</h4>
              <span><FontAwesomeIcon icon={faMugHot} /></span>
            </div>
          )
        } else {
          result.push(
            <div key={prop} className="result-field">
              <h4>{prop.toUpperCase()}</h4>
              <h4>{data[prop]}</h4>
            </div>
          )
        }
      }
    }
    return result;
  }

  render() {
    return (
      <div className="response">
        <h4 style={{ color: 'white' }} className="ui dividing header">Server Response</h4>
        <div className={`form ui ${window.innerWidth < 450 ? 'fluid' : ''} container segment very padded`}>
          {this.showResponse()}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Response);
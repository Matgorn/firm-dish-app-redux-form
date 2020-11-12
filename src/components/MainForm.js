import React from 'react';
import { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../connect';
import DishType from './SelectForm';
import FormField from './TextField';

class FormCreate extends Component {
  renderError({ error }) {
    if(error) {
      return (
      <p className="ui pointing red basic label">{error}</p>
      );
    }
  }

  parseValue = (value) => {
    if(value) {
      return parseInt(value)
    }
  }

  parseValueFloat = (value) => {
    if(value) {
      return parseFloat(value);
    }
  }

  onSubmit = async (formValues) => {
    const { startLoading, submitForm, reset } = this.props
    startLoading();
    await fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    })
      .then(response => response.json())
      .then(data => {
        if(data.id) {
          submitForm(data);
          reset();
          this.props.setDishType('')
        } else {
          submitForm({})
          throw new SubmissionError(data);
        }
      })
  }

  renderConditionals = () => {
    if(this.props.dishType === 'soup') {
      return <Field 
        name="spiciness_scale"
        component={FormField}
        label="Spiciness Scale"
        renderError={this.renderError}
        placeholder="Select spiciness scale"
        formType="number"
        normalize={this.parseValue}
      />
    } else if (this.props.dishType === 'pizza') {
      return (
        <React.Fragment>
          <Field
            name="no_of_slices"
            component={FormField}
            label="No. of slices"
            renderError={this.renderError}
            placeholder="Provide number of slices"
            formType="number"
            normalize={this.parseValue}
          />
          <Field
            name="diameter"
            component={FormField}
            label="Diameter"
            renderError={this.renderError}
            placeholder="Provide pizza's diameter"
            formType="number"
            step="0.1"
            normalize={this.parseValueFloat}
          />
        </React.Fragment>
      );
    } else if (this.props.dishType === 'sandwich') {
      return <Field 
        name="slices_of_bread"
        component={FormField}
        label="Number of slices"
        renderError={this.renderError}
        placeholder="Provide the number of slices"
        formType="number"
        normalize={this.parseValue}
      />
    } else {
      return ''
    }
  }

  render() {
    return (
      <form 
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        id="dishform"
        className={`ui ${window.innerWidth < 400 ? 'mini' : ''} form container segment very padded`}
        style={{ marginTop: '1em' }}
      >
        <Field 
          name="name"
          component={FormField}
          label="Enter name of the dish"
          renderError={this.renderError} 
          placeholder="Dish name"
          formType="text"
        />

        <Field 
          name="preparation_time"
          component={FormField}
          label="What is expected preparation time"
          renderError={this.renderError}
          placeholder=""
          formType="time"
          step="1"
        />

        <Field
          name="type"
          component={DishType}
          label="What is the type of the dish"
          renderError={this.renderError}
          onChange={(e) => {this.props.setDishType(e.target.value)}}
        >
          <option value="">Select the type...</option>
          <option value="pizza">pizza</option>
          <option value="soup">soup</option>
          <option value="sandwich">sandwich</option>
        </Field>

        {this.renderConditionals()}

        <button 
          className="ui fluid button bottom attached primary"
        >Submit</button>
      </form>
    );
  }
}

FormCreate = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCreate);

export default reduxForm({
  form: 'formCreate',
})(FormCreate);
import React from 'react';
import { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import setDishType from '../actions';
import DishType from './DishType';
import FormField from './FormField';

class FormCreate extends Component {
renderError({ error, touched, pristine }, customError) {
    if(touched && error) {
      return (
      <p className="ui pointing red basic label">{error}</p>
      );
    }
    if(pristine && touched && !error) {
      return (
        <p className="ui pointing red basic label">{customError}</p>
      );
    }
  }

  renderConditionals = () => {
    if(this.props.dishType === 'soup') {
      return <Field 
        name="spiciness_scale"
        component={FormField}
        label="Spiciness Scale"
        renderError={this.renderError}
        placeholder="Select spiciness scale"
        type="number"
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
            type="number"
          />
          <Field
            name="diameter"
            component={FormField}
            label="Diameter"
            renderError={this.renderError}
            placeholder="Provide pizza's diameter"
            type="number"
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
        type="number"
      />
    } else {
      return ''
    }
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    console.log(this.props.formCreate);
    return (
      <form 
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        id="dishform"
      >
        <Field 
          name="name"
          component={FormField}
          label="Enter name of the dish"
          renderError={this.renderError} 
          placeholder="Dish name"
          type="text"
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

        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    dishType: state.dishType
  }
}

const mapDispatchToProps = { setDishType }


const validate = (formValues) => {
  const errors = {};

  if(!formValues.name) {
    errors.name = 'You must enter a title';
  }

  if(!formValues.preparation_time) {
    errors.preparation_time = 'You must enter a preparation time'
  }

  return errors;
};

FormCreate = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCreate);

export default reduxForm({
  form: 'formCreate',
  validate
})(FormCreate);
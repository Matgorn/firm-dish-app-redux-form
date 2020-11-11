import { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import DishName from './DishName';
import PrepTime from './PrepTime';
import DishType from './DishType';

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

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form 
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        id="dishform"
      >
        <Field 
          name="name"
          component={DishName}
          label="Enter name of the dish"
          renderError={this.renderError} 
          placeholder="Dish name"
        />

        <Field 
          name="preparation_time"
          component={PrepTime}
          label="What is expected preparation time"
          renderError={this.renderError}
        />

        <Field
          name="type"
          component={DishType}
          label="What is the type of the dish"
          renderError={this.renderError}
        >
          <option value="">Select the type...</option>
          <option value="pizza">pizza</option>
          <option value="soup">soup</option>
          <option value="sandwich">sandwich</option>
        </Field>

        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

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

export default reduxForm({
  form: 'formCreate',
  validate
})(FormCreate);
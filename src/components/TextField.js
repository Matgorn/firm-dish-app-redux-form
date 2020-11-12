const FormField = ({ 
  input, 
  label, 
  meta, 
  renderError, 
  placeholder,
  formType,
  step
}) => {
  return (
    <div className={`field required ${meta.error && meta.touched ? 'error' : ''}`}>
      <label>{label}</label>
      <input 
          {...input} 
          placeholder={placeholder} 
          type={formType}
          autoComplete="off"
          step={step}
      />
      {renderError(meta)}
    </div>
  );
}

export default FormField;
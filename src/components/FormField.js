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
      <div className="field">
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
const PrepTime = ({ input, label, meta, renderError, placeholder }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input 
        {...input} 
        placeholder={placeholder} 
        type="time" 
        step="1" 
        autoComplete="off" 
      />
      {renderError(meta)}
    </div>
  );
}

export default PrepTime;
const NoOfSlices = ({ label, renderError, meta, input, placeholder }) => {
  return(
    <div className="field">
      <label>{label}</label>
        <div>
          <input 
            placeholder={placeholder} 
            {...input} 
            type="number"
          />
          {renderError(meta)}
        </div>
    </div>
  );
}

export default NoOfSlices;
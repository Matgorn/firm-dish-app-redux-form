const DishName = ({ input, label, meta, renderError, placeholder }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...input} placeholder={placeholder} type="text" autoComplete="off" />
      {renderError(meta)}
    </div>
  );
}

export default DishName;
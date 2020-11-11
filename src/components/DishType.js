const DishType = ({ label, renderError, meta, children, input }) => {
  return (
    <div className="field">
      <label>{label}</label>
        <div>
          <select {...input}>
            {children}
          </select>
          {renderError(meta, 'You must select the type')}
        </div>
    </div>
  );
}

export default DishType;
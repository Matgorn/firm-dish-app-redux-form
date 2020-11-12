const mapStateToProps = (state) => {
  return {
    dishType: state.dishType,
    formObject: state.formObject
  }
}

export default mapStateToProps;
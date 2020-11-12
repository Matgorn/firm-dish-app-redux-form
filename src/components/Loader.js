const Loading = () => {
  return (
    <div className="form ui container segment very padded" style={{ height: '150px' }} >
      <div className="ui active inverted dimmer">
        <div className="ui medium text loader">LOADING</div>
      </div>
    </div>
  );
} 

export default Loading;
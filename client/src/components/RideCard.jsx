const RideCard = (props) => {

  return (
    <div className="ride-card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt="ride-card" />
      </div>
      <div className="info-wrapper flex-row space">
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}

export default RideCard
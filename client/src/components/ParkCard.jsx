const ParkCard = (props) => {

  return (
    <div className="park-card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt="park-logo" />
      </div>
      <div className="info-wrapper">
        <h3>{props.name}</h3>
        <h5>{props.location}</h5>
      </div>
    </div>
  )
}

export default ParkCard
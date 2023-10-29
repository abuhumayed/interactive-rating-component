import "./Card.css"

const Card = (props) =>
{
  return (
      <div className="card">{props.children} Hi</div>
  )
}

export default Card
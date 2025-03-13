import { useParams, useNavigate } from 'react-router'

const Product = () => {
    const { id } = useParams()
    const navigate = useNavigate()
  return (
    <div>
      <h3>Product: {id}</h3>
      <button onClick={() => navigate("/")}>Back to home</button>
    </div>
  )
}

export default Product

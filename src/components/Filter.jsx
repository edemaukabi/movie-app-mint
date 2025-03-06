import { useState } from "react"

const Filter = ({ onFilter }) => {
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")

    const handleFilter = () => {
        onFilter({title, rating})
    }
  return (
    <div>
      <input
        type="text"
        placeholder="Filter movie by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter movie by rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={handleFilter}>filter movies</button>
    </div>
  )
}

export default Filter

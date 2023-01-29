import { useParams } from 'react-router-dom'

const Category = () => {
  const { category } = useParams()

  return (
    <div className="category">
      <h1>{category.toUpperCase()} Products</h1>
    </div>
  )
}

export default Category

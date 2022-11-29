import {Link} from 'react-router-dom'

const Products = () => {
    return(
        <>
        <h1>This is a Products Page</h1>
        <ul>
          <li style={{listStyle:"none"}}>  
            <Link to="/products/p1" >A Book</Link>
          </li>
          <li style={{listStyle:"none"}}>
            <Link to="/products/p2" >A Carpet</Link>
          </li>
          <li style={{listStyle:"none"}}>
            <Link to="/products/p3" >An Online Course</Link>
          </li>

           

        </ul>
        </>
    )
}
export default Products;
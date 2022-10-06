import { Outlet, Link } from "react-router-dom"

function Products(){
    return(
        <>
            <h1>Products page</h1>
            <Link to="/products/new" className="btn"> Добавление нового товара</Link>
           <Outlet/>
        </>

    )
}


export default Products
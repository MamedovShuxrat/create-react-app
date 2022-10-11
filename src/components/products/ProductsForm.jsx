import {useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid"


function ProductsForm(props){
    console.log(props);
    const inputName = useRef()
    return(
        <>
        <h2>Добавление нового товара</h2>
        <form onSubmit={(event) =>{
            event.preventDefault()
            
            let newProduct = {
                name: event.target.name.value,
                price: event.target.price.value,
                id: uuidv4()
            }
            props.onNewProduct(newProduct)
            console.log(newProduct);
        }}>
            <input onChange={(event) =>{
                console.log(event.target.value);
            }} ref={inputName} type="text" name="name" placeholder="Название товара" />
            <input type="number" name="price" placeholder="Цена товара" />
            <input type="submit" value="Создать"/>
        </form>
        
        </>
    )
}

export default ProductsForm
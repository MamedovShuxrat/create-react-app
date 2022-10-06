import {useEffect, useRef } from "react";



function ProductsForm(){

    const inputName = useRef()
    return(
        <>
        <h2>Добавление нового товара</h2>
        <form onSubmit={(event) =>{
            event.preventDefault()
            console.log(event);
        }}>
            <input onChange={(event) =>{
                console.log(event.target.value);
            }} ref={inputName} type="text" placeholder="Название товара" />
            <input type="number" placeholder="Цена товара" />
            <input type="text" placeholder="Категория товара" />
            <input type="submit" value="Создать"/>
        </form>
        
        </>
    )
}

export default ProductsForm
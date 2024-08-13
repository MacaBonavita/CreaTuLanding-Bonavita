import { useEffect, useState } from "react"

const ItemListContainer = ({ greeting }) => {
    const[products, setProducts] = useState([])

    useEffect (() => {
        getProducts ()
        .then(Response => {
            setProducts(Response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

return (
    <div>
        <h1>{greeting}</h1>
        <Itemlist products={products}/>
    </div>
)
}

export default ItemListContainer
import React,{ useState, useEffect } from 'react'
import { random, commerce } from "faker";

import { createClient } from "pexels";
import Product from './Product';

const Buysection = ({addInCart}) => {
    const [product,setProduct] = useState([])
    const client = createClient('563492ad6f91700001000001dd097c79d91e4c988a9988539f21b3ca');
    const query = 'sports car';

    useEffect(() => {
        getProduct()
    },[])

    const getProduct = async() => {
        console.log(random.number(10));
        await client.photos.search({query,per_page : 60})
        .then(photos => {
            const data = photos.photos
            console.log("Photos : ",data)
            const product = data.map(item => ({
                medium : item.src.medium,
                tiny : item.src.tiny,
                productName : commerce.productName(),
                price : commerce.price(),
                id : random.uuid()
            }))
            setProduct(product)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <div className="text-center">
            <div className="bg-info p-3">
                <h3>Purchase list</h3>
            </div>
            <div className="row">
                {
                    product.map(pro => (
                       <div className="col-4 mt-2 mb-1" key={pro.id}>
                            <Product 
                                item = {pro}
                                addInCart={addInCart}
                                />
                       </div>
                    ))
                }
        </div>
        </div>
    )
}

export default Buysection
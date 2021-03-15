import React from 'react'


const Product = ({addInCart,item}) => {
      return(
        <div className="card text-white bg-dark border border-info ">
            <div className="card-body">
                <div className="rounded border border-info p-2">
                    <img
                        src={item.medium}
                        alt=""
                        style={{ height: "200px", width: "200px",}}
                        className="mb-3 rounded"
                    />
                </div>
              <p className="lead  font-weight-normal text-wrap">
                {item.productName}
              </p>
                <p className="btn btn-info rounded  btn-sm px-4">{item.price} $</p>
                
            </div>
            <p className="btn btn-info rounded  btn-sm px-4 ml-3 mr-3" onClick={() => {
              addInCart(item)
            }}>Add to Cart</p>
          </div>
      )
  }

  export default Product;
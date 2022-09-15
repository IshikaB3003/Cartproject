import React from 'react';
import CartItem from './CartItem';

    class Cart extends React.Component{
        constructor(){
                    //super used because parent ka constructor also needs to be called first
                    super();
                    this.state = {
                        products: [
                        {price: 999,
                        title: 'Phone',
                        qty: 1,
                        img: '',
                        id: 1,
                    },
                    {price: 899,
                        title: 'Mobile Phone',
                        qty: 1,
                        img: '',
                        id: 2,
                    },
                    {price: 3999,
                        title: 'Laptop',
                        qty: 1,
                        img: '',
                        id: 3,
                    },
                
                    ]
                    }
        
                }
    render(){
        const { products } = this.state;
        // const arr=[1, 2, 3, 4, 5];
        return(
            <div className="cart">
                {/* <CartItem />
                <CartItem />
                <CartItem /> */}
                {/* {
                    arr.map((item) => {
                        return item + 5
                    })
                } */}
                {/* <CartItem qty={1} price={99} title={"Watch"} img={''}/> */}
                {products.map((product) => {
                    return ( 
                    <CartItem 
                        product={product} 
                        key={product.id}
                    />
                    )
                })}
            </div>
        );
    }
    }


export default Cart;
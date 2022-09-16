import React from 'react';
import CartItem from './CartItem';

    const Cart = (props) => {
        /*constructor(){
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
    handleIncreaseQuantity = (product) => {
        console.log('Heyy please inc the quantity of ', product);
        const {products} =this.state;
        const index=products.indexOf(product);

        products[index].qty+=1;
        this.setState({
            products: products
        })
    }         

    handleDecreaseQuantity = (product) => {
        console.log('Heyy please dec the quantity of ', product);
        const {products} =this.state;
        const index=products.indexOf(product);

        if(products[index].qty===0){
            return;
        }

        products[index].qty-=1;
        this.setState({
            products
        })
    } 

    handleDeleteProduct = (id) => {
        const { products } = this.state;

        const items = products.filter((item) => item.id !== id);
        this.setState({
            products: items
        })
    }*/

    // render(){
        const { products } = props;
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
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteProduct={props.onDeleteProduct}
                    />
                    )
                })}
            </div>
        );
    // }
    }


export default Cart;
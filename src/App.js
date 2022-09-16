    import React from 'react';
    import Cart from './Cart';
    import Navbar from './Navbar';


    class App extends React.Component {
      constructor(){
        //super used because parent ka constructor also needs to be called first
        super();
        this.state = {
            products: [
            {price: 999,
            title: 'Phone',
            qty: 1,
            img: 'https://images.pexels.com/photos/1034063/pexels-photo-1034063.jpeg?auto=compress&cs=tinysrgb&w=600',
            id: 1,
        },
        {price: 899,
            title: 'Mobile Phone',
            qty: 1,
            img: 'https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg?auto=compress&cs=tinysrgb&w=600',
            id: 2,
        },
        {price: 3999,
            title: 'Laptop',
            qty: 1,
            img: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600',
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
    }

    getCartCount = () => {
          const{products}=this.state;
          let count=0;
          products.forEach((product)=>{
            count+=product.qty;
          })
          return count;
    }

    getCartTotal = () => {
          const {products} =this.state;
          let cartTotal  = 0;
          products.map((product) => {
            cartTotal = cartTotal + product.qty * product.price 
          })
          return cartTotal;
    }

      render(){
        const {products} = this.state;
      return (
        <div className="App">
          <Navbar count={this.getCartCount()}/>
          <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          />
          <div style={{padding: 10, fontSize: 20}}>TOTAL: {this.getCartTotal()}</div> 
        </div>
      );
    }
    }
    export default App;

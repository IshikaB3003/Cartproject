import React from 'react';

class CartItem extends React.Component{
    constructor(){
            //super used because parent ka constructor also needs to be called first
            super();
            this.state = {
                price: 999,
                title: 'Phone',
                qty: 1,
                img: ''
            }

        }
        
    //arrow fns used to make sure this isn't undefined when called thru another obj
    //another method that we could have used was bind()
    increaseQuantity = () => {
        console.log('this', this.state);
    }

    render(){
        const {price,title,qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25} }>{title}</div>
                    <div style={ { color: '#777'} }>Rs {price}</div>
                    <div style={ { color: '#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* BUTTONS */}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                        onClick={this.increaseQuantity}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                        
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/1/1570.png"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

//we can't apply css on jsx so we'll make an object
//110 mei px isn't req, jsx adds its itself
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;
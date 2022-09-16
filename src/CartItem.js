import React from 'react';

const CartItem = (props) => {
    // // constructor(){
    // //         //super used because parent ka constructor also needs to be called first
    // //         super();
    // //         this.state = {
    // //             price: 999,
    // //             title: 'Phone',
    // //             qty: 1,
    // //             img: ''
    // //         }

    // //     }
        

    //     testing(){
    //         const promise = new Promise((resolve, reject) => {
    //             setTimeout(() => {
    //                 resolve('done');
    //             }, 5000);
    //         })

    //         promise.then(() => {
    //             //setState acts like a sync call
    //             // this.setState({qty: 100});
    //             this.setState({qty: this.state.qty + 10});
    //             this.setState({qty: this.state.qty + 10});
    //             this.setState({qty: this.state.qty + 10});
    //             console.log('state', this.state);
    //         });

    //     }




    // //arrow fns used to make sure this isn't undefined when called thru another obj
    // //another method that we could have used was bind()
    // increaseQuantity = () => {
    //     //below code will change qty but react doesn't know it has to re-load the page
    //     // this.state.qty += 1;
    //     // console.log('this', this.state);
    //     //SET STATE FORM 1

    //     //read about batching in setState
    //     //basically if u copy code thrice to add qty, it will be all ignored until the last call

    //     //use this when prev value isn't req
    //     //like to change title
    //     // this.setState({
    //     //     qty: this.state.qty + 1
    //     //     //shallow merge i.e rest prop of ob aren't vhanged
    //     //     //also react itself re-renders the component
    //     // });
        
    //     //SET STATE FORM 2
    //     //using a function
    //     //use this when prev value is req
    //     this.setState((prevState) => {
    //         return{
    //             qty: prevState.qty + 1
    //         }
    //     }, () => {
    //         console.log('this.state', this.state);
    //         //callback - can be used in setstate form 1 as well
    //         //setState is asynchronous calls
    //     });

    //     // this.setState((prevState) => {
    //     //     return{
    //     //         qty: prevState.qty + 1
    //     //     }
    //     // });

    //     // this.setState((prevState) => {
    //     //     return{
    //     //         qty: prevState.qty + 1
    //     //     }
    //     // });

    //     //here the qty will inc by 3 as a prevState is being maintained
    //     //but react will re-render this only once

    // }

    // decreaseQuantity = () => {
    //     const {qty} = this.state;
    //     if(qty===0){
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return{
    //             qty: prevState.qty - 1
    //         }
    //     });
    // }

    // render(){
        // console.log('this.props',this.props);
        const {price,title,qty} = props.product;
        const {
            product, 
            onIncreaseQuantity, 
            onDecreaseQuantity, 
            onDeleteProduct 
        } = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img}/>
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
                        onClick={() => onIncreaseQuantity(product)}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                        onClick={() => onDecreaseQuantity(product)}
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/1/1570.png"
                        onClick={() => onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        )
    // }
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
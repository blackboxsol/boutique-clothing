import React from 'react';
import { connect } from 'react-redux';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItemToCart } from '../../redux/cart/cart.actions';



const CollectionItem = ({item, addItemToCart2}) => {
    return (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                // backgroundImage:`url(${process.env.PUBLIC_URL}/${item.imageUrl})` //local images
                backgroundImage:`url(${item.imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{item.name}</span>
            <span className='price'>{item.price}</span>
        </div>
        <CustomButton onClick={()=> addItemToCart2(item)} inverted >ADD TO CART</CustomButton>
    </div>
)}

const mapDispatchToProps = dispatch =>({
    addItemToCart2: item2 => dispatch(addItemToCart(item2))
})


export default connect(null, mapDispatchToProps)(CollectionItem);
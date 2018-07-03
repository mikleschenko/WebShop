import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import {NavLink} from 'react-router-dom';
import like2 from './like2.svg';
import balance2 from './balance2.svg';
import shopping_cart2 from './shopping-cart2.svg';
import icon2 from './icon2.svg';

const BookCard = ({title, image, price, etag, author, toggleAddDeleteToArr, webReaderLink, renderPage}) => {

    return (
        <div className="card">
            <div className="card__cont">

                <div className="card__overlay">

                    <img className="book-icon" title='add to wish list' src={like2} alt="#"
                         onClick={() => toggleAddDeleteToArr(etag, 'wishList')}
                    />

                    <img className="book-comparison" title='add to compaire' src={balance2} alt="#"
                         onClick={() => toggleAddDeleteToArr(etag, 'compare')}
                    />
                    <a className='preview' target={'_blank'} href={webReaderLink}>preview</a>
                    <div className="buy">
                        <img src={shopping_cart2} title='add to basket' alt="#" className='cart-icon'
                             onClick={() => toggleAddDeleteToArr(etag, 'basket')}
                        />

                        <NavLink to='/page-book'>
                            <img className="book-info" title='go to books page' src={icon2} alt="#"
                                 onClick={() => renderPage(etag)}
                            />
                        </NavLink>


                    </div>
                </div>


                <img className="card__pic" src={image} alt='#'/>

            </div>

            <h4 className="card__title">{title}</h4>
            <p className="card__author">{author}</p>
            <p className="card__price">{price} грн</p>
        </div>

    );
};
BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    // author: PropTypes.string.isRequired

};
BookCard.defaultProps = {
    image: "/no-img.jpg",
    author: "undefined Author"
};


export default BookCard;

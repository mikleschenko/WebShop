import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const BookCard = ({title, image, price}) => {
    return (
        <div className="book-card">
            <img className="book-card__img"
                 src={image}
                 alt="#"/>
            <img className="book-icon" src="/heart.svg" alt="#"/>
            <button className="book-button" type="submit"> Add to Cart</button>
            <h4 className="book-card__subtitle">{title}</h4>
            <p className="book-price">{price}</p>
        </div>



        /*<div className="library">
        {library.map(item =>
            <div className='library-item' key={item.id}>
                <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title}
                     className='library-image'/>
                <p className='library-title'>{item.volumeInfo.title}</p>
                <p className='library-author'>{item.volumeInfo.authors}</p>
            </div>)}
</div>*/
    );
};
BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number
};
BookCard.defaultProps = {
    image: "/no-img.jpg"
};
export default BookCard;
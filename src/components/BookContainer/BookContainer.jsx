import React from "react";
//import PropTypes from 'prop-types';
import BookCard from "../BookCard/BookCard";
import Filter from "../filter/filter";
import "./index.css";

const BookContainer = ({
  library,
  toggleAddDeleteToArr,
  renderPage,
  sortBooks,
  sortBooksForThree,
  sortFreeBook,
  sortBooksDec,
  handler,
  category
}) => {
  return (
    <div className="book-container">
      <Filter
        library={library}
        sortBooks={sortBooks}
        sortBooksForThree={sortBooksForThree}
        sortFreeBook={sortFreeBook}
        sortBooksDec={sortBooksDec}
        handler={handler}
        category={category}
      />
      <div className="book-section">
        {library[0] ? (
          library.map(obj => {
            return (
              <BookCard
                etag={obj.etag}
                key={obj.etag}
                price={
                  obj.saleInfo.listPrice
                    ? obj.saleInfo.listPrice.amount
                    : "not for sale"
                }
                title={obj.volumeInfo.title}
                image={obj.volumeInfo.imageLinks.thumbnail}
                toggleAddDeleteToArr={toggleAddDeleteToArr}
                author={obj.volumeInfo.authors}
                renderPage={renderPage}
                webReaderLink={obj.accessInfo.webReaderLink}
              />
            );
          })
        ) : (
          <p className="book-noBook">
            You have entered the wrong request or maybe there are no such books
          </p>
        )}
      </div>
    </div>
  );
};

// price={obj.saleInfo.listPrice ? obj.saleInfo.listPrice.amount : 'not for sale'}
/*BookContainer.propTypes = {};
BookContainer.defaultProps = {};*/

export default BookContainer;

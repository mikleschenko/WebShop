import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OwnCompareBook from "../OwnCompareBook/OwnCompareBook";
import './index.css';

// class CompareBooks extends Component {
    // state = {
    //     compare: this.props.compare,
    // };

const CompareBooks=({compare, deleteCompareBooks})=>{
    // render() {
        return (
            <table className='table'>
                <thead>
                <tr className='container-compare'>

                    <th className='th-empty'></th>
                    {compare[0] && compare.map((obj) =>
                        <OwnCompareBook
                            key={obj.id}
                            id={obj.id}
                            img={obj.volumeInfo.imageLinks.thumbnail}
                            deleteCompareBooks={deleteCompareBooks}
                        />)}

                </tr>
                </thead>
                <tbody className='tbody-text'>
                <tr className='tr-container'>
                    <th className='th-name'>Title</th>
                    {compare.map((obj) => <td className='td-container'>{obj.volumeInfo.title}</td>)}
                </tr>
                <tr className='tr-container'>
                    <th className='th-name'>Authors</th>
                    {compare.map((obj) => <td className='td-container'>{obj.volumeInfo.authors[0]}</td>)}
                </tr>
                <tr className='tr-container'>
                    <th className='th-name'>Price</th>
                    {compare.map((obj) => <td
                        className='td-container'>{obj.saleInfo.listPrice.amount} {obj.saleInfo.listPrice.currencyCode}</td>)}
                </tr>
                <tr className='tr-container'>
                    <th className='th-name'>Page Count</th>
                    {compare.map((obj) => <td className='td-container'>{obj.volumeInfo.pageCount}</td>)}
                </tr>
                <tr className='tr-container'>
                    <th className='th-name'>Published Data</th>
                    {compare.map((obj) => <td className='td-container'>{obj.volumeInfo.publishedDate}</td>)}
                </tr>
                <tr className='tr-container'>
                    <th className='th-name'>Content Version</th>
                    {compare.map((obj) => <td className='td-container'>{obj.volumeInfo.contentVersion}</td>)}
                </tr>
                </tbody>
            </table>
        );
    // }
}

CompareBooks.propTypes = {};

export default CompareBooks;


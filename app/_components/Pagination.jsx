import React from 'react';
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Pagination = ({ pagesNumber, current, setCurrent }) => {
    const handleActivePage = (page) => {
        setCurrent(page);
    };
    const handleNextPage = () => {
        if (current < pagesNumber) {
            setCurrent(current + 1);
        }
    };
    const handlePrevPage = () => {
        if (current > 1) {
            setCurrent(current - 1);
        }
    };
    const renderPageNumbers = () => {
        const pages = [];
        const startPage = Math.max(2, current);
        const endPage = Math.min(pagesNumber - 1, current);

        if (pagesNumber <= 5) {
            for (let i = 1; i <= pagesNumber; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);
            if (startPage > 2) {
                pages.push('...');
            }
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
            if (endPage < pagesNumber - 1) {
                pages.push('...');
            }
            pages.push(pagesNumber);
        }
        return pages;
    };
    return (
        <div className="pagination-wrap">
            <ul>
                <li className='cursor' onClick={handlePrevPage}><MdOutlineKeyboardDoubleArrowLeft /></li>
                {renderPageNumbers().map((page, idx) => (
                    <li key={idx} onClick={() => typeof page === 'number' && handleActivePage(page)} className={`cursor ${current === page ? 'active' : ''}`}>
                        {page}
                    </li>
                ))}
                <li className='cursor' onClick={handleNextPage}><MdOutlineKeyboardDoubleArrowRight /></li>
            </ul>
        </div>
    );
};
export default Pagination;

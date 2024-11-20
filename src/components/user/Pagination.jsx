import React from 'react';

const Pagination = ({ totalPages, currentPage, onHandleCurrentPage }) => {
    const handlePreviousChange = index => {
        if (currentPage > 1) onHandleCurrentPage(currentPage - 1);
    };

    const handleLastChange = index => {
        if (currentPage < totalPages) onHandleCurrentPage(currentPage + 1);
    };

    const getVisiblePageNumbers = () => {
        const visiblePages = 5;
        const pages = [];
        let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
        let endPage = Math.min(totalPages, startPage + visiblePages - 1);

        if (endPage - startPage < visiblePages - 1) {
            startPage = Math.max(1, endPage - visiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    const visiblePageNumbers = getVisiblePageNumbers();

    return (
        <div className="flex flex-wrap justify-center mt-8 space-x-2">
            <button
                onClick={handlePreviousChange}
                disabled={currentPage === 1}
                className={`${
                    currentPage === 1
                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                } px-3 py-1 rounded-md mx-1 my-1 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
                Previous
            </button>
            {visiblePageNumbers.map(pageNumber => {
                return (
                    <button
                        onClick={() => onHandleCurrentPage(pageNumber)}
                        key={pageNumber}
                        className={`${
                            currentPage === pageNumber
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-800'
                        } px-3 py-1 rounded-md mx-1 my-1 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                        {pageNumber}
                    </button>
                );
            })}
            <button
                onClick={handleLastChange}
                disabled={currentPage === totalPages}
                className={`${
                    currentPage === totalPages
                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                } px-3 py-1 rounded-md mx-1 my-1 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
                Last
            </button>
        </div>
    );
};

export default Pagination;

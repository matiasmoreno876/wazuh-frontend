import React, {useEffect, useState} from 'react';

const Pagination = ({postPerPage, totalPost, paginate}) => {
    const [pageNumbers, setPageNumbers] = useState([])

    useEffect(() => {
        const cantPages = () => {
            for (let i = 1; i <= (Math.ceil(totalPost / postPerPage)); i++) {
                setPageNumbers(pageNumbers => [...pageNumbers, i]);
            }
        };
        cantPages()
    }, [])

    return (
        <nav data-cy="pagination" aria-label="Page navigation example">
            <ul className="pagination">
                {
                    pageNumbers.length > 0 && pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a className="page-link"
                               onClick={() => paginate(number)}
                               href="#">{number}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Pagination;

import React, { useContext } from 'react';
import { PaginationContext } from '../context/pagination-context'


const Pagination = ({ totalitems }) => {


  const pagesNum = [];
  const pagination = useContext(PaginationContext);
  let pageN = Math.ceil(totalitems / pagination.perPage);
  // console.log("----------",pageN);
  for (let i = 1; i <= pageN; i++) {

    pagesNum.push(i);
  }
  return (

    <nav>
      <ul className='pagination'>
        {pagesNum.map(num => (
          <li key={num} className='page-item'>
            <a onClick={() => pagination.pages(num)} className='page-link'>
              {num}
            </a>
          </li>
        ))}
      </ul>
      <ul className='pagination'>
        <li className='page-item'>

          <a onClick={pagination.currPage > 1 ? () => pagination.pages(pagination.currPage--) : () => pagination.pages(pagination.currPage)} className='page-link'>
            Previous
      </a>
        </li>
        <li className='page-item'>

          <a onClick={pagesNum.length != pagination.currPage ? () => pagination.pages(pagination.currPage++) : () => pagination.pages(pagination.currPage)} className='page-link'>
            Next
            </a>
        </li>

        {/* <li className='page-item'>

           <a onClick={pagesNum.length != pagination.currPage ? () => pagination.pages(pagination.currPage++) : () => pagination.pages(pagination.currPage)} className='page-link'>
           Next
            </a>
            </li> */}
      </ul>
    </nav>

  );
};

export default Pagination;
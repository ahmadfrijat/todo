import React ,{useState } from 'react';

export const PaginationContext = React.createContext();



function Pagination (props) {

    const [perPage, setperPage] = useState(3);
    const [currPage, setCurrPage] = useState(1);
   
  
    const lastItem = currPage * perPage;
    const FirstItem = lastItem - perPage;
    const list = props.list.sort((item1,item2)=>   item1.difficulty < item2.difficulty ? -1 : 1 );
    // console.log(list);
    

    let current = list.slice(FirstItem, lastItem);
    // console.log(current);
    const pages = pageNumber => setCurrPage(pageNumber);
    const setItems = numberOfPages => setperPage(numberOfPages);

 const state = {
    currPage,
    setCurrPage,
    perPage,
    setperPage,
    current,
    pages,
    setItems,

 }
 
    return (
      <PaginationContext.Provider value={state}>
        {props.children}
      </PaginationContext.Provider>
    );
  
}


export default Pagination;

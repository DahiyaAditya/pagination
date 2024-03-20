import React, { useState } from 'react'
import './Style.css'
const Pagination = ({handlePageNumber,totalProduct,productPerPage}) => {
    const[currentPage, setcurrentPage]= useState(1);
    let totalPage =Math.ceil(totalProduct/productPerPage)
    const handlePrevious=()=>{
        if(currentPage >1){
            setcurrentPage(currentPage-1)
            handlePageNumber(currentPage-1)
        }
    }
    const handleNext=()=>{
        if(currentPage <totalPage){
            setcurrentPage(currentPage+1)
            handlePageNumber(currentPage+1)
        }
    }
    const handleClick=(index)=>{
        setcurrentPage(index)
        handlePageNumber(index)
    }
    let pageNumbers=[]
    for(let i=1; i<=totalPage; i++){
        pageNumbers.push(i)
    }
    console.log(pageNumbers);
  return (
    <>
    <div className='page'>
    <button onClick={handlePrevious}>prev</button>
    {
        pageNumbers.map((obj,index)=>{
            return(
                <div className='number' onClick={()=>handleClick(index+1)}>
                    {obj}
                </div>
            )
        })
    }
    <button onClick={handleNext}>next</button>
    </div>
    </>
  )
}

export default Pagination
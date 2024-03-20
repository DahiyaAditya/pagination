import React, { useEffect, useState } from 'react'
import './Style.css'
import Pagination from './Pagination'
const Product = () => {
    const [data, setData] = useState([])
    const[totalProduct, setTotalProduct]=useState(1)
    const[currentPage, setcurrentPage]= useState(1);
    let productPerPage =10
    useEffect(()=>{
        const fetchData= async ()=>{
            const response = await fetch("https://dummyjson.com/products?limit=100")
            const fetchedData = await response.json();
            console.log(fetchedData.products);
            setData(fetchedData.products)
            setTotalProduct(fetchedData.limit)
        }
        fetchData()
    },[])
    const handlePageNumber=(number)=>{
        setcurrentPage(number)
    }
    const lastnumber = currentPage*productPerPage;
    const firstnumber= lastnumber-productPerPage;
    const currentPageData = data.slice(firstnumber,lastnumber)
  return (
    <>
    <div className='container'>
        {
            currentPageData.map((obj,index)=>{
                return(
                    <div className='allproducts' >
                        <img src={obj.thumbnail}></img>
                        <p>{obj.title}</p>
                    </div>    
                )
            })
        }
    </div>
    <Pagination handlePageNumber={handlePageNumber} totalProduct={totalProduct} productPerPage={productPerPage}></Pagination>
    </>
  )
}

export default Product
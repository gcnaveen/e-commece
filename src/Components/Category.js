import React, { useState } from "react";
import Data from "./Data";
import swal from 'sweetalert'


function Category() {
    const [data, setData] = useState(Data)


    const filterResult = (catItem)=>{
        const result = Data.filter ((ele)=>{
            return ele.category === catItem;
        })
        setData(result)
    }
    const handleBuy = (item)=>{
        swal({
            title: "Success",
            text: `${item} has been added to the chart`,
            icon: "success",
            button: "close",
          });
        
    }
    return (
      <>
        <h1 className="text-center text-info">Let's Shop</h1>
        <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
            <div className="col-md-3">
                <button onClick={()=> filterResult('Vegetables')} className="btn btn-warning w-100 mb-4">Vegetables</button>
                <button onClick={()=> filterResult('Fruits')} className="btn btn-warning w-100 mb-4">Fruits</button>
                <button onClick={()=>setData(Data)} className="btn btn-warning w-100 mb-4">All</button>
            </div>
            <div className="col-md-9">
                <div className="row">
                    {data.map((value)=>{
                        return(
                            <>
                             <div className="col-md-4 md-4" key ={value.id} >
                                <div className="card">
                                    <img src={value.image} className="card-img-top" alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">{value.name}</h5>
                                        <p>Price :{value.price}</p>
                                        {value.available===0 ? <p className="d-inline p-2 bg-danger text-black">Out Of Stock</p>:  
                                        <button onClick={()=>handleBuy(value.name)} className="btn btn-dark">Buy now</button>} 
                                       
                                    </div>
                                </div>
                    </div>
                            </>
                        )
                    })}
                   
                </div>
            </div>
        </div>
        </div>
      </>
    );
  }
  
  export default Category;
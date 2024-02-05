import React, { useState,useEffect } from 'react'

function Page() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);
    const [error,setError] = useState(null);

    async function  fetchProducts (){
        try {
            if(products.length<99){
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${ count === 0 ? 0 : count * 20}`);
            
            const data = await response.json();
            
            if(data && data.products && data.products.length){
                setProducts((prevData)=>[...prevData,...data.products]);
                setLoading(false);
                setCount(count+1);
            }
            }
            else{
                setDisableButton(true);
            }

        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    if (loading) {
        return <div>Loading data ! Please wait</div>;
    }

    if (error!== null) {
        return <div>Error occured ! {error}</div>;
    }

  return (
    <div className='flex flex-wrap justify-center'>

        <div className='flex flex-wrap justify-evenly '>
        {products && products.length ?
        products.map((product)=>(
            <div key={product.id}  className=' m-5'>
            <img alt={product.description} src={product.thumbnail} className='w-[400px] h-[300px] rounded-xl' />
            <p className='my-3 text-l'>{product.title}</p>
            </div>
        ))
        :null}
        </div>
        
        <div style={{display:disableButton?'none':'block'}}>
            <button 
                disabled={disableButton} 
                className='bg-red-700 px-5 pb-5 pt-3 m-5 rounded-3xl min-w-[100px] h-[50px] text-white' 
                onClick={()=>{fetchProducts()}}>
                    {!disableButton?(count===0?'Load Data':'Load More Data'):null}
            </button>
        </div>
        {disableButton ? <p className='bg-red-700 px-5 pb-5 pt-3 m-5 rounded-3xl min-w-[100px] h-[50px] text-white'>You have reached to 100 products</p> : null}
    </div>
  )
}

export default Page
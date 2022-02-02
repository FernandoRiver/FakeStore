import React, { useEffect, useState } from 'react'
import Card from './card';

const Container = (props) => {
    const [listaProductos, setLista] = useState(),
        categoria = props.categoria, 
        rated = props.rated, 
        limit = props.limit; 
    
        
    useEffect(async()=>{
        setLista();
        const getProductos = async()=>{
            let url = "products/";

            if(categoria){
                if(categoria.split(' ') > 0){
                    const newCategoria = categoria.split(' ');
                    url += "category/"+newCategoria[0]+"%20"+newCategoria[1];
                }
                else{
                    url += "category/"+categoria;
                }
            }

            const productos = await fetch('https://fakestoreapi.com/'+url+"?limit="+limit)
            .then(res=>res.json())
            
            return productos;
        }
        const productos = await getProductos()

        setLista(productos)
    },[categoria]);

    return <div className='productContainer'>
        <h2 className='categoria'>{categoria?categoria:"All"}</h2>
        <div className={'lista '+(listaProductos?"resGrid":null)}>
            {listaProductos?listaProductos.map((e)=>{
                if(e.rating.rate >= rated)
                    return <Card key={e.id} data={e}/>
            }):<div className="loading"><p>E</p></div>}
        </div>
    </div>
}

export default Container;
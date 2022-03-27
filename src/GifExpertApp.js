import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  
    const [categoria, setCategoria] = useState(['dragon ball']);

    /*const handleAdd = () =>{
        setCategoria([...categoria, 'pecados capitales']);
        //setCategoria( cats  => [...cats, 'pecados capitales']);
    }*/

        return (
            <>
        
                <h2>GifExpertApp</h2>
                <AddCategory setCategoria={setCategoria}/>
                <hr/>

                
                <ol>
                    {
                        categoria.map( category => (
                             <GifGrid
                                key={category}
                                category = {category}
                             />
                        ))
                    }
                </ol>

            </>
  )
};




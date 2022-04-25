import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs( category );    
    {/* aqui renombrar en la desestructuración se pone : seguido del nuevo nombre  */}
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'> { category } </h3>
            {/* loading ? <p>Loading</p> : null  , un if corto o operador ternario */} 
            { loading && <p className='animate__animated animate__flash'>Loading</p>} { /* en vez de utilizar lo comentado arriba utilizó esto*/}

            <div className='card-grid'>
                
                    {
                        images.map( img => {   {/* aquí se utiliza el nuevo nombre, se pudo utilizar data.map tambien sin renombrar arriba */}

                            return (
                                <GifGridItem 
                                    key = {img.id}
                                    {...img }
                                />
                                
                            );                           
                            
                        })
                    }
                
            </div>
        </> 
    )
}

import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['goku']);

    //const handleAdd = () =>{
    //    setCategories( [...categories, 'Light Yagami']);
    //}


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } /> 

            <hr />
            
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key = {category}
                            category = {category} />
                    ))
                }
            </ol>



        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp

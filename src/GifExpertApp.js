import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Bakery']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Events']);
    // }

    return (
        <>
            <h2>Gif Expert App</h2>

            <AddCategory setCategories={ setCategories }/>

            <hr />

            <ol>
                { categories.map(cat => 
                    <GifGrid 
                        key={cat}
                        category={cat}
                    />
                )}
            </ol>
        </>
    )
}

export default GifExpertApp;
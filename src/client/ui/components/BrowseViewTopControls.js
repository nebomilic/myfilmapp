import React from 'react';
const BrowseViewTopControls = () => { 
    return (
        <div className='top-controls'>
            <select name='category'>
                <option value='all'>All</option>
                <option value='comedy'>Comedy</option>
                <option value='action'>Action</option>
                <option value='horror'>Horror</option>
                <option value='scifi'>Sci-Fi</option>
                <option value='drama'>Drama</option>
            </select>
        </div>  

    ); 
};   
export default BrowseViewTopControls;
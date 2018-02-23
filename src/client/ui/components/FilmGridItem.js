import React from 'react';
import PropTypes from 'prop-types';

const FilmGridItem = ({title, image, rating, description}) => { 
    return (
        <div className='film-grid-item'>
            <img src={image} />
            <p>{rating}</p>
            <h4>{title}</h4>
            <p>{description}</p>            
        </div>  

    ); 
};   

FilmGridItem.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number,
    description: PropTypes.string,
};

export default FilmGridItem;
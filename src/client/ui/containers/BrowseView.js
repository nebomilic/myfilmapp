import React from 'react';
import TopControls from '../components/BrowseViewTopControls';
import FilmGridItem from '../components/FilmGridItem';
const BrowseView = () => { 
    return (
        <div className='content'>
            <div className='browse-grid'>
                <TopControls />
                {/*  temp placeholder, will be replaced by logic */}
                <FilmGridItem 
                    image='https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyOTE4NjE0M15BMl5BanBnXkFtZTgwMzcxMzY1NDM@._V1_UX67_CR0,0,67,98_AL_.jpg' 
                    title='Altered Carbon' 
                    rating='8.6' 
                    description='Set in a future where consciousness is digitized and stored, a prisoner returns to life in a new body and must solve a mind-bending murder to win his freedom.' />
               
                <FilmGridItem 
                    image='https://images-na.ssl-images-amazon.com/images/M/MV5BNTEwYzNiMGUtNzRlYS00MTMzLTliNzgtOGUxZGZiNThlNWYwXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX67_CR0,0,67,98_AL_.jpg' 
                    title='Black Mirror' 
                    rating='8.9' 
                    description='An anthology series exploring a twisted, high-tech world where humanitys greatest innovations and darkest instincts collide.' />
               
                <FilmGridItem 
                    image='https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UX67_CR0,0,67,98_AL_.jpg' 
                    title=' Thor: Ragnarok ' 
                    rating='8.0' 
                    description='Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his homeworld and the end ' />
               
                <FilmGridItem 
                    image='https://images-na.ssl-images-amazon.com/images/M/MV5BZTQzNmEwZTMtZGNkNC00YjQ5LThhYzMtZTBhNzUzODI5ZjRjXkEyXkFqcGdeQXVyMjM5NzU3OTM@._V1_UY98_CR5,0,67,98_AL_.jpg' 
                    title='The Flash' 
                    rating='8.0' 
                    description='After being struck by lightning, Barry Allen wakes up from his coma to discover hes been given the power of super speed, becoming the Flash, fighting crime in Central City.' />
            </div>
        </div>  

    ); 
};   
export default BrowseView;
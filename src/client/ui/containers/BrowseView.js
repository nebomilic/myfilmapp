import React, { Component } from 'react';
import TopControls from '../components/BrowseViewTopControls';
import FilmGridItem from '../components/FilmGridItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {getFilmsByCategory} from '../../redux/actions';
class BrowseView extends Component { 

    componentWillMount() {
        this.props.dispatch(getFilmsByCategory());
    }

    render() {
        return <div className='content'>
            <div className='browse-grid'>
                <TopControls/>
                {this.props.films.map((item, i) =>
                    <FilmGridItem key={i}
                        image={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + item.poster_path}
                        title={item.original_title}
                        rating={item.vote_average}
                        description={item.overview}/>
                )}
            </div>
        </div>;
    }
}

BrowseView.propTypes = {
    getFilmsByCategory: PropTypes.func,
    films: PropTypes.array,
    dispatch: PropTypes.func
};

const mapStateToProps = ( state ) => ({  
    films: state.filmReducer.films
});

export default connect(mapStateToProps)(BrowseView);
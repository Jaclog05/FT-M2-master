import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
        let details = this.props.movies.filter((m) => m.imdbID === this.props.id)
        this.props.getMovieDetail(details[0])
        console.log(this.props.movieDetail)
    }

    render() {
        return (
            <div className="movie-detail">
                <div className="container">
                    <h4 className='title'>{`Title: ${this.props.movieDetail.Title}`}</h4>
                    <h4>{`Year: ${this.props.movieDetail.Year}`}</h4>
                    <h4>{`imdbID: ${this.props.movieDetail.imdbID}`}</h4>
                    <h4>{`Type: ${this.props.movieDetail.Type}`}</h4>
                    <img className='img' src={this.props.movieDetail.Poster}/>
                </div>
               
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        movieDetail: state.movieDetail,
        movies: state.moviesLoaded
    }
}

function mapDispatchToProps(dispatch){
    return {
        getMovieDetail: id => dispatch(getMovieDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
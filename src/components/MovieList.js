import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import MovieDetail from './MovieDetail';

class MovieList extends Component {
    state = { movies: [] };


    componentWillMount() {
        return fetch('https://www.omdbapi.com/?s='+encodeURIComponent(this.props.finalQueryValue))
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({movies: responseJson.Search});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    renderMovies() {
        return this.state.movies.map(movie =>
            <MovieDetail key={movie.imdbID} movie={movie} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderMovies()}
            </ScrollView>
        );
    }
}

export default MovieList;

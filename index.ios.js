import React, {Component} from 'react';
import {
    AppRegistry,
    View
} from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import MovieList from './src/components/MovieList';


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            final: '',
            done: false
        };
    }

    setQueryValue = (text) => {
        this.setState({query: text, final: '', done: false});
    }

    handlePressButton = () => {
        this.setState({final: this.state.query, done:true});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText={'Movie Database Search'} />
                <Search autoCorrect={false}
                        placeHolder="enter the movie to search"
                        secureTextEntry={false}
                        setQueryValue={this.setQueryValue}
                        onPress = {this.handlePressButton.bind(this)}
                />
                {this.state.done && <MovieList finalQueryValue={this.state.final}/>}
            </View>
        );
    }
}

AppRegistry.registerComponent('rMovieSearch', () => App);

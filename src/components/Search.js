import React from 'react';
import {TextInput} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const Search = ({autoCorrect, placeHolder, secureTextEntry, value, setQueryValue, onPress}) => {
    const {textInputStyle} = styles;

    return (
        <Card>
            <CardSection>
                <TextInput style={textInputStyle}
                           autoCorrect={autoCorrect}
                           placeholder={placeHolder}
                           secureTextEntry={secureTextEntry}
                           value={value}
                           onChangeText={setQueryValue}
                />
                <Button onPress={onPress}>Search</Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    textInputStyle: {
        flex:3,
        height: 40,
        paddingLeft: 5
    }
};

export default Search;

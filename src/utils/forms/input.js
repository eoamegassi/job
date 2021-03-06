import React from 'react';
import {StyleSheet, TextInput} from 'react-native';


const input = (props) => {
    let template = null;

    if (props.type === 'textInput') {
        template = <TextInput {...props}
                              style={styles.input}
                              placeholderTextColor={'#CECECE'}
                              autoCapitalize={'none'}/>;
    } else {
        return template;
    }


    return template;
};


const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#CECECE',
        fontSize: 16,
        padding: 5,
        marginBottom: 10,
        color: '#FFFFFF'
    }
});


export default input;

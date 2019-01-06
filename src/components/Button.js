import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

const Button = (props) => {
    const {
        buttonStyle,
        textStyle
    } = styles;
    return (
        <TouchableOpacity style={ buttonStyle }>
            <Text style={ textStyle }> Click me!! </Text>
        </TouchableOpacity>
    );
};

Button.propTypes = {

};

const styles = {
    textStyle: {
        alignSelf: 'center',
        borderColor: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007aff',
      marginLeft: 5,
      marginRight: 5
    }
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const Card = () => {
    return (
        <View style={styles.containerStyle}>

        </View>
    );
};

const styles = {
  containerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRightt: 5,
      marginTop: 10,

  }
};

Card.propTypes = {

};

export default Card;

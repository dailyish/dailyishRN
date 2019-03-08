import React from 'react';
import { Text, View } from 'react-native';
// import PropTypes from 'prop-types';

// const propTypes = {
//   habit: PropTypes.function.isRequired
// };

// const defaultProps = {};

const TaskEdit = ({ habit }) => (
  <View style={styles.containerStyle}>
    <Text style={styles.textStyle}>{habit.title}</Text>
  </View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderRadius: 2,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    padding: 20,
    opacity: 0.9,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 16
    // fontFamily: 'Roboto'
  }
};

export default TaskEdit;

// TaskEdit.propTypes = propTypes;
// TaskEdit.defaultProps = defaultProps;

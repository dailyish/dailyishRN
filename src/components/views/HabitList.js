import React, { Component } from 'react';
import { View } from 'react-native';
// crr
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TaskEdit from './TaskEdit';

const propTypes = {
  habits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string
    })
  ).isRequired
};

const defaultProps = {};

class HabitList extends Component {
  renderItems(habits) {
    return habits.map(habit => <TaskEdit key={habit.id} habit={habit} />);
  }

  render() {
    const { habits } = this.props;
    return <View>{this.renderItems(habits)}</View>;
  }
}

// Allows access to the store to view state and passes as props to class above
const mapStateToProps = state => ({ habits: state.habits });

export default connect(mapStateToProps)(HabitList);

HabitList.propTypes = propTypes;
HabitList.defaultProps = defaultProps;

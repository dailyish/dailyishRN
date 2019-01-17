import React from 'react';
// import PropTypes from 'prop-types';
import NavButton from './NavButton';

// const propTypes = {
//   navigation: PropTypes.function.isRequired
// };

// const defaultProps = {};

const NavDrawerButton = ({ navigation }) => (
  <NavButton onPress={() => navigation.openDrawer()} icon="menu" />
);

export default NavDrawerButton;

// NavDrawerButton.propTypes = propTypes;
// NavDrawerButton.defaultProps = defaultProps;

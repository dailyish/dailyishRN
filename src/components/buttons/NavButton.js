import React from 'react';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

const propTypes = {
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired
};

const defaultProps = {};

const NavButton = ({ onPress, icon }) => {
  const { NavButtonStyle, IconStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={NavButtonStyle}>
      <Icon name={icon} iconStyle={IconStyle} />
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  NavButtonStyle: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(250, 250, 250, 0)',
    borderRadius: 50,
    marginRight: 5
  },
  IconStyle: {
    color: '$darkGrey'
  }
});

export default NavButton;

NavButton.propTypes = propTypes;
NavButton.defaultProps = defaultProps;

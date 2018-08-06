import React from 'react';
import { StyleSheet, View, Modal, ActivityIndicator, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import renderIf from './../../utils/renderIf.js';
import colors from './../../utils/colors.js';

const ConditionalLoaderModal = props => {
  const {
    modalShowing,
    modalError,
    modalSuccess,
    titleModal,
    descriptionModal
  } = props;

  const {
    modalBackground,
    activityIndicatorWrapper,
    indicator,
    title,
    description
  } = styles;

  return (
    <Modal
      transparent
      animationType={'none'}
      visible={modalShowing}
      onRequestClose={() => {
        // lo pide sino tira warn
      }}
    >
      <View style={modalBackground}>
        <View style={activityIndicatorWrapper}>
          {renderIf(modalSuccess === false && modalError === false,
            <ActivityIndicator
              style={indicator}
              size="large"
              color={colors.green}
              animating={modalShowing}
            />
          )}
          {renderIf(modalSuccess,
            <Icon
              style={indicator}
              name="check"
              size={35}
              color={colors.green}
            />
          )}
          {renderIf(modalError,
            <Icon
              style={indicator}
              name="exclamation"
              size={35}
              color={colors.red}
            />
          )}
          <Text style={title}>{titleModal}</Text>
          <Text
            style={description}
            numberOfLines={2}
          >
            {descriptionModal}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: colors.transparent40
  },
  activityIndicatorWrapper: {
    backgroundColor: colors.white,
    height: 150,
    width: 250,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  indicator: {
    marginTop: 10,
    marginBottom: 5
  },
  title: {
    color: colors.darkGray,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  description: {
    color: colors.darkGray,
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  }
});

export default ConditionalLoaderModal;

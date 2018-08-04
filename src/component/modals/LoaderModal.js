import React from 'react';
import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';

const ModalLoader = props => {
  const { loading, ...attributes } = props;

  return (
    <Modal
      transparent
      animationType={'fade'}
      visible={loading}
      onRequestClose={() => {
        // anything to do when closing...
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} />
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
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 70,
    width: 70,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default ModalLoader;

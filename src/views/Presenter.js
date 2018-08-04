import React, { Component } from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';

import LoaderModal from './../component/modals/LoaderModal.js';

const time = 5000; //miliseconds
class Presenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  showModal(visible) {
    this.setState({
      loading: visible
    });

    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, time);
  }

  render() {
    const { container, title, buttonLoading, containerButton } = styles;
    return (
      <View style={container}>
        <LoaderModal loading={this.state.loading} />
        <Text style={title}>
          Working with Modals!
        </Text>
        <Button
          style={buttonLoading}
          containerViewStyle={containerButton}
          title="simple loading modal"
          underlayColor="#cccccc"
          onPress={() => this.showModal(true)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCCCCC',
    height: Dimensions.get('window').height,
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingTop: 50
  },
  title: {
    fontSize: 24,
    paddingBottom: 20,
    fontWeight: 'bold'
  },
  buttonLoading: {
    fontWeight: 'bold',
    backgroundColor: '#333333',
    borderRadius: 2
  },
  containerButton: {
    width: '100%'
  }
});

export default Presenter;

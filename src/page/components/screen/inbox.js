import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style/inboxStyle';
import colors from '../unit/colors';
import List from './components/list';
import Header from '../header/homeHeader';


onSlide = () => {
  this.props.navigation.openDrawer();
};
class Inbox extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <Header onSlide={this.onSlide} />
        <Text style={styles.all}>ALL INBOXES</Text>

        <List />
      </View>
    );
  }
}

export default Inbox;

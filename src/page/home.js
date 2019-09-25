import React, { Component } from 'react';
import { View, Text, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './components/header/homeHeader';
import colors from './components/unit/colors';
import Primary from './components/screen/primary';
import OIcon from 'react-native-vector-icons/Octicons';

class home extends Component {
  static navigationOptions = {
    header: null,
  };

  onSlide = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          <Header onSlide={this.onSlide} />
          <Primary />
        </ScrollView>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Compose')}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            position: 'absolute',
            bottom: 28,
            right: 28,
            height: 60,
            backgroundColor: '#FCF3F3',
            borderRadius: 100,
            elevation: 5
          }}
        >
          <OIcon name="plus" size={34} color="#f00" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default home;

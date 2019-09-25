import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../unit/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderHome = props => {
  return (
    <View>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          elevation: 1,
          borderWidth: 1,
          borderRadius: 6,
          borderColor: colors.white,
          // padding: 2,
          // margin: 20,
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,

          alignItems: 'center',
        }}

      // onPress={() => this.props.navigation.navigate('Compose')}
      >
        <Icon
          name="menu"
          size={26}
          style={{ padding: 10 }}
          onPress={props.onSlide}
        />
        <Text style={{ fontSize: 16, justifyContent: 'center', color: colors.txt }}>
          Search mail
        </Text>
        <View
          style={{
            // backgroundColor: 'red',
            flex: 1,
            alignItems: 'flex-end',
            padding: 10,
          }}>
          <Image
            source={require('../../assests/awa.jpg')}
            style={{
              height: 30,
              width: 30,
              borderRadius: 100,
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderHome;

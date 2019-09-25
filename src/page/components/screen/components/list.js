import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../style/listStyle';

class List extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.box1}>
            <Image
              source={require('../../../assests/w.png')}
              style={styles.img}
            />
          </View>
          <View style={styles.box2}>
            <View style={styles.row}>
              <Text style={styles.header}>Vumonic Datalabs</Text>
              <Text style={styles.time}>7:01 am</Text>
            </View>

            <Text style={styles.head}>Opening for React Native Developer</Text>
            <View style={styles.row}>
              <Text style={styles.msg}>
                Direct walk-in interview schedules for IT/Software Profess...
            </Text>
              <Icon name="star-outline" size={22} style={styles.star} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default List;

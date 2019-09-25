import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../style/primaryStyle';
import colors from '../../unit/colors';

class PrimaryItem extends Component {
  render() {
    return (
      <View>
        <View style={styles.row}>
          <View style={styles.box1}>
            <Icon
              name="people-outline"
              size={24}
              color="#0962FF"
              style={styles.icn}
            />
          </View>
          <View style={styles.box2}>
            <Text style={styles.header}>Social</Text>
            <Text style={styles.head}>Quora Digest, Youtube</Text>
          </View>
          <View style={styles.box3}>
            <View style={styles.box}>
              <Text style={styles.num}>3 new</Text>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.box1}>
            <Icons
              name="tag-outline"
              size={24}
              color="#0D5D00"
              style={styles.icn}
            />
          </View>
          <View style={styles.box2}>
            <Text style={styles.header}>Promotions</Text>
            <Text style={styles.heads}>Top Picks</Text>
            <Text style={styles.smal}>
              freepik.com, flipkartpromotions.com, TechGig Latest....
            </Text>
          </View>
          <View style={styles.box3}>
            <View style={[styles.box, {backgroundColor: colors.green}]}>
              <Text style={styles.num}>11 new</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.box1}>
            <Icons
              name="information-outline"
              size={24}
              color="#FFC300"
              style={styles.icn}
            />
          </View>
          <View style={styles.box2}>
            <Text style={styles.header}>Updates</Text>
            <Text style={styles.head}>
              AngelList Alerts, Microsoft Careers, ShopperSto...
            </Text>
          </View>
          <View style={styles.box3}>
            <View style={[styles.box, {backgroundColor: colors.yellow}]}>
              <Text style={styles.num}>40 new</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default PrimaryItem;

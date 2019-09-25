import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './slideStyle';

const list1 = [
  { name: 'Primary', icon: 'inbox', navigate: 'Home' },
  { name: 'Social', icon: 'account-star-outline' },
  { name: 'Promotions', icon: 'tag-outline' },
  { name: 'Update', icon: 'information-outline' },
  { name: 'Forums', icon: 'tag-outline' },
];

const list2 = [
  { name: 'Starred', icon: 'star-outline' },
  { name: 'Snoozed', icon: 'clock-outline' },
  { name: 'Important', icon: 'tag' },
  { name: 'Sent', icon: 'send' },
  { name: 'Scheduled', icon: 'send-lock' },
  { name: 'Outbox', icon: 'send-circle-outline' },
  { name: 'Draft', icon: 'file-outline' },
  { name: 'All mail', icon: 'email-check-outline' },
  { name: 'Spam', icon: 'alert-octagon-outline' },
  { name: 'Bin', icon: 'delete-outline' },
  { name: 'Unsubscribed Emails', icon: 'card-outline' },
];

const list3 = [
  { name: 'Setting', icon: 'settings-outline' },
  { name: 'Help & Feedback', icon: 'help-circle-outline' },
];

class SlideMenu extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#ffffff" barStyle="light-content" />
        <ScrollView>
          <View>
            <Text style={styles.clean}>Clean Mail</Text>
          </View>
          <View style={styles.border}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Inbox')}
              style={styles.all}>
              <Icon size={26} color="black" name="inbox-multiple" />
              <Text style={styles.inbox}>All inboxes</Text>
            </TouchableOpacity>
          </View>

          {list1.map(item => (
            <View style={styles.list}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate(item.navigate)}
                style={styles.row}>
                <Icon size={26} color="black" name={item.icon} />
                <Text style={styles.inbox}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          ))}

          <View style={styles.list}>
            <Text>ALL LABELS</Text>
          </View>

          {list2.map(item => (
            <View style={styles.list}>
              <TouchableOpacity style={styles.row}>
                <Icon size={24} color="black" name={item.icon} />
                <Text style={styles.inbox}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          ))}

          <View style={styles.footer}>
            {list3.map(item => (
              <View style={styles.list}>
                <TouchableOpacity style={styles.row}>
                  <Icon size={24} color="black" name={item.icon} />
                  <Text style={styles.inbox}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation(SlideMenu);

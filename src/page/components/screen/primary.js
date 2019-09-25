import React, {Component} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style/primaryStyle';
import colors from '../unit/colors';
import {withNavigation} from 'react-navigation';
import List from './components/list';
import PrimaryItem from './components/primaryItem';
import {getGmailList} from '../../../store/action/gmail';
import MailCore from 'react-native-mailcore';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import * as IMAPMessagesRequestKind from '../../../store/constants/IMAPMessagesRequestKind';

class Primary extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }
  componentDidMount() {
    console.warn('com-did-mount');

    this.props.getGmailList({
      hostname: 'imap.gmail.com',
      port: 993,
      username: 'awadheshphoto1@gmail.com',
      password: 'fewnmlyeslhqlcth',
    });
  }

  renderItem = data => {
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image source={require('../../assests/w.png')} style={styles.img} />
      </View>
      <View style={styles.box2}>
        <View style={styles.row}>
          <Text style={styles.header}>Vumonic Datalabs</Text>
          <Text style={styles.time}>7:01 am</Text>
        </View>

        <Text style={styles.head}>1234567890wertyuiop</Text>
        <View style={styles.row}>
          <Text style={styles.msg}>
            Direct walk-in interview schedules for IT/Software Profess...
          </Text>
          <Icon name="star-outline" size={22} style={styles.star} />
        </View>
      </View>
    </View>;
  };

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'red',
        }}
      />
    );
  };

  render() {
    return (
      <View>
        <Text style={styles.all}>Primary</Text>

        <Text style={{backgroundColor: 'red'}}>result.subject</Text>

        {/* <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          // keyExtractor= {item=>item.id.toString()}
          style={{backgroundColor: 'yellow'}}
        /> */}

        {/* <Text>{this.props.gmailList.mailDate}</Text> */}
        {console.warn('primary render')}
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(`mapStateToProps`, state.gmailReducer);
  return {
    gmailList: state.gmailReducer,
  };
};

const dispatchToProps = dispatch => {
  return bindActionCreators({getGmailList}, dispatch);
};

export default connect(
  mapStateToProps,
  dispatchToProps,
)(withNavigation(Primary));

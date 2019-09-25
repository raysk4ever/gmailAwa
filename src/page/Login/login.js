import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import MailCore from 'react-native-mailcore';
// import * as IMAPMessagesRequestKind from '../../store/constants/IMAPMessagesRequestKind';
import styles from './style/loginStyle';

// import logins from '../../store/apis/loginApi';

class login extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: 'awadheshphoto1@gmail.com',
      password: 'fewnmlyeslhqlcth',
      validated: false,
    };
  }

  login = (emails, pass) => {
    console.warn('login click');

    // emails = 'awadheshphoto1@gmail.com';
    // pass = 'fewnmlyeslhqlcth';
    MailCore.loginImap({
      hostname: 'imap.gmail.com',
      port: 993,
      // username: emails,
      // password: pass,

      username: 'awadheshphoto1@gmail.com',
      password: 'fewnmlyeslhqlcth',
    })
      .then(result => {
        // alert(result);
        console.warn('login done: ', result);
        // this.navigation.navigate("Home");
        // {()=>this.navigation.navigate("Home")}
      })
      .catch(error => {
        // alert(error);
        console.warn('errorssss::: ', error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.head}>Clean Mail Master</Text>

        <View style={styles.body}>
          <TextInput
            placeholder="Enter Your Email"
            placeholderTextColor="#D50000"
            style={styles.textInput}
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({email})}
            // value={this.state.email}
          />

          <TextInput
            placeholder="Enter Your Password"
            placeholderTextColor="#D50000"
            style={styles.textInput}
            underlineColorAndroid="transparent"
            // secureTextEntry={true}
            onChangeText={password => this.setState({password})}
            // value={this.state.password}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.btn,
            // { opacity: (this.state.email != '' && this.state.password != '') ? 1 : 0 },
          ]}
          // disabled={(this.state.email == '' || this.state.password == '')}
          // onPress={()=> this.login(this.state.email, this.state.password)}
          onPress={() => this.login()}
          // onPress={()=>this.navigation.navigate("Home")}
        >
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default login;

//=====================================================================================

// login=(emails, pass)=>{
//       console.warn('login click');

//       // emails = 'awadheshphoto1@gmail.com';
//       // pass = 'fewnmlyeslhqlcth';
//       MailCore.loginImap({
//         hostname: 'imap.gmail.com',
//         port: 993,
//         // username: emails,
//         // password: pass,

//         username: 'awadheshphoto1@gmail.com',
//         password: 'fewnmlyeslhqlcth',
//     }).then(result => {
//         // alert(result);
//         console.warn('1: ', result);

//     })
//         .catch(error => {
//             // alert(error);
//             console.warn('errorssss::: ', error);

//         });
//     };

// listMail = () => {

//   MailCore.loginImap({
//     hostname: 'imap.gmail.com',
//     port: 993,
//     username: 'awadheshphoto1@gmail.com',
//     password: 'fewnmlyeslhqlcth',
// }).then(result => {
//     // alert(result);
//     console.warn('1: ', result);

// })
//     .catch(error => {
//         // alert(error);
//         console.warn('errorssss::: ', error);

//     });

//   let requestKind = IMAPMessagesRequestKind.HEADERS | IMAPMessagesRequestKind.STRUCTURE | IMAPMessagesRequestKind.INTERNAL_DATE |
//   IMAPMessagesRequestKind.HEADER_SUBJECT | IMAPMessagesRequestKind.FLAGS | IMAPMessagesRequestKind.EXTRA_HEADERS

//   MailCore.getMails({
//     folder: "INBOX",
//     requestKind: requestKind
//   })
//   .then(result => {

//     let promises = [];
//     for (let i=0; i<result.mails.length;i++) {
//       let mail = result.mails[i];
//       let promise = new Promise((resolve,reject) => {
//         MailCore.getMail({
//           folder: 'INBOX',
//           messageId: mail.id,
//           requestKind: requestKind
//           }).then(
//             mailDetails => {
//               mail.body = mailDetails.body
//             resolve(mail);
//           })
//           .catch(error => reject(error))
//       });
//       promises.push(promise)
//     }
//     Promise.all(promises)
//     .then(mails =>
//       console.warn(mails))
//   })
//   .catch(error => {
//       alert(error);
//   });
// }

// validate = text => {
//   // console.warn(text);
//   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (reg.test(text) === false) {
//     alert('Email is Not Correct');
//     this.setState({ email: text });
//     return false;
//   } else {
//     this.setState({ email: text });
//     //   alert('Email is Correct');
//   }
// };

// getMail= () => {

//   MailCore.loginImap({
//     hostname: 'imap.gmail.com',
//     port: 993,
//     username: 'awadheshphoto1@gmail.com',
//     password: 'fewnmlyeslhqlcth',
// }).then(result => {
//     // alert(result);
//     console.warn('1: ', result);

// })
//     .catch(error => {
//         // alert(error);
//         console.warn('errorssss::: ', error);

//     });

//   let requestKind = IMAPMessagesRequestKind.HEADERS | IMAPMessagesRequestKind.STRUCTURE | IMAPMessagesRequestKind.INTERNAL_DATE |
//   IMAPMessagesRequestKind.HEADER_SUBJECT | IMAPMessagesRequestKind.FLAGS | IMAPMessagesRequestKind.EXTRA_HEADERS

//   MailCore.getMail({
//     folder: "INBOX",
//     messageId: 2,
//     requestKind: requestKind,
//     headers: ['isEncrypted']
//   })
//   .then(result => {
//     // alert("getMail then");
//     console.warn(result);
//   })
//   .catch(error => {
//     console.warn(error);
//   });
// }

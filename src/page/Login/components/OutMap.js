import React from 'react';
import MailCore from 'react-native-mailcore';
import { TouchableOpacity, Text } from 'react-native';

const CLIENT_ID = 'fb78f18b-1393-453b-a7ed-8946bba7ba71';

class Outlook extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        console.warn("com-did-mount");
        MailCore.loginImap({
            hostname: 'imap.gmail.com',
            port: 993,
            username: 'awadheshphoto1@gmail.com',
            password: 'fewnmlyeslhqlcth',
        }).then(result => {
            // alert(result);
            console.warn('1: ', result);

        })
            .catch(error => {
                // alert(error);
                console.warn('errorssss::: ', error);

            });

        MailCore.getFolders()
            .then(result => {
                const a = [...result.folders];
                a.forEach(element => {
                    console.warn('folder:::: ',element.path);
                });
            })
            .catch(error => {
                console.warn(error);
            });
    }

    render() {
        return (
            <TouchableOpacity>
                <Text style={{fontSize:50}}>Out Map</Text>
            </TouchableOpacity>
        )
    }
}
export default Outlook;

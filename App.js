import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  Image, 
  TouchableOpacity
} from 'react-native';

import ArgyleSdk from '@argyleio/argyle-plugin-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { PLUGIN_KEY, API_HOST} from '@env';

_storeData = async userToken => {
  try {
    await AsyncStorage.setItem('argyleLinkToken', userToken);
  } catch (error) {
    console.log("Error saving data", error);
  }
};

_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('argyleLinkToken');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log("Error retrieving data", error);
  }
};

export default class App extends Component {

  async componentDidMount() {
      const token = await _retrieveData();
      const userToken = token ? token : '';

      ArgyleSdk.loginWith(PLUGIN_KEY, API_HOST, userToken);

      ArgyleSdk.onUserCreated(userToken => {
        _storeData(userToken.token);
      });

      ArgyleSdk.addIncomeSourceLinkVisible(false);

      ArgyleSdk.onClose(() => console.log('onClose'));
  }

  startArgyle = () => {
    ArgyleSdk.start();
  }

  render(){
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://www.quickenloans.com/press-room/wp-content/uploads/2019/01/rm-h-800x400.png'}}
              style={styles.logo} />
        <Text style={styles.title}>Let's connect your work accounts</Text>
        <Text style={styles.heading}>
          Be one of the first community members to improve your earnings
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.startArgyle}>
          <Text style={styles.buttonText}>CONNECT PAYROLL</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}> 
          By clicking Connect Payroll, you are allowing Argyle to provide
          RocketMortgage with your payroll information. More information&nbsp;
          <Text style={{color: '#4C7DD9'}}
                onPress={() => Linking.openURL('https://www.rocketmortgage.com/')}>
            here.
          </Text>
        </Text>
      </View>
    );
  } 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '20%',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 50,
    marginBottom: '50%',
    marginLeft: '5%',
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    margin: 10,
    fontWeight: "500",
    color: "#B5121B",
  },
  heading: {
    fontSize: 20,
    color: "#161818",
    fontWeight: "300",
    textAlign: 'left',
    marginBottom: 20,
    marginLeft: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#B5121B",
    borderRadius: 15,
    fontWeight: "700",
    width: 250,
    height: 45,
  },
  buttonText: {
    color: "white",
  },
  paragraph: {
    margin: 20,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
    fontSize: 12,
  },
});

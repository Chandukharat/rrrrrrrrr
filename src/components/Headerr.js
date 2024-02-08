import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
  StatusBar,
  ScrollView,
  Image,
  Button,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Headerr = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
    // Here you can add your logic to validate the user's email and password and authenticate them
  };
  return (
    <ScrollView>
      <ImageBackground
        source={require('../assests/images/Shapes.png')}
        style={{ flex: 1, height: 201 }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View
            style={{
              marginTop: 20,
              marginLeft: 20,
            }}>
            <Image
              style={styles.imageContainerr}
              source={require('../assests/images/Reliance.png')}
            />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.imageContainer}>
        <Image source={require('../assests/images/Cart.png')} />
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.TxtColor}>PHYSICAL INVENTORY</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.containerrr}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Domain ID"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.inputtt}
            />
          </View>
        </View>

        <View style={styles.containerrr}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword}
              onChangeText={setPassword}
              value={password}
              autoCapitalize="none"
              style={styles.inputtt}
            />
            <TouchableOpacity
              onPress={toggleShowPassword}
              style={styles.buttonnn}>
              <Image source={require('../assests/icons/Eye.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.PassContainer}
          onPress={() => {
            navigation.navigate('Password');
          }}>
          <Text style={styles.PassText}>Forgot Password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Server'), (onPress = { handleLogin });
          }}
          style={styles.ButtonLogIn}>
          <View>
            <Text style={styles.btnColor}>Login Now</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainerr: {
    height: 62,
    width: 122,
  },

  input: {
    width: '100%',
    height: 58,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 24,
    color: 'black',
  },
  MainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inputBoc: {
    width: '100%',
    height: 58,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 24,
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 50,
  },
  TxtColor: {
    color: '#0B185E',
    marginTop: 5,
    fontSize: 18,
    fontWeight: 400,
  },
  ButtonLogIn: {
    marginTop: 50,
    width: '100%',
    height: 58,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 24,
    backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnColor: {
    color: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    // fontFamily: 'poppins',
    fontSize: 20,
  },
  PassContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    marginLeft: 190,
    fontSize: 14,
    color: 'red',
  },
  PassText: {
    fontSize: 14,
    color: 'red',

    fontWeight: 400,
    letterSpacing: 0.06,
    lineHeight: 16.2,
  },

  containerrr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 58,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 4,
    backgroundColor: '#87CEEB4D',
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    paddingHorizontal: 10,
    height: 58,
  },
  inputtt: {
    flex: 1,
    color: 'grey',
  },
  buttonnn: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 40,
    height: 40,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'white',
    borderRadius: 5,
  },
});

export default Headerr;

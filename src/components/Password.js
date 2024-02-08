import React, {useEffect} from 'react';
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
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Password = ({navigation}) => {
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
  const [time, setTime] = useState(59);

  if (time !== 0) {
    useEffect(() => {
      if (time !== 0) {
        setInterval(() => {
          setTime(prevTime => prevTime - 1);
          //  console.log(typeof(time), time)
        }, 1000);
      }
    }, []);
  }

  // useEffect(() => {
  //   if (time === 0) {
  //     setTime(0)
  //   }
  // }, [time]);

  const [otp, setOtp] = useState('');

  const handleInput = (index, value) => {
    const newOtp = otp.split('');
    newOtp[index] = value;
    setOtp(newOtp.join(''));
  };

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
    // Here you can add your logic to validate the user's email and password and authenticate them
  };

  return (
    <ScrollView>
      <View>
        <Image source={require('../assests/images/Head.png')} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assests/images/Reliance.png')} />
      </View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Text style={styles.PassText}>
            We sent you an one time password on{' '}
          </Text>
          <Text style={styles.PassText}>this mobile number </Text>
        </View>
        <View style={styles.MobContainer}>
          <Text style={styles.PassText}>+91 - 1234567890 </Text>
        </View>
        <View style={styles.containerr}>
          {[...Array(4)].map((_, index) => (
            <TextInput
              key={index}
              style={styles.inputBox}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={value => handleInput(index, value)}
              value={otp[index]}
            />
          ))}
        </View>

        <Text>00:{time}</Text>

        <Text>
          Not received OTP ? <Text style={styles.OTPText}>Send OTP</Text>
        </Text>

        <View style={styles.ButtonLogIn}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Eachh'), (onPress = {handleLogin});
            }}>
            <Text style={styles.btnColor}>LOGIN NOW</Text>
          </TouchableOpacity>
        </View>
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
  MobContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    fontWeight: 700,
  },
  containerr: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  input: {
    width: '100%',
    height: 58,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 24,
  },
  inputBox: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 50,
    textAlign: 'center',
    fontSize: 20,
  },
  MainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',

    marginTop: 50,
  },
  ButtonLogIn: {
    marginTop: 25,
    width: '100%',
    height: 58,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 24,
    backgroundColor: '#3C467E',
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
    fontWeight: 700,
  },
  PassContainer: {
    display: 'flex',

    fontFamily: 'Avenir-Medium',
    fontSize: 14,
  },
  OTPText: {
    fontSize: 17,
    color: 'red',

    fontFamily: 'Avenir-Medium',
    fontWeight: 600,
    letterSpacing: 0.06,
    lineHeight: 17,
  },
  PassText: {
    fontSize: 17,
    color: '#2E335A',

    fontFamily: 'Avenir-Medium',
    fontWeight: 600,
    letterSpacing: 0.06,
    lineHeight: 17,
  },
});

export default Password;

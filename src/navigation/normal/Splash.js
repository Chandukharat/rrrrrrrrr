import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
  Easing,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import AppNavigator from './AppNavigators';

const Splash = ({navigation}) => {
  const [logoOpacity, setLogoOpacity] = useState(new Animated.Value(0));
  const [logoScale, setLogoScale] = useState(new Animated.Value(0));
  
  const [animation, setAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  const translateY = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -200, 0],
  });

  const scale = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.5, 1],
  });
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  const animateDots = () => {
    const timingConfig = {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    };

    Animated.sequence([
      Animated.timing(dot1, timingConfig),
      Animated.timing(dot2, timingConfig),
      Animated.timing(dot3, timingConfig),
    ]).start(() => {
      dot1.setValue(0);
      dot2.setValue(0);
      dot3.setValue(0);
      animateDots();
    });
  };

  useEffect(() => {
    animateDots();
  }, []);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start(() => {});
  }, []);
  return (
    <View>
     

      <ImageBackground
        source={require('../../assests/images/Shapes.png')}
        style={{flex: 1, height: 371}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View
            style={{
              marginTop: 20,
              marginLeft: 20,
            }}>
            <Image
              style={styles.imageContainer}
              source={require('../../assests/images/Reliance.png')}
            />
          </View>
        </View>
      </ImageBackground>

      <View
        source={require('../../assests/images/Reliance.png')}
        style={{
         
          marginTop: 400,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.TxtColor}>PHYSICAL INVENTORY</Text>
      </View>
      <View style={styles.loaderContainer}>
        <Animated.View style={[styles.dot, {opacity: dot1}]} />
        <Animated.View
          style={[styles.dot, {opacity: dot2, marginHorizontal: 8}]}
        />
        <Animated.View style={[styles.dot, {opacity: dot3}]} />
      </View>
      <View
       >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Headerr');
          }}>
          <View style={styles.ButtonLogIn}>
            <Text style={styles.btnColor}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  TxtColor: {
    color: '#0B185E',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 500,
  },
  ButtonLogIn: {
   margin:'8%',
    width: '80%',
    height: '28%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop:50,
    borderRadius: 17,
    backgroundColor: '#00008B',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  btnColor: {
    color: 'white',
    
   
    // fontFamily: 'poppins',
    fontSize: 20,
    fontWeight: 700,
  },
  imageContainer: {
    height: 62,
    width: 122,
  },
  loaderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00008B', // Change the color as needed
  },
});
export default Splash;

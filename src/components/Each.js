import React, {Component, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Platform,
  TextInput,
  Modal,
  Button,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {useState} from 'react';
const data = [
  {key: '1', title: 'Item 1'},
  {key: '2', title: 'Item 2'},
  {key: '3', title: 'Item 3'},
  {key: '4', title: 'Item 1'},
  {key: '5', title: 'Item 2'},
  {key: '6', title: 'Item 3'},
  {key: '7', title: 'Item 1'},
  {key: '8', title: 'Item 2'},
  {key: '9', title: 'Item 3'},
  {key: '12', title: 'Item 1'},
  {key: '22', title: 'Item 2'},
  {key: '32', title: 'Item 3'},
  {key: '16', title: 'Item 1'},
  {key: '26', title: 'Item 2'},
  {key: '36', title: 'Item 3'},
];
const keyExtractor = item => item.key;
function RenderIt({item}) {
  return (
    <View key={item.key} style={styles.arrContainer}>
      <View style={styles.input}>
        <Text>{item.title}</Text>
      </View>
    </View>
  );
}

const Eachh = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const translateY = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50],
    extrapolate: 'clamp',
  });
  const {myProp} = route.params;

  useEffect(() => {
    console.log(myProp);
  });

  const handleHover = () => {
    if (myProp == 'Each') {
      navigation.navigate('Eachh2');
    } else {
      navigation.navigate('Scan');
    }
  };

  return (
    <View>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        <ImageBackground
          source={require('../assests/images/Rectangle.png')}
          style={{flex: 1, height: 150}}>
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                marginLeft: 20,
              }}
              onPress={() => navigation.goBack()}>
              <Image
                style={styles.imageContainer}
                source={require('../assests/images/back.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 20,
                marginLeft: 20,
                marginLeft: 240,
              }}
              // onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.opt}
                source={require('../assests/images/opt.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 5,
                marginLeft: 20,
              }}
              // onPress={() => navigation.goBack()}
            >
              <Image
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 50,
                }}
                source={require('../assests/images/profile.webp')}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
              marginLeft:140,
              marginTop:40,
              color:'white',
              fontSize:20,
              fontWeight:900
              }}>
              {myProp} Type
            </Text>
          </View>
        </ImageBackground>
        <View  style={styles.arrContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Parent');
            }}>
            <View style={styles.input}>
              <Text>chandu</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <View>
                <Image
                  style={{marginLeft: '80%'}}
                  source={require('../assests/icons/Close.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },

  imageContainer: {
    height: 16,
    width: 22,
  },
  TxtColor: {
    color: 'white',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 700,
  },

  TypeBox: {
    height: 80,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'blue',
    width: '80%',
    paddingHorizontal: 10,
    borderColor: '#9C9DB4',
    borderRadius: 24,
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HovTypeBox: {
    height: 80,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#3C467E',
    width: '90%',
    paddingHorizontal: 10,
    borderColor: '#9C9DB4',
    borderRadius: 24,
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  SearchBox: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'white',
    width: '70%',
    paddingHorizontal: 10,
    marginLeft: '10%',
    borderRadius: 24,
    marginTop: 10,
    //    shadowColor:'red',
    //    shadowOpacity:  Platform.OS === 'android' ?  10: 0
    shadowColor: '#000',

    shadowOffset:
      Platform.OS === 'ios' ? {width: 0, height: 2} : {width: 0, height: 8},
    shadowOpacity: Platform.OS === 'ios' ? 0.5 : 4,
    shadowRadius: Platform.OS === 'ios' ? 2 : 16,
    elevation: 2,
  },
  SearchBtn: {
    marginLeft: 90,
  },
  btnColor: {
    color: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blankbtnColor: {
    color: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blackbtnColor: {
    color: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    fontWeight: 700,
    fontSize: 18,
  },
  buttonHovered: {
    backgroundColor: '#3C467E',
    padding: 10,
    borderRadius: 5,
  },

  ButtonLogIn: {
    height: 20,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#3C467E',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    borderRadius: 4,
    marginLeft: 10,
    shadowOffset:
      Platform.OS === 'ios' ? {width: 0, height: 2} : {width: 0, height: 8},
    shadowOpacity: Platform.OS === 'ios' ? 0.5 : 4,
    shadowRadius: Platform.OS === 'ios' ? 2 : 16,
    elevation: 2,
  },
  blank: {
    height: 20,

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
  },
  contain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 40,

    width: 200,
  },
  input: {
    width: '100%',
    height: 58,
    borderColor: 'gray',

    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: 'white',

    // backgroundColor: 'green',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  FilterBtn: {
    marginTop: 20,
    shadowColor: '#000',

    shadowOffset:
      Platform.OS === 'ios' ? {width: 0, height: 2} : {width: 0, height: 8},
    shadowOpacity: Platform.OS === 'ios' ? 0.5 : 4,
    shadowRadius: Platform.OS === 'ios' ? 2 : 16,
  },

  arrContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 300,
    height: 250,
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
});

export default Eachh;

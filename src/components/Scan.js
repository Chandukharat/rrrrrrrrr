import React, {Component, useEffect, useRef} from 'react';
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
import BarcodeScanner from './Barcode';

const Scan = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  // const [selectedValu, setSelectedValu] = useState('null');
  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const [selectedValue, setSelectedValue] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownValues = [
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelect = value => {
    setSelectedValue(value);
    setDropdownOpen(false);
  };

  return (
    <ScrollView
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      scrollEventThrottle={16}>
      <ImageBackground
        source={require('../assests/images/ShadowHead.png')}
        style={{flex: 1, height: 216, flexDirection: 'row'}}>
        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
          }}>
          <Image
            style={styles.imageContainer}
            source={require('../assests/images/Reliance.png')}
          />

          <Text style={styles.TxtColor}>Physical Inventory !</Text>
        </View>

        <View style={{marginLeft: 20, marginTop: 40}}>
          <Image source={require('../assests/images/RedLines.png')} />
        </View>
      </ImageBackground>

      <View style={styles.container}>
        <View style={styles.row}>
          <Text>PI Doc Noc</Text>
          <Text>12102</Text>
          <Text>{date + '/' + month + '/' + year}</Text>
        </View>
        <View style={styles.row}>
          <Text>Storage Bin :</Text>
          <View style={{marginBottom: 20, marginLeft: '22%'}}>
            <TouchableOpacity
              onPress={toggleDropdown}
              style={{borderWidth: 1, borderColor: 'black', width: 100}}>
              <Text>{selectedValue || 'Select'}</Text>
            </TouchableOpacity>
            {dropdownOpen && (
              <View style={{borderWidth: 1, borderColor: 'black'}}>
                {dropdownValues.map(item => (
                  <TouchableOpacity
                    key={item.value}
                    onPress={() => handleSelect(item.value)}
                    style={{padding: 10}}>
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
        <View style={styles.row}>
          <BarcodeScanner />
          <Text>Plant : </Text>
          <View
            style={{
              marginBottom: 20,
              marginLeft: '30%',
              height: 20,
              borderColor: 'black',
              borderWidth: 1,
            }}>
            <Text style={{color: 'black'}}>chandu</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text>Article :</Text>
          <View>
            <TouchableOpacity
              onPress={toggleDropdown}
              style={{
                borderWidth: 1,
                borderColor: 'black',
                marginBottom: 20,
                marginLeft: '50%',
              }}>
              <Text>{selectedValue || 'Select'}</Text>
            </TouchableOpacity>
            {dropdownOpen && (
              <View style={{borderWidth: 1, borderColor: 'black'}}>
                {dropdownValues.map(item => (
                  <TouchableOpacity
                    key={item.value}
                    onPress={() => handleSelect(item.value)}
                    style={{padding: 10}}>
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        <View style={styles.row}>
          <Text>Sloc :</Text>
          <View style={{marginBottom: 20, marginLeft: '35%'}}>
            <TouchableOpacity
              onPress={toggleDropdown}
              style={{borderWidth: 1, borderColor: 'black', width: 100}}>
              <Text>{selectedValue || 'Select'}</Text>
            </TouchableOpacity>
            {dropdownOpen && (
              <View style={{borderWidth: 1, borderColor: 'black', width: 100}}>
                {dropdownValues.map(item => (
                  <TouchableOpacity
                    key={item.value}
                    onPress={() => handleSelect(item.value)}
                    style={{padding: 10}}>
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    width: '100%',
  },
  barcodeData: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 10,
    margin: 10,
  },
  MainContainer: {
    position: 'absolute',
  },
  container: {
    display: 'flex',

    marginLeft: 50,
    flexDirection: 'column',
  },

  imageContainer: {
    height: 62,
    width: 122,
  },
  TxtColor: {
    color: 'white',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 700,
  },
  row: {
    display: 'flex',

    flexDirection: 'row',
  },
  row2: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 30,
  },
  TypeBox: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'white',
    width: '90%',
    paddingHorizontal: 10,
    borderColor: '#9C9DB4',
    borderRadius: 24,
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HovTypeBox: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'blue',
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
  blackbtnColor: {
    color: '#939393',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    fontWeight: 700,
  },
  buttonHovered: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  pick: {
    width: 120,
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    backgroundColor: 'yellow',
  },
  ButtonLogIn: {
    marginTop: 50,
    margin: 20,
    width: '40%',
    height: 58,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 14,
    backgroundColor: '#3C467E',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 40,

    width: 150,
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
    elevation: 2,
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
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Scan;

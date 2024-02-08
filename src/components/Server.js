import React, { useEffect, useRef } from 'react';
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
  FlatList,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native';
import { useState } from 'react';


const data = [
  { key: '1', StorageType: '123456789', StorageBin: '9876543211' },
  { key: '2', StorageType: '123456789', StorageBin: '9876543212' },
  { key: '3', StorageType: '123456789', StorageBin: '9876543213' },
  { key: '11', StorageType: '123456789', StorageBin: '9876543214' },
  { key: '21', StorageType: '123456789', StorageBin: '9876543215' },
  { key: '31', StorageType: '123456789', StorageBin: '9876543216' },
  { key: '12', StorageType: '123456789', StorageBin: '9876543217' },
  { key: '22', StorageType: '123456789', StorageBin: '9876543218' },
  { key: '32', StorageType: '123456789', StorageBin: '9876543219' },
  { key: '13', StorageType: '123456789', StorageBin: '9876543291' },
  { key: '23', StorageType: '123456789', StorageBin: '9876543281' },
  { key: '33', StorageType: '123456789', StorageBin: '9876543271' },
  { key: '14', StorageType: '123456789', StorageBin: '9876543261' },
  { key: '24', StorageType: '123456789', StorageBin: '9876543251' },
  { key: '34', StorageType: '123456789', StorageBin: '9876543241' },
  { key: '114', StorageType: '123456789', StorageBin: '9876543231' },
  { key: '214', StorageType: '123456789', StorageBin: '9876543221' },
  { key: '314', StorageType: '123456789', StorageBin: '9876543211' },
  { key: '12e', StorageType: '123456789', StorageBin: '9876543121' },
  { key: '22e', StorageType: '123456789', StorageBin: '9876543221' },
  { key: '32e', StorageType: '123456789', StorageBin: '9876543321' },
  { key: '13e', StorageType: '123456789', StorageBin: '9876544321' },
  { key: '23d', StorageType: '123456789', StorageBin: '9876545321' },
  { key: '33d', StorageType: '123456789', StorageBin: '9876546321' },
  { key: '1w3e', StorageType: '123456789', StorageBin: '9876547321' },
  { key: '23wd', StorageType: '123456789', StorageBin: '9876548321' },
  { key: '3w3d', StorageType: '123456789', StorageBin: '9876549321' },
];







const Server = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };


  console.log(inputValue.length)

  const StorageBin = data.map(item => item.StorageBin);
  console.log(StorageBin);

  if (inputValue.length == 10) { check()}

  function check(){

    let found = false;
    for (let i = 0; i < StorageBin.length; i++) {
      if (StorageBin[i] === inputValue) {
        found = true;
        break;
      }
    }
  
    if (found) {
      
        navigation.navigate('Parent');
        console.log(inputValue);
      
    } else {
      console.log(`Value ${inputValue} not found in the array.`);
    }
  
  }
  
  // && inputValue === data.StorageBin
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assests/images/BlueHead.png')}
        style={{ flex: 1, height: 160 }}>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
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
       
              marginLeft: 310,
            }}
          // onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.opt}
              source={require('../assests/images/opt.png')}
            />
          </TouchableOpacity>
         
        </View>
      </ImageBackground>



      <TextInput style={styles.SearchBox} onChangeText={handleInputChange}
        value={inputValue} placeholder="Scan Storage Bin" placeholderTextColor="white" ref={inputRef} />




      <ScrollView contentContainerStyle={styles.scrollContent}>

        {data.map(item => (
          <View key={item.key} style={styles.arrContainer}>
            <TouchableOpacity>
              <View style={styles.input}>
                <Text>'Storage Type':{item.StorageType}</Text>
                <Text>'Storage Bin':{item.StorageBin}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}




      </ScrollView>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
      {/* <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View onStartShouldSetResponder={() => setModalVisible(false)}>
              <Image
                style={{ marginLeft: '80%' }}
                source={require('../assests/icons/Close.png')}
              />
            </View>
            <View
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={isHovered ? styles.HovTypeBox : styles.TypeBox}
                onHoverIn={handleHover}
                onHoverOut={handleHover}
                onPress={() => navigation.navigate('Eachh')}>
                <Text style={styles.blackbtnColor}>EACH TYPE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={isHovered ? styles.HovTypeBox : styles.TypeBox}
                onHoverIn={handleHover}
                onHoverOut={handleHover}>
                <Text style={styles.blackbtnColor}>QUANTITY TYPE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal> */}


    </View>
  );
};

const styles = StyleSheet.create({

  inputContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 40,
  },
  inputText: {
    fontSize: 16,
  },
  MainContainer: {
    position: 'absolute',
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  imageContainer: {
    height: 16,
    width: 22,
  },
  opt: {
    height: 17,
    width: 30,
  },
  TxtColor: {
    color: 'white',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 700,
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
  texts: {
    fontWeight: 500,
    fontSize: 16,
    height: 23,
  },

  SearchBox: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'blue',
    width: '90%',
    marginBottom: 10,
    paddingHorizontal: 10,
    marginLeft: '5%',
    borderRadius: 10,

    marginTop: 170,


  },
  SearchBtn: {
    marginLeft: 190,
  },
  btnColor: {
    color: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  button: {
    backgroundColor: 'blue',
    padding: 15,

    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
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
      Platform.OS === 'ios' ? { width: 0, height: 2 } : { width: 0, height: 8 },
    shadowOpacity: Platform.OS === 'ios' ? 0.5 : 4,
    shadowRadius: Platform.OS === 'ios' ? 2 : 16,
    elevation: 2,
  },
  contain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 40,
    marginTop: 60,
  },
  input: {
    width: '100%',
    padding: '1%',
    marginBottom: 10,

  },
  FilterBtn: {
    marginTop: 20,
    shadowColor: '#000',

    shadowOffset:
      Platform.OS === 'ios' ? { width: 0, height: 2 } : { width: 0, height: 8 },
    shadowOpacity: Platform.OS === 'ios' ? 0.5 : 4,
    shadowRadius: Platform.OS === 'ios' ? 2 : 16,
  },

  // arrContainer: {
  //   marginLeft: 20,
  //   marginRight: 20,
  // },
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
  arrContainer: {
    marginLeft: 20,
    marginRight: 20,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',

    margin: 2,

  },
});

export default Server;

import React, { Component } from 'react';
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
  Animated,
} from 'react-native';
import { useState } from 'react';
const data = [
  { key: '1', title: 'Item 1' },
  { key: '2', title: 'Item 2' },
  { key: '3', title: 'Item 3' },
  { key: '4', title: 'Item 1' },
  { key: '5', title: 'Item 2' },
  { key: '6', title: 'Item 3' },
  { key: '7', title: 'Item 1' },
  { key: '8', title: 'Item 2' },
  { key: '9', title: 'Item 3' },
];
const keyExtractor = item => item.key;
function RenderIt({ item }) {
  return (
    <View key={item.key} style={styles.arrContainer}>
      <View style={styles.input}>
        <Text>{item.title}</Text>
      </View>
    </View>
  );
}

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [Change, setChange] = useState(true);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const handleHover = () => {
    setIsHovered(!isHovered);

    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate('Eachh', { myProp: 'Each' });
    }, 500);
  };
  const handleHover2 = () => {
    setIsHovered2(!isHovered2);

    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate('Eachh', { myProp: 'Quantity' });
    }, 400);
  };

  const handle = () => {
    setChange(!Change);
  };

  setTimeout(() => {
    setIsHovered(false);
    setIsHovered2(false);
  }, 1000);
  const buttonStyle = isHovered ? styles.buttonHovered : styles.TypeBox;

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
        </ImageBackground>

        {/* <ImageBackground
          source={require('../assests/images/ShadowHead.png')}
          style={{flex: 1, height: 216}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
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
          </View>

          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TextInput style={styles.SearchBox} placeholder="Search">
              {' '}
              <Image
                style={styles.SearchBtn}
                source={require('../assests/icons/Vector.png')}
              />
            </TextInput>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image
                style={styles.FilterBtn}
                source={require('../assests/icons/Filter.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.contain}>
            <View style={Change ? styles.ButtonLogIn : styles.blank}>
              <Text
                onPress={handle}
                style={Change ? styles.btnColor : styles.blankbtnColor}>
                New
              </Text>
            </View>

            <View style={!Change ? styles.ButtonLogIn : styles.blank}>
              <Text
                onPress={handle}
                style={!Change ? styles.btnColor : styles.blankbtnColor}>
                chandu
              </Text>
            </View>
          </View>
        </ImageBackground> */}

        {/* <FlatList
                        data={data}
                        renderItem={RenderIt}
                        keyExtractor={keyExtractor}
                    /> */}

        {/* {data.map(item => (
          <View key={item.key} style={styles.arrContainer}>
            <View style={styles.input}>
              <Text>{item.title}</Text>
            </View>
          </View>
        ))} */}

        {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:100}}>
          <TouchableOpacity
            style={isHovered ? styles.HovTypeBox : styles.TypeBox}
            onPress={handleHover}>
            <Text style={styles.blackbtnColor}>EACH TYPE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={isHovered2 ? styles.HovTypeBox : styles.TypeBox}
            onPress={handleHover2}>
            <Text style={styles.blackbtnColor}>QUANTITY TYPE</Text>
          </TouchableOpacity>
        </View> */}

        <View style={{marginTop:160}}>
          <View style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row' }}>
            <View>
              <Text style={{ margin: 10 }} >Storage type</Text>
              <TextInput style={styles.SearchBoxx} ></TextInput>
            </View>
            <View>
              <Text style={{ margin: 10 }}>Storage bin</Text>
              <TextInput style={styles.SearchBoxx} ></TextInput>
            </View>
          </View>
          <View style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row' }}>
            <View>
              <Text style={{ margin: 10 }}>Article Number</Text>
              <TextInput style={styles.SearchBoxx} ></TextInput>
            </View>
            <View>
              <Text style={{ margin: 10 }}>Pi number</Text>
              <TextInput style={styles.SearchBoxx} ></TextInput>
            </View>
          </View>
          <View style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row' }}>
            <View>
              <Text style={{ margin: 10 }}>Plant </Text>
              <TextInput style={styles.SearchBoxx} ></TextInput>
            </View>
            <View>
              <Text style={{ margin: 10 }}>Quantity</Text>
              <TextInput style={styles.SearchBoxx} ></TextInput>
            </View>
          </View>
          <View>
            <Text  style={{ marginLeft: 25 }}>Article description </Text>
           
            <TextInput style={styles.SearchBoxxx} placeholder="Scan EAN Number" placeholderTextColor="white" />
          </View>
          <View style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row' }}>
            <View>
              <Text style={{ margin: 10 }}>Batch </Text>
              <TextInput style={styles.SearchBoxx} ></TextInput>
            </View>
            <View>
              <Text style={{ margin: 10 }}>SLED</Text>
              <TextInput style={styles.SearchBoxx} ></TextInput>
            </View>

          </View>

          <View>
            <TextInput style={styles.SearchBox} placeholder="Scan EAN Number" placeholderTextColor="white" />
          </View>

        </View>
        <View >
          <View style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row' }}>
            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Button</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Button</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Button</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Button</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
   

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
                  style={{ marginLeft: '80%' }}
                  source={require('../assests/icons/Close.png')}
                />
              </View>
            </TouchableOpacity>

            <View
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
              <TouchableOpacity
                style={isHovered ? styles.HovTypeBox : styles.TypeBox}
                onPress={handleHover}>
                <Text style={styles.blackbtnColor}>EACH TYPE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={isHovered2 ? styles.HovTypeBox : styles.TypeBox}
                onPress={handleHover2}>
                <Text style={styles.blackbtnColor}>QUANTITY TYPE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* {Change ? (
        <Animated.View style={[styles.buttonContainer]}>
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <ImageBackground
              source={require('../assests/icons/Ellipse.png')}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                width: 50,
                borderRadius: 10,
              }}>
              <Image
                style={{marginLeft: '10%', marginTop: '10%'}}
                source={require('../assests/icons/New.png')}
              />
            </ImageBackground>
          </TouchableOpacity>
        </Animated.View>
      ) : (
        <View></View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
  SearchBox: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'blue',
    width: '90%',
    marginBottom: 29,
    paddingHorizontal: 10,
    marginLeft: '5%',
    borderRadius: 10,
    marginTop:30},


    SearchBoxxx: {
      height: 30,
      borderColor: 'black',
      borderWidth: 1,
      backgroundColor: 'white',
      width: '90%',
  margin: 10,
      paddingHorizontal: 10,
      marginLeft: '5%',
      borderRadius: 10,
      },

  buttons: {

    position: 'absolute',
    bottom: 0,
    width: '100%',


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


  SearchBoxx: {
    borderColor: 'black',
    borderWidth: 1,
    height: 35,
    borderRadius: 7,
 
    width: 150,
    color:"black"
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
    fontSize: 18
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
      Platform.OS === 'ios' ? { width: 0, height: 2 } : { width: 0, height: 8 },
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
      Platform.OS === 'ios' ? { width: 0, height: 2 } : { width: 0, height: 8 },
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
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderWidth: 1,
    borderColor: 'white',
    bottom: 0,
    width: 210,
    height: 80,
    

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomeScreen;

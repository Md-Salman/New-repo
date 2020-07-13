import React,{useState} from 'react'
import { View, Text, StyleSheet, Image,FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import Constants from 'expo-constants'
import {singlePicMode} from '../appData'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export default SinglePicModeScreen = () => {
    let [isLoaded] = useFonts({ 'pubg': require('../assets/fonts/pubg.ttf'), });
    let [keys, setKeys] = useState(singlePicMode[0].keys)
    let [answer, setAnswer] = useState([])
    let [modalVisible, setModalVisible] = useState(false)
    let [index, setIndex] = useState(0)
    let [item, setItem] = useState(' ')
    
    const keyTap = (item, index) => {
      setIndex(index)
      setItem(item)
      keys.splice(index, 1, ' ');
      answer.push(item)
      setKeys([...keys])
      setAnswer([...answer])
    }

    const backSapce = () => {
      const key = answer.pop()
      keys.splice(index, 1, key )
      setKeys([...keys])
      setAnswer([...answer])
    }

    const checkAnswer = (answer) => {
      if(answer === singlePicMode[0].answer) {
        alert('Answer is Right')
      } else {
        alert('Answer is Wrong')
      }
    }

    if (!isLoaded) {
      return <AppLoading />;
    } else {
      return(
        <View style={styles.container}>
  
        {/* Answer Card */}
        <Modal 
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        >
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={()=> setModalVisible(!modalVisible)}>
                <View style={styles.childContainer}>
                    <Text style={[styles.answerText, {paddingBottom: 30,}]}>{singlePicMode[0].answer}</Text>
                    <AntDesign name="arrowdown" size={36} color="white" />
                </View>
            </TouchableWithoutFeedback>
          </View>
      </Modal>
  
        {/* Question and Pic  */}
          <Text style={styles.questinText}>{singlePicMode[0].questioin}</Text>
          <Image source={singlePicMode[0].pic} style={styles.image} />
  
          {/* Answer Container  */}
          {/* <View style={styles.keysContainer}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={keys}
              renderItem={({item, index}) => (
                <TouchableOpacity onPress={()=> keyTap(item, index)}>
                    <Text style={styles.keyText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View> */}
          
  
          {/* Answer Icon Container */}
          <View style={styles.answerIconContainer}>
            <TouchableOpacity onPress={()=> setModalVisible(!modalVisible)} >
              <Entypo name="eye" size={36} color="white" style={styles.iconStyle}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> checkAnswer(answer)} >
              <Ionicons name="md-checkmark" size={36} color="white" />
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={()=> backSapce()} >
              <Ionicons name="md-arrow-round-back" size={36} color="white" style={styles.iconStyle} />
            </TouchableWithoutFeedback>
          </View>
    
          {/* Keys Container */}
          <View style={styles.keysContainer}>
            <FlatList
              numColumns={6}
              showsHorizontalScrollIndicator={false}
              data={keys}
              renderItem={({item, index}) => (
                <TouchableOpacity onPress={()=> keyTap(item, index)}>
                  <Text style={styles.keyText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      )
    }


    
}

const pubgYellow = '#fcd225'
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'black',
      marginTop: Constants.statusBarHeight,
  },
  questinText: {
    color: 'white',
    fontSize: 24,
    paddingTop: 30,
    textAlign: 'center',
    flex: 1,
    borderColor: 'white',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: null,
    aspectRatio: 16/9,
    borderWidth: 1,
    borderColor: 'white'
  },
 
  // answerText: {
  //   color: pubgYellow,
  //   fontSize: 50,
  //   fontFamily: 'pubg',
  // },
  answerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconStyle:{
    paddingHorizontal: 30,
    paddingBottom: 5,
    flexWrap: 'wrap'
  },
  keysContainer: {
    borderWidth: 1,
    borderColor: 'white',

  },
  // singleKeyContainer: {
    
  // },
  keyText: {
    fontSize: 28,
    color: 'white',
    borderColor: 'white',
    width: 50,
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    margin: 5,
    borderRadius: 8,
    borderBottomWidth: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  childContainer: {
    borderWidth: 1,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'black',
    borderColor: 'white',
  },
});

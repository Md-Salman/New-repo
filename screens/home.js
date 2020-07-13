
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity  } from 'react-native';
import {singlePicMode} from '../appData'
import Constants from 'expo-constants';


export default HomeScreen = ({navigation}) => {

  return (
    // Container
    <View style={styles.container}>

    {/* Singel Pic Mode Container */}
      <View style={[styles.childContainer, {marginTop: Constants.statusBarHeight}]}>
        <TouchableOpacity style={{flex: 1}} onPress={()=> navigation.navigate('singlePicModeScreen')}>
          <Image source={require('../assets/gun.png')} style={styles.Image}/>
        </TouchableOpacity>

        {/* Level Row */}
        <View style={{height: 70}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={singlePicMode}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.levelBoxContainer} onPress={()=> alert(item.id)}>
                <View style={styles.levelContainer}>
                  <Text style={styles.levelText}>{item.id}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      
      {/* Double Pic Mode Container */}
      <View style={styles.childContainer}>
      <TouchableOpacity style={{flex: 1}} onPress={()=> navigation.navigate('doublePicModeScreen')}>
        <Image source={require('../assets/chickenDinner.png')} style={styles.Image}/>
      </TouchableOpacity>

        {/* Level Row */}
        <View style={{height: 70}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={singlePicMode}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.levelBoxContainer} onPress={()=> alert(item.id)}>
                <View style={styles.levelContainer}>
                  <Text style={styles.levelText}>{item.id}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  childContainer: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: pubgYellow,
    backgroundColor: 'black',
    letterSpacing: 10,
  },
  Image: {
    width: '100%',
    flex: 1,
  },
  
  doubleImage: {
    width: '100%',
    height: '100%'
  },
  levelBoxContainer: {
    justifyContent: 'center',
    padding: 8,
  },
  levelContainer: {
    width: 55,
    height: 55,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  levelText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  text:{
    fontSize: 32,
  } 
});
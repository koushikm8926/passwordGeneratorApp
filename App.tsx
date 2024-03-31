//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Yup from 'yup'


const passwordSchema= Yup.object().shape({
  passwordLength: Yup.number()
  .min(4,"should be minimum of 4 character")
  .max(16,"should be maximum of 16 character")
  .required("length is required")
})

// create a component
const MyComponent = () => {

  const [password,setPassword]= useState('')
  const [isPassGenerated,setIsPassGenerated]=useState(false)
  const [lowercase,setLowerCase]= useState(true)
  const [uppercase,setUpperCase]= useState(false)
  const [symbols,setSymbols]= useState(false)
  const [numbers,setNumbers]=useState(false);

  const generatePasswordString=(passwordLength:number)=>{
    //
    let characterList = '';
    const upperCaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars="abcdefghijklmnopqrstuvwxyz";
    const digitChars= '01234567789';
    const specialChars= "!@#$%^&*()_+";

    if(uppercase){
      characterList += uppercase;
    }
    if(lowercase){
      characterList += lowercase;
    }
    if(symbols){
      characterList += symbols;
    }
    if(symbols){
      characterList += symbols;
    }
    if(numbers){
      characterList += numbers;
    }
    const passwordResult = createPassword(characterList,passwordLength)
    setPassword(passwordResult)
    setIsPassGenerated(true)
  }

  const createPassword=(character:string,passwordLength:number)=>{
    //
    let result =''
    for (let index = 1; index <passwordLength; index++) {
     const characterIndex= Math.round(Math.random()*character.length)
    result += character.charAt(characterIndex)
    }
    return result
  }
  const resetPasswordState=()=>{
    //
    setPassword(" ");
    setIsPassGenerated(false);
    setLowerCase(true);
    setSymbols(false);
    setUpperCase(false);
    setNumbers(false);

  }

  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default MyComponent;

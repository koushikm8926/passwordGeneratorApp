//import liraries
import React, { Component } from 'react';
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

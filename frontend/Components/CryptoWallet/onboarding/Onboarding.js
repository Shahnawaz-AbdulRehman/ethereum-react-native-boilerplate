import React, { useState, createRef, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";

import Button from "./components/Button";

import {
  useMoralis,
} from "react-moralis";


const Onboarding = ({ navigation }) => {
  const {
    isAuthenticated
  } = useMoralis();


  return (
    <SafeAreaView style={styles.mainBody}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>coinbase</Text>
        <Text style={styles.logoSubtext}>Wallet</Text>
      </View>
      <View style={styles.subTextContainer}>
        <Text style={styles.subText}>Your ethereum wallet boilerplate</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          navigation={navigation} 
          buttonName={'Create new wallet'} 
          action={() => navigation.push('CreateUsername')}
        />
        <TouchableOpacity 
          style={{marginTop: 30}} 
          onPress={() => navigation.push('SignIn')}>
            <Text style={styles.importWalletText}>Import existing wallet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Onboarding;


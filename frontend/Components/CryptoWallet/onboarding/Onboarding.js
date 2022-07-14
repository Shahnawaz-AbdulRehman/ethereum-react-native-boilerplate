import React, { useState, createRef, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";


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
        <Text style={styles.logoText}>coinbasee</Text>
        <Text style={styles.logoSubtext}>Wallet</Text>
      </View>
    </SafeAreaView>
  );
};
export default Onboarding;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
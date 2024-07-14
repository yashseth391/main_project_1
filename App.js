import { Image } from 'react-native';
import { Alert, Dimensions, Platform, SafeAreaView, StyleSheet, Text, Touchable, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './App/screens/WelcomeScreen';
import ViewImageScreen from './App/screens/ViewImageScreen';
export default function App() {

  return (
    <ViewImageScreen />

  );
}

const styles = StyleSheet.create({

});

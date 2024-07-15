
import { Alert, Dimensions, Platform, SafeAreaView, StyleSheet, Text, Touchable, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import AppText from './App/components/AppText';
import { AntDesign } from '@expo/vector-icons';
import Button from './App/components/Button';
export default function App() {

  return (
    <View style={styles.header}>
      <Button Hello={'Login'} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',


  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    padding: 0,
    margin: 100,
  }
});

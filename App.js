import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, Touchable, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

export default function App() {
  let x = 1;
  console.log("hello");
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

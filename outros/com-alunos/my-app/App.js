import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeScreenNavigationContainer } from 'react-native-screens';

export default function App() {
  return (
    <NativeScreenNavigationContainer>
      <ScreenStack.Navigator>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </ScreenStack.Navigator>
    </NativeScreenNavigationContainer>
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

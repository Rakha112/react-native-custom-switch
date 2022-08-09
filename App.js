import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import CustomSwitch from './src/components/CustomSwitch';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Custom Cursor</Text>
      <View style={styles.switchContainer}>
        <CustomSwitch activeColor={'#FFA901'} inActiveColor={'#F2F5F7'} />
      </View>
      <View style={styles.switchContainer}>
        <CustomSwitch activeColor={'#92d7ef'} inActiveColor={'#F2F5F7'} />
      </View>
      <View style={styles.switchContainer}>
        <CustomSwitch activeColor={'#e3e5b3'} inActiveColor={'#F2F5F7'} />
      </View>
      <View style={styles.switchContainer}>
        <CustomSwitch activeColor={'#107980'} inActiveColor={'#F2F5F7'} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchContainer: {
    marginVertical: 10,
  },
});

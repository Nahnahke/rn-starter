import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello world!</Text>
      <Button 
      onPress={() => navigation.navigate('Components')}
      title="Go to components demo" 
      />
      <Button 
      onPress={() => navigation.navigate ('List')}
        title="Go to List demo"
        />
      <Button 
      onPress={() => navigation.navigate ('ImageS')}
        title="Go to ImageScreen demo"
        />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

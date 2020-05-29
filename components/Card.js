import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={styles.card}>
      <Text>Select a number</Text>
      <TextInput />
      <View style={styles.buttonContainer}>
        <Button title="Reset" onPress={() => {}} />
        <Button title="Confirm" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});

export default Card;

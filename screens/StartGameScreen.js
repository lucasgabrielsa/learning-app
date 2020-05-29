import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/color";
import Input from "../components/Input";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <Input
          style={styles.input}
          keyboardType="number-pad"
          maxLength={2}
          autoCorrect={false}
          autoCapitalize="none"
          blurOnSubmit
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button title="Reset" onPress={() => {}} color={Colors.accent} />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              style={styles.buttonStyle}
              title="Confirm"
              onPress={() => {}}
              color={Colors.primary}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  buttonStyle: {
    width: "45%",
  },
  input: {
    width: 100,
    textAlign: "center",
  },
});

export default StartGameScreen;

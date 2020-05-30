import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import Colors from "../constants/color";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoise)
  );

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card style={styles.buttonContainer}>
        <View style={styles.buttonStyle}>
          <Button title="LOWER" color={Colors.primary} onPress={() => {}} />
        </View>
        <View style={styles.buttonStyle}>
          <Button title="GREATER" color={Colors.primary} onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
    height: 80,
  },
  buttonStyle: {
    width: "45%",
  },
});

export default GameScreen;

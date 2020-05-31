import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over</Text>
      <Text>User Number:{props.userNumber}</Text>
      <Text>Rounds Needed:{props.rounds}</Text>
      <Button title="NEW GAME" onPress={props.onConfigureNewGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;

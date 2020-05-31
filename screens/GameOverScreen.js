import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over</BodyText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/original.png")}
          resizeMode="stretch"
        />
      </View>
      <BodyText>User Number: {props.userNumber}</BodyText>
      <BodyText>Rounds Needed: {props.rounds}</BodyText>
      <View style={styles.buttonContainer}>
        <Button title="NEW GAME" onPress={props.onConfigureNewGame} />
      </View>
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
  buttonContainer: {
    marginTop: 10,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;

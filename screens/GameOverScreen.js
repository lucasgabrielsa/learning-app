import React from "react";
import { View, StyleSheet, Button, Image, Text } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/color";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over</TitleText>
      <View style={styles.imageContainer}>
        {/* <Image
          style={styles.image}
          source={require("../assets/original.png")}
          resizeMode="stretch"
        /> */}
        <Image
          fadeDuration={500}
          style={styles.image}
          source={{
            uri:
              "https://www.geeky-gadgets.com/wp-content/uploads/2010/10/Everest-Summit.jpg",
          }}
          resizeMode="stretch"
        />
      </View>
      <BodyText style={styles.resultText}>
        Your phone needed <Text style={styles.highlight}>{props.rounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </BodyText>
      <View style={styles.buttonContainer}>
        <MainButton onPress={props.onConfigureNewGame}>NEW GAME</MainButton>
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
  resultText: {
    textAlign: "center",
    fontSize: 22,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;

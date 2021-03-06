import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber();
  };

  const startGameHander = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandle = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHander} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoise={userNumber} onGameOver={gameOverHandle} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        onConfigureNewGame={configureNewGameHandler}
        userNumber={userNumber}
        rounds={guessRounds}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

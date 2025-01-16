import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

const App = () => {
  const [input, setInput] = useState("");

  const handlePress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // eval function used to calculate the expression
    } catch (e) {
      setInput("Error");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{input}</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <Button mode="outlined" onPress={() => handlePress("1")}>
            1
          </Button>
          <Button mode="outlined" onPress={() => handlePress("2")}>
            2
          </Button>
          <Button mode="outlined" onPress={() => handlePress("3")}>
            3
          </Button>
          <Button mode="outlined" onPress={() => handlePress("+")}>
            +
          </Button>
        </View>
        <View style={styles.row}>
          <Button mode="outlined" onPress={() => handlePress("4")}>
            4
          </Button>
          <Button mode="outlined" onPress={() => handlePress("5")}>
            5
          </Button>
          <Button mode="outlined" onPress={() => handlePress("6")}>
            6
          </Button>
          <Button mode="outlined" onPress={() => handlePress("-")}>
            -
          </Button>
        </View>
        <View style={styles.row}>
          <Button mode="outlined" onPress={() => handlePress("7")}>
            7
          </Button>
          <Button mode="outlined" onPress={() => handlePress("8")}>
            8
          </Button>
          <Button mode="outlined" onPress={() => handlePress("9")}>
            9
          </Button>
          <Button mode="outlined" onPress={() => handlePress("*")}>
            *
          </Button>
        </View>
        <View style={styles.row}>
          <Button mode="outlined" onPress={() => handlePress("0")}>
            0
          </Button>
          <Button mode="outlined" onPress={handleClear}>
            C
          </Button>
          <Button
            mode="contained"
            style={styles.equalsButton}
            onPress={handleCalculate}
          >
            =
          </Button>
          <Button mode="outlined" onPress={() => handlePress("/")}>
            /
          </Button>
        </View>
      </View>
      <Text style={styles.footer}>Calc by Siddhesh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  result: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonsContainer: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  equalsButton: {
    backgroundColor: "green",
    color: "white",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    fontSize: 14,
    color: "#888",
  },
});

export default App;

/** @format */

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC, useEffect, useState } from "react";
import { Button, SafeAreaView, TextInput } from "react-native";
import { style } from "../styles/style";

type routesType = {
  Lots: {
    lots: number;
  };
};

const Home: FC = () => {
  const [lots, setLots] = useState<number>(0);

  const navigation = useNavigation<NativeStackNavigationProp<routesType>>();

  return (
    <SafeAreaView testID="home" style={style.container}>
      <TextInput
        testID="txt"
        placeholder="Enter number of Parking Lots"
        placeholderTextColor={"grey"}
        keyboardType="numeric"
        onChangeText={(text) => setLots(Number(text))}
        style={style.input}
      />
      <Button
        testID="btn"
        disabled={lots == 0}
        title="Submit"
        onPress={() => {
          navigation.navigate("Lots", { lots: lots });
        }}
        color="orange"
      />
    </SafeAreaView>
  );
};

export default Home;

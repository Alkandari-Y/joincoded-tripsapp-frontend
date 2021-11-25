import {
  Button,
  Center,
  extendTheme,
  Heading,
  HStack,
  Switch,
  Text,
  useColorMode,
  VStack,
  Image,
} from "native-base";
import React from "react";
import { View, Dimensions } from "react-native";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const Home = ({ navigation }) => {
  return (
    <View>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        height={Dimensions.get("window").height}
      >
        <VStack space={5} alignItems="center">
          <Image
            size="200"
            source={{
              uri: "https://cdn-icons.flaticon.com/png/512/670/premium/670016.png?token=exp=1637848499~hmac=5ce434902221d934b85a6463ac66185b",
            }}
            alt="WebsiteLogo"
          />
          <Heading size="lg">Welcome to Voyager</Heading>
          <ToggleDarkMode />
          <Button
            onPress={() => {
              navigation.navigate("TripList");
            }}
            variant="outline"
          >
            Chart your course now!
          </Button>
        </VStack>
      </Center>
    </View>
  );
};

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

export default Home;

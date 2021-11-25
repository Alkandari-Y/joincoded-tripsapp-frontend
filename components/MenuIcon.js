//React
import React from "react";
//React Native
import { Pressable } from "react-native";
//Native Base
import {
  Actionsheet,
  Box,
  Center,
  useDisclose,
  Button,
  Heading,
} from "native-base";
//React Native Vector Icons
import Icon from "react-native-vector-icons/AntDesign";
//Mobx
import { observer } from "mobx-react";
//Store Imports
import authStore from "../stores/authStore";
import profileStore from "../stores/profileStore";

const MenuIcon = ({ navigation }) => {
  const { isOpen, onOpen, onClose } = useDisclose();

  const openAuthPage = (pageName) => {
    navigation.navigate(pageName);
  };

  const handleUserProfileNav = () => {
    if (!profileStore.userProfile)
      profileStore.setUserProfile(authStore.user._id);

    navigation.navigate("Profile", { profile: profileStore.userProfile });
  };

  return (
    <Center>
      <Pressable onPress={onOpen} style={{ marginRight: 15 }}>
        <Icon name="setting" color="black" size={30} />
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" px={4} justifyContent="center">
            {!authStore.user ? (
              <>
                <Actionsheet.Item onPress={() => openAuthPage("Signin")}>
                  Signin
                </Actionsheet.Item>

                <Actionsheet.Item onPress={() => openAuthPage("Signup")}>
                  Signup
                </Actionsheet.Item>
              </>
            ) : (
              <>
                {authStore.user && (
                  <Actionsheet.Item>
                    <Heading color="black">
                      Greetings {authStore.user.username}
                    </Heading>
                  </Actionsheet.Item>
                )}

                <Actionsheet.Item>
                  <Button
                    onPress={() => navigation.navigate("CreateTrip")}
                    variant="outline"
                  >
                    Create Trip
                  </Button>
                </Actionsheet.Item>

                <Actionsheet.Item>
                  <Button onPress={handleUserProfileNav} variant="outline">
                    View Profile
                  </Button>
                </Actionsheet.Item>

                <Actionsheet.Item>
                  <Button
                    onPress={() => authStore.signOut()}
                    variant="outline"
                    colorScheme="secondary"
                  >
                    Logout
                  </Button>
                </Actionsheet.Item>
              </>
            )}
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
};

export default observer(MenuIcon);

import React from "react";
//Native Base
import { Heading, Image, HStack } from "native-base";
//Mobx
import { observer } from "mobx-react";
//Axios
import { baseUrl } from "../../stores/baseUrl";
import styles from "./styles";

const UserAvatar = ({ image, username }) => {
  return (
    <HStack>
      <Image
        style={styles.profilePic}
        source={{ uri: baseUrl + image }}
        // onPress={() => setShowModal(true)} //This doesn't even work
        alt="ProfilePicture"
      />
      <Heading size="xl" style={styles.username}>
        {username}
      </Heading>
    </HStack>
  );
};

export default observer(UserAvatar);

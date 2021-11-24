import React, { useState } from 'react'
//Native Base
import {
    Stack,
    Center,
    Heading,
    Avatar,
    Button,
    Modal,
    FormControl,
    Input,
} from "native-base"
  //Mobx
import { observer } from 'mobx-react'
//Axios
import { baseUrl } from '../../stores/baseUrl'
//
import UpdateImageModal from '../UpdateImageModal'
import { TouchableOpacity } from 'react-native-gesture-handler'

const UserAvatar = ({ image, username, profileId }) => {
    const [showModal, setShowModal] = useState(false)
    const [newImage, setNewImage] = useState({image: ""})

    console.log(image)
    return (
        <Stack direction="row" mb="2.5" m={2} mt="1.5" space={3}>
            <TouchableOpacity onPress={() => setShowModal(true)}>
                <Avatar
                    bg="purple.600"
                    alignSelf="center"
                    size="2xl"
                    source={{ uri: baseUrl + image }}
                    onPress={() => setShowModal(true)}
                />
            </TouchableOpacity>
            <Center m={4}>
                <Heading>{ username}</Heading>
            </Center>

            <UpdateImageModal
                showModal={showModal} setShowModal={setShowModal}
                newImage={newImage} setNewImage={setNewImage}
                typeOfUpdate={'profile'} profileId={ profileId }
            />

        </Stack>
    )
}

export default observer(UserAvatar)

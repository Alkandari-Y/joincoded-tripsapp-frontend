//React
import React from 'react'
//React Native
import { View, Pressable } from 'react-native'
//React Native Vector Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuIcon = () => {
    return (
        <Pressable onPress={() => {}} style={{marginRight: 15}}>
            <View>
            <Icon
                name="menu"
                color="menu"
                size={15}
            />
            </View>
        </Pressable>
    )
}

export default MenuIcon

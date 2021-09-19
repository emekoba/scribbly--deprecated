import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Modal, Text, Button, Image } from 'react-native'
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler'
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';


export default function Structure({ modal, setmodal }) {




    return (
        <View style={x.viewer}>

            <View style={x.topside}>
                < MaterialIcons
                    name="close"
                    size={25}
                    style={x.close_modal}
                    color="lightslategrey"
                    onPress={() => setmodal({ ...modal, isOpen: false })}
                />
            </View>

        </View>
    )

}


const x = StyleSheet.create({

    viewer: {

        flex: 1,
        backgroundColor: 'rgba(187, 196, 205, 0.438)',
    },

    close_modal: {

        padding: 15,
        paddingTop: 17
    },

    topside: {

        // borderWidth: 1,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'white'
    },

    bottomside: {

        marginTop: 0,
        margin: 6,
        flex: 1
    },

})
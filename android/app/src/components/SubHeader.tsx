import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const SubHeader = () => {
    return (
        <View style={styles.container}>
            <Feather name="map-pin" size={16} color="gray" />
            <View style={styles.subcontainer}>
                <Text style={styles.text}>Deliver to Your Location</Text>
                <SimpleLineIcons name="arrow-down" size={9} color="gray" />
            </View></View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fefff4',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        gap: 6
    },
    text: {
        color: 'gray',
        paddingVertical: 5,
        fontSize: 12,
        

    },
    subcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    }
})
export default SubHeader
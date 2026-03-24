import { View, TextInput, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
    return (
        <View>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#fffb2bfa', '#fffb00', '#fffb2bfa']}
                style={styles.container}>
                <View style={styles.inputBox}>
                    <View style={styles.row}>
                        <Ionicons name="search" size={20} color="#000" />
                        <TextInput placeholder='Search flipkart.in' placeholderTextColor='gray' />
                    </View>

                    <Ionicons name="scan-sharp" size={20} color="#000" />
                </View>

                <Ionicons name="mic-outline" size={20} color="#000" />
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        paddingBlockStart: 40,
    },

    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
        width: '90%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        elevation: 5,

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    }
})
export default Header
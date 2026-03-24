import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Brand = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Brands of the Day</Text>
                <View style={styles.row}>
                    <View style={styles.brands}>
                        <Image source={require('../assets/image9.png')}
                            style={styles.imgStyle} />
                        <Text  style={styles.brandTitle}>Min. 20% off | CaratLane Diamond Necklace</Text>
                    </View>
                    <View style={styles.brands}>
                        <Image source={require('../assets/brand2.png')}
                            style={styles.imgStyle} />
                        <Text style={styles.brandTitle}>Min. 50% off | Poedagar Men Watch</Text>
                    </View></View>
                <View style={styles.row}>
                    <View style={styles.brands}>
                        <Image source={require('../assets/brand1.png')}
                            style={styles.imgStyle} />
                        <Text style={styles.brandTitle}>Min. 40% off | Skechers male casual sneakers</Text>
                    </View>
                    <View style={styles.brands}>
                        <Image source={require('../assets/brand3.png')}
                            style={styles.imgStyle} />
                        <Text style={styles.brandTitle}>Min. 30% off | Nashwa By Olga Perfume</Text>
                    </View></View>

            </View></View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#ffff',
        borderTopWidth: 1,
        borderTopColor: '#dddddd',

    },
    imgStyle: {
        height: 150,
        width: '100%',
        borderRadius: 4
    },
    title: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        padding: 10,

    },
    innerContainer: {

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    brands: {
        width: '50%',
        padding: 10
    },
    brandTitle:{
        fontSize:12,
        marginTop:4
    }
})
export default Brand
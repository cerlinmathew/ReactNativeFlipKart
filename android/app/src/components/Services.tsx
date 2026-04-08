import { View, StyleSheet, ScrollView, Image, Text } from 'react-native'
import React from 'react'
import { RecentSearchData } from '../data/RecentSearchData'



const Services = () => {
    return (
        <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
           >
            <View style={styles.serviceContainer}>
                <View style={styles.row}>
                    <View style={styles.innerContainer}>
                        <Image source={require('../assets/flipkartPay.jpg')} style={styles.imgStyle} />
                        <Text style={styles.title}>Flipkart Pay</Text>
                    </View>
                    <View style={styles.innerContainer}>
                        <Image source={require('../assets/image.png')} style={styles.imgStyle} />
                        <Text style={styles.title}>Money Transfer</Text>
                    </View>

                </View>
                <View style={styles.row}>
                    <View style={styles.innerContainer}>
                        <Image source={require('../assets/image1.png')} style={styles.imgStyle} />
                        <Text style={styles.title}>Send Money</Text>
                    </View>
                    <View style={styles.innerContainer}>
                        <Image source={require('../assets/image2.png')} style={styles.imgStyle} />
                        <Text style={styles.title}>Scan QR Code</Text>
                    </View>

                </View>

            </View>
            {RecentSearchData.map(item => (
                <View key={item.id} style={styles.outerView}>
                    <Text style={styles.recentSearch}>{item.title}</Text>
                    <Image source={item.image}
                        style={styles.serviceImg} />
                </View>
            ))}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop: -30,
    backgroundColor: '#ffff',
},

  serviceContainer: {
    backgroundColor: '#ffff',
    borderRadius: 5,
    elevation: 5,
    marginRight: 10
},

    imgStyle: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    innerContainer: {
        padding: 10,
        alignItems: 'center',
        paddingTop: 15,
        justifyContent: 'space-between'

    },
    title: {
        fontSize: 12,
        color: 'black',
    
      
    },
    serviceImg: {
        width: '100%',
        height: 120

    },
outerView: {
    backgroundColor: '#ffff',
    paddingLeft: 5,
    borderRadius: 5,
    elevation: 5,
    padding: 5,
    width: 140,
    marginRight: 10
},
    recentSearch: {
        fontSize: 13,
        color: 'black',
        marginBottom: 8,
        textAlign:'center'
    }
})

export default Services
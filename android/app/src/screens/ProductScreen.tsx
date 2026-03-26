import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Share } from 'react-native'
import React from 'react'
import { getRating } from '../utils/helper';
import { ProductData } from '../data/productData';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../FlipKart/types/navigation';
import { showNotification } from '../utils/notification';

type RouteProps = RouteProp<RootStackParamList, 'Product'>;

const ProductScreen = () => {

    const route = useRoute<RouteProps>();
    const id = route.params?.id;

    const shareProduct = async (productId: number) => {
        const link = `myapp://product/${productId}`;

        const shareProduct = async (productId: number) => {
            const link = `myapp://product/${productId}`;

            await Share.share({
                message: `Product: ${link}`,
            });

            // Show notification
            showNotification('Shared!', 'Product link shared successfully');
        };
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Results</Text>
            <Text style={styles.tagline}>
                Price and other details vary based on product size and color
            </Text>

            {ProductData
                .filter(item => !id || item.id === id)
                .map(item => (
                    <View key={item.id} style={styles.productSection}>

                        <View style={styles.productImgSection}>
                            <Image style={styles.productImg} source={item.prodImg} />
                        </View>

                        <View style={styles.productDetailSection}>
                            <Text style={styles.sponsored}>Sponsored</Text>
                            <Text style={styles.productName}>{item.prodName}</Text>

                            <View style={styles.row}>
                                <Text style={styles.rating}>{item.rating}</Text>
                                {getRating(item.rating)}
                                <Text style={styles.ratingCount}>{item.ratingCount}</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.price}>₹ {item.discountPrice}</Text>
                                <Text style={styles.mrp}>M.R.P</Text>
                                <Text style={styles.crossout}>₹ {item.actualPrice}</Text>
                            </View>

                            <Text style={styles.cashback}>
                                Up to 5% cashback with Amazon Pay Credit card
                            </Text>

                            <Image
                                source={require('../assets/primelogo.png')}
                                style={styles.logo}
                            />

                            <Text style={styles.cashback}>
                                FREE DELIVERY by {item.deliveryBy}
                            </Text>


                            <TouchableOpacity onPress={() => shareProduct(item.id)}>
                                <Text style={{ color: 'blue', marginTop: 5 }}>
                                    Share Product
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                ))}
        </ScrollView>
    )
}
const styles = StyleSheet.create({

    container: {
        padding: 10
    },

    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },

    tagline: {
        fontSize: 11,
        color: 'grey'
    },
    productSection: {
        flexDirection: 'row',
        marginVertical: 15

    },
    productImgSection: {
        width: '40%',
        backgroundColor: '#dddddd',
        justifyContent: 'center'


    },
    productDetailSection: {
        width: '60%',
        padding: 10
    },
    productImg: {
        height: 150,
        width: '100%',
        resizeMode: 'contain'

    },
    sponsored: {
        fontSize: 11,
        color: 'gray',
        marginBottom: 5

    },
    productName: {
        fontSize: 12,
        color: 'black',
        lineHeight: 18
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginTop: 5
    },
    rating: {
        fontSize: 10,
        color: '#017185',

    },
    ratingCount: {
        fontSize: 10,
        color: '#017185',
        marginLeft: 2
    },
    price: {
        fontSize: 16,
        color: '#000000'
    },
    mrp: {
        fontSize: 10,
        color: 'grey',
        marginHorizontal: 5
    },
    crossout: {
        fontSize: 10,
        color: 'grey',
        textDecorationLine: 'line-through'
    },
    cashback: {
        fontSize: 9,
        marginVertical: 2
    },
    logo: {
        height: 16,
        width: 42,
        marginVertical: 3
    }
})
export default ProductScreen
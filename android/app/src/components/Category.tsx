import { ScrollView, Image, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { Categories } from '../data/Categories'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../../../../FlipKart/types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Category = () => {
   
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Product'>;
const navigation = useNavigation<NavigationProp>();
    return (
        <ScrollView horizontal style={styles.container}>
            {Categories.map(item => (
                <TouchableOpacity onPress={() =>
        navigation.navigate('Product', { id: item.id })} key={item.id} style={styles.category}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5
    },
    title: {
        fontSize: 10,
        color: 'gray',
        textAlign:'center'
     
    },
    category: {
        paddingHorizontal: 12,
        alignItems: 'center',
    }
})

export default Category
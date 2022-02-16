import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colors';

const ProductDetailScreen = ({ route, navigation }) => {
    const { productId } = route.params;
    const selectedProduct = useSelector(state =>
        state.products.availableProducts.find(prod => prod.id === productId))

    useEffect(() => {
        navigation.setOptions({ title: selectedProduct.title })
    })

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
            <View style={styles.action}>
                <Button color={Colors.primary} title='Add to cart' />
            </View>
            <Text style={styles.price}>{selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    action: {
        marginVertical: 10,
        alignItems: 'center'
    },
    price: {
        fontSize: 25,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 22
    }
})
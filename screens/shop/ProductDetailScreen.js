import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const ProductDetailScreen = (props) => {
    const productId = props.route.params;
    console.log(productId)
    const selectedProduct = useSelector(state =>
        state.products.availableProducts.find(prod => prod.id === productId))
    console.log(selectedProduct)
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({})
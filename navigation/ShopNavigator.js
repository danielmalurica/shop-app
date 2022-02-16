import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import Colors from '../constants/Colors'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';

const Stack = createNativeStackNavigator();

function ProductsNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ProductOverview'>
                <Stack.Screen name='ProductOverview'
                    component={ProductsOverviewScreen}
                    options={{ title: 'List of Products' }}
                />
                <Stack.Screen name='ProductDetails'
                    component={ProductDetailScreen}
                    options={{ headerTitleAlign: 'center' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ProductsNavigator
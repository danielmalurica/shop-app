import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Platform } from 'react-native'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import Colors from '../constants/Colors'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import { HeaderButton, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/UI/CustomHeaderButton';

const Stack = createNativeStackNavigator();

function ProductsNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ProductOverview'>
                <Stack.Screen name='ProductOverview'
                    component={ProductsOverviewScreen}
                    options={{
                        title: 'List of Products',
                        headerTitleStyle: { fontFamily: 'open-sans-bold' },
                        headerRight: () => <Button title='click' />
                    }}
                />
                <Stack.Screen name='ProductDetails'
                    component={ProductDetailScreen}
                    options={{
                        headerTitleAlign: 'center', headerTitleStyle: { fontFamily: 'open-sans-bold' },
                        //headerRight: <HeaderButton HeaderButtonComponent={CustomHeaderButton}><Item title='Cart' iconName='md-cart' /></HeaderButton>
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ProductsNavigator
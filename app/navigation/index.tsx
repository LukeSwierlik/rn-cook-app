import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Platform } from 'react-native';
import { RootStackParamList } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import { ProductOverviewScreen } from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
import { ProductDetailsScreen } from '../screens/shop/ProductDetailsScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProductsOverview"
                component={ProductOverviewScreen}
                options={{
                    headerTitle: 'All Products',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
                }}
            />

            <Stack.Screen
                name="ProductDetail"
                component={ProductDetailsScreen}
                options={({ route }) => {
                    return {
                        headerTitle: route.params.productTitle
                    };
                }}
            />
        </Stack.Navigator>
    );
}

import React, { FC } from 'react';
import {
    Button,
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
    ViewProps
} from 'react-native';
import Colors from '../constants/Colors';

export interface IProductItem extends ViewProps {
    title: string;
    image: string;
    price: number;
    onViewDetails: () => void;
    onAddToCart: () => void;
}

export const ProductItem: FC<IProductItem> = (props) => {
    const { title, image, price, onViewDetails, onAddToCart } = props;

    let TouchableCmp: any = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={onViewDetails} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: image }} />
                        </View>

                        <View style={styles.details}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.price}>${price.toFixed(2)}</Text>
                        </View>

                        <View style={styles.actions}>
                            <Button
                                title="View Details"
                                onPress={onViewDetails}
                                color={Colors.primaryColor}
                            />

                            <Button
                                title="To Cart"
                                onPress={onAddToCart}
                                color={Colors.primaryColor}
                            />
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        marginVertical: 2
    },
    price: {
        fontFamily: 'open-sans',
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20
    }
});

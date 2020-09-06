import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProductItem } from '../../components/ProducetItem';
import { Product } from '../../models/Product';
import { State } from '../../+state';
import { RootStackParamList } from '../../../types';

type ProductsOverviewScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'ProductsOverview'
>;

type IProductOverviewScreen = {
    navigation: ProductsOverviewScreenNavigationProp;
};

export const ProductOverviewScreen: FC<IProductOverviewScreen> = (props) => {
    const products = useSelector((state: State) => state.products.availableProducts);

    return (
        <FlatList
            data={products}
            renderItem={({ item }: { item: Product }) => (
                <ProductItem
                    title={item.title}
                    image={item.imageUrl}
                    price={item.price}
                    onViewDetails={() => {
                        console.log('item.title', item.title);

                        props.navigation.navigate('ProductDetail', {
                            productId: item.id,
                            productTitle: item.title
                        });
                    }}
                    onAddToCart={() => {}}
                />
            )}
        />
    );
};

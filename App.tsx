import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import useCachedResources from './app/hooks/useCachedResources';
import useColorScheme from './app/hooks/useColorScheme';
import Navigation from './app/navigation';
import { Store } from './app/+state';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    }
    return (
        <Provider store={Store}>
            <SafeAreaProvider>
                <Navigation colorScheme={colorScheme} />
                <StatusBar />
            </SafeAreaProvider>
        </Provider>
    );
}

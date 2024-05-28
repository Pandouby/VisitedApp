import React from 'react';
import { Platform, Text, View } from 'react-native';
import { GlobeComponent } from './components/Globe/Globe';

export default function App() {
    return (
        <View id='globe-view'>
            <Text>${Platform.OS}</Text>

            <GlobeComponent />
        </View>
    );
}

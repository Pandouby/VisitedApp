import React from 'react';
import { Platform, Text, View } from 'react-native';
import { GlobeComponent } from './components/Globe/Globe';
import './index.scss'

export default function App() {
    return (
        <View id='globe-view' style={{flex: 1}}>
            <Text>{Platform.OS}</Text>

            <GlobeComponent />
        </View>
    );
}

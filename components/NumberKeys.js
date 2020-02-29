import React from 'react';
import { View, Text } from 'react-native';

import Styles from '../Styles';

const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['(-)', 0, '.']
];

const NumberKeys = () => (
    <View style={Styles.containerGrid}>
        {
            numbers.map(row => (
                <View style={Styles.containerRow}>
                    {
                        row.map(item => (
                            <Text 
                                key={item} 
                                style={Styles.numberButton}>
                                {
                                    item
                                }
                            </Text>
                        ))
                    }
                </View>
            ))
        }
    </View>
);

export default NumberKeys;
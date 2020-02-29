import { StyleSheet, Dimensions } from 'react-native';

const DeviceWidth = Dimensions.get('screen').width;
const DeviceHeight = Dimensions.get('screen').height;

const Styles = StyleSheet.create({
    containerGrid: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerRow: {
        flexDirection: 'row'
    },

    numberButton: {
        width: DeviceWidth * 0.2,
        height: DeviceWidth * 0.2,
        backgroundColor: 'gainsboro',
        fontSize: 32,
        lineHeight: DeviceWidth * 0.25,
        includeFontPadding: false,
        textAlign: 'center',
        margin: 2
    },

    center: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Styles;
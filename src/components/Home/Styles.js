import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    home: {
        flex: 1
    },
    activeAppContainer: {
        flex: 14,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    menuContainer: {
        flex: 1
    },
    menuBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    menuHomeButton: {
        flex: 1,
        backgroundColor: '#EAC8A4',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    menuBMRButton: {
        flex: 1,
        backgroundColor: '#F0DFF0',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
});
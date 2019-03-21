import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    activeAppContainer: {
        height: '92.5%',
        backgroundColor: '#FFFFFF'
    },
    menuContainer: {
        height: '7.5%'
    },
    menuBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    menuIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuLabel: {
        color: '#FFFFFF'
    },
    menuButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    menuHomeButton: {
        backgroundColor: '#8046F3'
    },
    menuBMRButton: {
        backgroundColor: '#FA8072'
    },
    menuBMIButton: {
        backgroundColor: '#EDA718'
    }
});
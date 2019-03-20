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
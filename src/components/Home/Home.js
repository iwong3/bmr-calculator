import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

import MSJCalculator from '../MSJCalculator/MSJCalculator';

import { styles } from './Styles';

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeApp: 'home'
        };
    }

    displayActiveApp = () => {
        const { state } = this;
        if (state.activeApp === 'home') {
            return (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>COOL APP</Text>
                </View>
            );
        } else if (state.activeApp === 'bmr') {
            return (
                <MSJCalculator />
            );
        }
    }

    displayMenu = () => {
        return (
            <View className="Menu" style={styles.menuBar}>
                <TouchableOpacity
                    className='MenuHome'
                    style={[styles.menuButton, styles.menuHomeButton]}
                    activeOpacity={0.8}
                    onPress={() => this.selectActiveApp('home')}>
                    <View style={styles.menuIcon}>
                        <Icon name='ios-home' type='ionicon' size={32} color='#FFFFFF' />
                        <Text style={styles.menuLabel}>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    className='MenuBMR'
                    style={[styles.menuButton, styles.menuBMRButton]}
                    activeOpacity={0.8}
                    onPress={() => this.selectActiveApp('bmr')}>
                    <View style={styles.menuIcon}>
                        <Icon name='ios-restaurant' type='ionicon' size={32} color='#FFFFFF' />
                        <Text style={styles.menuLabel}>BMR</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    className='MenuBMI'
                    style={[styles.menuButton, styles.menuBMIButton]}
                    activeOpacity={0.8}
                    onPress={() => this.selectActiveApp('bmr')}>
                    <View style={styles.menuIcon}>
                        <Icon name='ios-walk' type='ionicon' size={32} color='#FFFFFF' />
                        <Text style={styles.menuLabel}>BMI</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    selectActiveApp = (app) => {
        this.setState({
            activeApp: app
        });
    }

    render() {
        return (
            <View style={styles.home}>
                <View style={styles.activeAppContainer} >
                    { this.displayActiveApp() }
                </View>
                <View style={styles.menuContainer} >
                    { this.displayMenu() }
                </View>
            </View>
        )
    }

}
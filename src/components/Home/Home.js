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

        this.displayActiveApp = this.displayActiveApp.bind(this);
        this.displayMenu = this.displayMenu.bind(this);
        this.selectActiveApp = this.selectActiveApp.bind(this);
    }

    displayActiveApp = () => {
        const { state } = this;
        if (state.activeApp === 'home') {
            return (
                <View>
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
                        <Icon name='ios-calculator' type='ionicon' size={32} color='#FFFFFF' />
                        <Text style={styles.menuLabel}>BMR/BMI</Text>
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

import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

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
                <View>
                    <Text>Home</Text>
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
                <TouchableOpacity className='MenuHome' style={styles.menuHomeButton} onPress={() => this.selectActiveApp('home')} >
                    <View>
                        <Text>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className='MenuBMR' style={styles.menuBMRButton} onPress={() => this.selectActiveApp('bmr')} >
                    <View>
                        <Text>BMR</Text>
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
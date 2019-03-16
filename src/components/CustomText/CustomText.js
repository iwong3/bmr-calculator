import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';


export default class CustomText extends Component {
    
    styles = StyleSheet.create({
        customText: {
            // fontFamily: this.props.weight === 'heavy' ? 'sans-serif-medium' : this.props.weight === 'light' ? 'sans-serif-light' : 'sans-serif-light',
            fontFamily: 'sans-serif-medium',
            fontSize: this.props.fontSize ? this.props.fontSize : 20,
            color: this.props.color ? this.props.color : '#000000',
            textTransform: this.props.uppercase ? 'uppercase' : 'none',
            letterSpacing: 2
        }
    });

    render() {
        return (
            <Text style={this.styles.customText} >
                {this.props.children}
            </Text>
        )
    }

}
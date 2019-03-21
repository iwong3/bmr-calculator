import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

import CustomText from '../CustomText/CustomText';

import { styles } from './Styles';

import * as utility from '../../utilities/functions';

const initialState = {
    gender: {
        label: 'Gender',
        unit: 'Male',
        units: ['Male', 'Female']
    },
    weight: {
        label: 'Weight',
        value: '',
        unit: 'lbs',
        units: ['lbs', 'kgs']
    },
    height: {
        label: 'Height',
        value: '',
        unit: 'in',
        units: ['in', 'cm']
    },
    age: {
        label: 'Age (Years)',
        value: ''
    },
    activity: {
        label: 'Activity Multiplier',
        value: '1'
    }
};

export default class MSJCalculator extends Component {

    constructor(props) {
        super(props);

        this.state = Object.assign({}, JSON.parse(JSON.stringify(initialState)));

        this.displayHeader = this.displayHeader.bind(this);
        this.displayResults = this.displayResults.bind(this);
        this.displayForm = this.displayForm.bind(this);
        this.generateInputFields = this.generateInputFields.bind(this);
        this.generateResetButton = this.generateResetButton.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.calculateBMR = this.calculateBMR.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);
    }

    displayHeader = () => {
        return (
            <View style={styles.titleContainer}>
                <CustomText color='#FFFFFF' fontSize={36}>BMR/BMI Calculator</CustomText>
            </View>
        );
    }

    displayResults = () => {
        return (
            <View className='Results' style={styles.results} >
                <View style={styles.resultsWrapper}>
                <View className='BMR' style={styles.bmrResults}>
                    <CustomText color='#FA8072' fontSize={18}>BMR</CustomText>
                    <CustomText color='#FA8072' fontSize={48}>{ this.calculateBMR() }</CustomText>
                </View>
                <View className='BMI' style={styles.bmrResults}>
                    <CustomText color='#FA8072' fontSize={18}>BMI</CustomText>
                    <CustomText color='#FA8072' fontSize={48}>{ this.calculateBMI() }</CustomText>
                </View>
                </View>
            </View>
        );
    }

    displayForm = () => {
        return (
            <View className='Form' style={styles.form} >
                { this.generateInputFields('gender') }
                { this.generateInputFields('heightandweight') }
                { this.generateInputFields('ageandactivity') }
                { this.generateResetButton() }
            </View>
        );
    }

    // Generates the Form Input Fields for the MSJ Calculator
    generateInputFields = (field) => {
        const { state } = this;
        if (field === 'gender') {
            return (
                <View id={field} className='FormInput' style={styles.formInput2} >
                    <View className="inputRow" style={styles.inputRow}>
                        { state.gender.unit === state.gender.units[0] ? 
                            <TouchableOpacity
                                key='0'
                                style={[styles.inputGender, styles.inputGenderActiveMale]}
                                activeOpacity={0.8}
                                onPress={() => this.updateForm(field, 'unit', state[field].units[0])} >
                                <View style={styles.genderIcon}>
                                    <Text style={[styles.genderLabel, styles.genderLabelActive]}>{state[field].units[0]}</Text>
                                    <Icon name='ios-male' type='ionicon' size={72} color='#9BE6FF' />
                                </View>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity
                                key='0'
                                style={styles.inputGender}
                                activeOpacity={0.8}
                                onPress={() => this.updateForm(field, 'unit', state[field].units[0])} >
                                <View style={styles.genderIcon}>
                                    <Text style={styles.genderLabel}>{state[field].units[0]}</Text>
                                    <Icon name='ios-male' type='ionicon' size={72} color='#C0C0C0' />
                                </View>
                            </TouchableOpacity>
                        }
                        { state.gender.unit === state.gender.units[1] ? 
                            <TouchableOpacity
                                key='1'
                                style={[styles.inputGender, styles.inputGenderActiveFemale]}
                                activeOpacity={0.8}
                                onPress={() => this.updateForm(field, 'unit', state[field].units[1])} >
                                <View style={styles.genderIcon}>
                                    <Text style={[styles.genderLabel, styles.genderLabelActive]}>{state[field].units[1]}</Text>
                                    <Icon name='ios-female' type='ionicon' size={72} color='#FBA6FF' />
                                </View>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity
                                key='1'
                                style={styles.inputGender}
                                activeOpacity={0.8}
                                onPress={() => this.updateForm(field, 'unit', state[field].units[1])} >
                                <View style={styles.genderIcon}>
                                    <Text style={styles.genderLabel}>{state[field].units[1]}</Text>
                                    <Icon name='ios-female' type='ionicon' size={72} color='#C0C0C0' />
                                </View>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            );
        } else if (field === 'heightandweight') {
            return (
                <View id={field} className='FormInput' style={styles.formInput} >
                    <View className="inputRow" style={styles.inputRow}>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={styles.inputLabel}>Height</Text>
                            <View style={styles.inputShared}>
                                <TextInput
                                    style={styles.sharedTextInput}
                                    selectionColor='#FA8072'
                                    value={state['height'].value}
                                    keyboardType='numeric'
                                    onChangeText={(text) => this.updateForm('height', 'value', text)} />
                                <TouchableOpacity
                                    style={styles.sharedButton}
                                    activeOpacity={0.8}
                                    onPress={() => {
                                        state.height.unit === 'in'
                                            ? this.updateForm('height', 'unit', state['height'].units[1])
                                            : this.updateForm('height', 'unit', state['height'].units[0])}
                                    }>
                                    <View>
                                        <Text style={styles.sharedButtonText}>{ state['height'].unit }</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={styles.inputLabel}>Weight</Text>
                            <View style={styles.inputShared}>
                                <TextInput
                                    style={styles.sharedTextInput}
                                    selectionColor='#FA8072'
                                    value={state['weight'].value}
                                    keyboardType='numeric'
                                    onChangeText={(text) => this.updateForm('weight', 'value', text)} />
                                <TouchableOpacity
                                    style={styles.sharedButton}
                                    activeOpacity={0.8}
                                    onPress={() => {
                                        state.weight.unit === 'lbs'
                                            ? this.updateForm('weight', 'unit', state['weight'].units[1])
                                            : this.updateForm('weight', 'unit', state['weight'].units[0])}
                                    }>
                                    <View>
                                        <Text style={styles.sharedButtonText}>{ state['weight'].unit }</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            );
        } else if (field === 'ageandactivity') {
            return (
                <View id={field} className='FormInput' style={styles.formInput} >
                    <View className="inputRow" style={styles.inputRow}>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={styles.inputLabel}>Age</Text>
                            <View style={styles.inputShared}>
                                <TextInput
                                    style={styles.sharedTextInput}
                                    selectionColor='#FA8072'
                                    value={state['age'].value}
                                    keyboardType='numeric'
                                    onChangeText={(text) => this.updateForm('age', 'value', text)} />
                                <View style={styles.sharedTextContainer}>
                                    <Text style={styles.sharedText}>years</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={styles.inputLabel}>Activity Multiplier</Text>
                            <View style={styles.inputShared}>
                                <TextInput
                                    style={styles.sharedTextInput}
                                    selectionColor='#FA8072'
                                    value={state['activity'].value}
                                    keyboardType='numeric'
                                    onChangeText={(text) => this.updateForm('activity', 'value', text)} />
                            </View>
                        </View>
                    </View>
                </View>
            );
        }
    }

    generateResetButton = () => {
        return (
            <View id='resetButton' className='FormInput' style={styles.formInput} >
                <View className="inputRow" style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity
                        className='ResetButton'
                        style={styles.resetButton}
                        activeOpacity={0.8}
                        onPress={() => this.resetForm()} >
                        <View>
                            <Text style={styles.sharedButtonText}>Reset</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    // Two-way binding for state and form
    updateForm = (field, subfield, value) => {
        const stateCopy = Object.assign({}, JSON.parse(JSON.stringify(this.state)));
        stateCopy[field][subfield] = value;
        this.setState(stateCopy);
    }
    
    resetForm = () => {
        this.setState(initialState);
    }

    // Calculates BMR using the MSJ Equation
    calculateBMR = () => {
        const { state } = this;
        if (state.weight.value === '' || state.height.value === '' || state.age.value === '') {
            return '0';
        }
        // Convert to metric
        let weight = parseFloat(state.weight.value);
        let height = parseFloat(state.height.value);
        let age = parseFloat(state.age.value);
        let activity = parseFloat(state.activity.value);
        if (state.weight.unit === 'lbs') {
            weight /= 2.2;
        }
        if (state.height.unit === 'in') {
            height *= 2.54;
        }
        // Calculate BMR
        if (state.gender.unit === 'Male') {
            return utility.roundDecimals(((10 * weight) + (6.25 * height) - (5 * age) + 5) * activity, 2)
        }
        if (state.gender.unit === 'Female') {
            return utility.roundDecimals(((10 * weight) + (6.25 * height) - (5 * age) - 161) * activity, 2)
        }
        return '0';   
    }

    calculateBMI = () => {
        const { state } = this;
        if (state.weight.value === '' || state.height.value === '') {
            return '0';
        }
        // Convert to metric
        let weight = parseFloat(state.weight.value);
        let height = parseFloat(state.height.value);
        if (state.weight.unit === 'lbs') {
            weight /= 2.2;
        }
        if (state.height.unit === 'in') {
            height *= 2.54;
        }
        // Calculate BMI
        return utility.roundDecimals(weight / ((height / 100.0) * (height / 100.0)), 2);
    }

    render() {
        return (
            <View style={styles.container}>
                { this.displayHeader() }
                { this.displayResults() }
                { this.displayForm() }
            </View>
        );
    }

}

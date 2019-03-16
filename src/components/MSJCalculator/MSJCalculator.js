import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import CustomText from '../CustomText/CustomText';

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

        this.updateForm = this.updateForm.bind(this);
        this.generateInputFields = this.generateInputFields.bind(this);
        this.getOptionStyle = this.getOptionStyle.bind(this);
    }

    updateForm = (field, subfield, value) => {
        const stateCopy = Object.assign({}, JSON.parse(JSON.stringify(this.state)));
        stateCopy[field][subfield] = value;
        this.setState(stateCopy);
    }

    generateInputFields = (field) => {

        const { state } = this;

        input = {};
        if (field === 'gender') {
            input = (
                <View className='InputRow' style={styles.inputRow} >
                    <TouchableOpacity className='Option' style={this.getOptionStyle(field, state[field].units[0])} onPress={() => this.updateForm(field, 'unit', state[field].units[0])} >
                        <View>
                            <Text>{state[field].units[0]}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className='Option' style={this.getOptionStyle(field, state[field].units[1])} onPress={() => this.updateForm(field, 'unit', state[field].units[1])} >
                        <View>
                            <Text>{state[field].units[1]}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        } else if (field === 'weight' || field === 'height') {
            input = (
                <View className='InputRow' style={styles.inputRow} >
                    <View className='Option' style={styles.inputOption2} >
                        <TextInput style={styles.sharedInput} value={state[field].value} onChangeText={(text) => this.updateForm(field, 'value', text)} />
                    </View>
                    <TouchableOpacity className='Option' style={this.getOptionStyle(field, state[field].units[0])} onPress={() => this.updateForm(field, 'unit', state[field].units[0])} >
                        <View>
                            <Text>{state[field].units[0]}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className='Option' style={this.getOptionStyle(field, state[field].units[1])} onPress={() => this.updateForm(field, 'unit', state[field].units[1])} >
                        <View>
                            <Text>{state[field].units[1]}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        } else if (field === 'age' || field === 'activity') {
            input = (
                <View className='InputRow' style={styles.inputRow} >
                    <View className='Option' style={styles.inputOption} >
                        <TextInput style={styles.sharedInput} value={state[field].value} onChangeText={(text) => this.updateForm(field, 'value', text)} />
                    </View>
                </View>
            );
        }

        return (
            <View id={field} className='FormInput' style={styles.formInput} >
                <View className='InputLabel' style={styles.inputLabel} >
                    <CustomText color='#000000' fontSize={18} weight='light'>{state[field].label}</CustomText>
                </View>
                { input }
            </View>
        );
    }

    getOptionStyle = (field, unit) => {
        const { state } = this;
        if (state[field].unit === unit) {
            return unit === state[field].units[0] ? [styles.optionLeft, styles.activeOption] : [styles.optionRight, styles.activeOption]
        }
        return unit === state[field].units[0] ? styles.optionLeft : styles.optionRight
    }

    calculateBMR = () => {
        const { state } = this;
        if (state.weight.value === '' || state.height.value === '' || state.age.value === '') {
            return 'N/A';
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
            return ((10 * weight) + (6.25 * height) - (5 * age) + 5) * activity
        }
        if (state.gender.unit === 'Female') {
            return ((10 * weight) + (6.25 * height) - (5 * age) - 161) * activity
        }
        return 'N/A';   
    }

    resetForm = () => {
        this.setState(initialState);
    }

    displayHeader = () => {
        return (
            <View style={styles.titleContainer}>
                <CustomText color='#FFFFFF' fontSize={20} weight='heavy' uppercase={true} >Mifflin St. Jeor Calculator</CustomText>
            </View>
        );
    }

    displayForm = () => {
        return (
            <View className='Form' style={styles.form} >
                { this.generateInputFields('gender') }
                { this.generateInputFields('weight') }
                { this.generateInputFields('height') }
                { this.generateInputFields('age') }
                { this.generateInputFields('activity') }
            </View>
        );
    }

    displayResults = () => {
        return (
            <View className='Results' style={styles.results} >
                <View className='BMR' style={styles.bmrResults}>
                    <CustomText color='#000000'>BMR: { this.calculateBMR() }</CustomText>
                </View>
                <TouchableOpacity className='ResetButton' style={styles.resetButton} onPress={() => this.resetForm()} >
                    <View>
                        <CustomText color='#000000'>Reset</CustomText>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                { this.displayHeader() }
                { this.displayForm() }
                { this.displayResults() }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    // Title
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DC8D3'
    },
    // Form
    form: {
        flex: 7,
        margin: 25
    },
    formInput: {
        flex: 1
    },
    inputLabel: {
        marginBottom: 5
    },
    input: {
        borderColor: '#D1CED0',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 14,
        padding: 10
    },
    sharedInput: {
        borderColor: '#D1CED0',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 14,
        padding: 10,
        marginRight: 10
    },
    inputRow: {
        flexDirection: 'row'
    },
    inputOption: {
        flex: 1
    },
    inputOption2: {
        flex: 7
    },
    optionLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999999',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 10
    },
    optionRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999999',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10
    },
    activeOption: {
        backgroundColor: '#9DC8D3'
    },
    // Results
    results: {
        flex: 1,
        flexDirection: 'row'
    },
    bmrResults: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8B0BD'
    },
    resetButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF1E3'
    }
});

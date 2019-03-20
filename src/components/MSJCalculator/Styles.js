import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    // Title
    titleContainer: {
        flex: 1.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF998D'
    },
    // Form
    form: {
        flex: 5,
        margin: 25
    },
    formInput: {
        height: 100,
        marginTop: 20
    },
    formInput2: {
        height: 200
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },
    inputLabel: {
        height: 20,
        marginLeft: 35
    },
    // Shared by 2 (Height&Weight, Age&Activity)
    inputShared: {
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#FA8072',
        paddingLeft: 15,
        marginLeft: 15,
        marginRight: 15
    },
    sharedTextInput: {
        fontSize: 32,
        color: '#696969',
        width: '60%'
    },
    sharedButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#FA8072',
        backgroundColor: '#FA8072',
        height: 45,
        width: 60
    },
    sharedButtonText: {
        fontSize: 24,
        color: '#FFFFFF'
    },
    sharedTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 60
    },
    sharedText: {
        fontSize: 24,
        color: '#696969'
    },
    // Form - Gender
    inputGender: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#C0C0C0',
        margin: 15
    },
    inputGenderActiveMale: {
        borderColor: '#9BE6FF'
    },
    inputGenderActiveFemale: {
        borderColor: '#FBA6FF'
    },
    genderIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    genderLabel: {
        fontSize: 20,
        color: '#C0C0C0',
        marginBottom: 10
    },
    genderLabelActive: {
        color: '#000000'
    },
    // Results
    results: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bmrResults: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25
    },
    resetButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FA8072',
        borderRadius: 20,
        backgroundColor: '#FA8072',
        height: 50,
        width: '50%',
        marginTop: 20
    }
});

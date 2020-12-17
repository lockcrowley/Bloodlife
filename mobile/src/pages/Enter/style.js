import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',

    },

    logolife:{
        width:300,
        height:300,
        marginBottom:20,
    },

    slogan:{
        fontFamily:'Oxygen_700Bold',
        color: '#e02041'
    },

    buttonContainer: {
        marginTop: 50,
    },

    button: {
        backgroundColor: '#e02041',
        borderRadius: 10,
        height: 50,
        width: 330,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',

    },

    buttonText:{
        fontSize: 25,
        color: '#FFF',
        fontFamily: 'Oxygen_400Regular'
    },  

    buttonTextCad:{
        marginTop: 20,
        alignSelf: 'center',
        fontSize: 20,
        color: '#000',
        fontFamily: 'Oxygen_400Regularr'
        
    },

    totalConnections:{
        fontFamily:'Oxygen_400Regular',
        color:'#e02041',
        fontSize:12,
        lineHeight:20, 
        marginTop:100
    }

})
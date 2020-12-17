import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f0f7',

    },

    Home:{
        marginTop: -60,
        padding:16,
        
    },

    profile: {
        flexDirection:'row',
        padding: 15,
        backgroundColor:'#FFF',
        borderWidth:1,
        borderColor:'#e6e6f0',
        borderRadius:8,
        marginBottom:20,
        overflow:'hidden',  
    },  

    profileInfo:{
        marginLeft:16,
    },
    
    name:{
        fontFamily:'Oxygen_700Bold',
        color:'#32264d',
        fontSize:17,
    },

    info:{
        fontFamily:'Oxygen_400Regular',
        color:'#6a6180',
        fontSize:15,
        marginTop:4,
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:10,
        justifyContent:'flex-start'
        
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 19,
        fontWeight: 'bold',
        bottom:2
    },
})
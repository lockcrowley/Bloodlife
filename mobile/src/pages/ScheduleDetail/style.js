import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#e02041'
       
    },

    header: {
        flexDirection:'row',
        alignSelf: 'flex-start',
        paddingHorizontal:20,
        marginBottom:60
    },

    title:{
        fontFamily:'Oxygen_700Bold',
        color:'#FFF',
        fontSize:24,
        lineHeight:32,
        left:20,
    },

    blood:{
        alignSelf:'flex-end',
        left: 150,
        color:'#FFF',
        fontFamily:'Oxygen_400Regular'
    }, 

    donation: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop: 16,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    infoValue: {
        marginTop: 5,
        fontSize: 15,
        marginBottom: 10,
        color: '#737380'
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 20,
        color: '#737380',
        marginTop: 5,
    },

    actions: {
        marginTop: 14,
        justifyContent: 'center',
        alignItems:'center'
    },

    action: {
        backgroundColor: '#04BF58',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },

    avatar: {
        width:140,
        height:140,
        borderRadius:70,
        backgroundColor:'#eee',
        marginBottom:10,

    },
    
    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold',
        bottom:2

    },

    detailsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },

});
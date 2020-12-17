import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1
    },  

    Map:{
        flex:1,
    },

    topBar:{
        position: 'absolute',
        alignItems:'flex-start',
        paddingHorizontal:18,
        paddingTop:50
    },

    avatar:{
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor:'#FFF',

    },

    searchForm:{
        position: 'absolute',
        bottom:20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection:'row', 
    },

    searchInput:{
        flex:1,
        height:50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius:25,
        paddingHorizontal: 20,
        fontSize: 16,
        elevation: 2, 

    },
 
    loadButton:{
        width: 50,
        height: 50,
        backgroundColor: '#e02041',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },

    iconMap:{
        width: 54,
        height: 54,
    },

    callout: {
        width: 260,
        
      },
      hopName: {
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf:'center'
      },

      info:{
        color: '#666',
        marginTop: 5,
        marginBottom:5,
      }
})
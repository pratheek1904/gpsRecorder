import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { API_KEY } from '../../../config/apiConfig'

const AddressModal = ({latitude,longitude,showAddress,setShowAddress}:any) => {
const [userAddress,setUserAddress]=useState('')
    useEffect(()=>{
        const getLocation=async()=>{
           try{
            const response = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`
              );
              const data = await response.json();
              console.log(JSON.stringify(data))
              const address = data.results[0]?.formatted;
              setUserAddress(address) 
              console.log(address,"addressaddress")
           }catch(e){
            console.log(e,"err")
           }
        }
        getLocation() 
    },[])
  return (
    <View style={styles.centeredView}>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          setShowAddress(!showAddress);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Typography>{userAddress}</Typography>
          </View>
        </View>
      </Modal> */}
 
    </View>
  )
}

export default AddressModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        // borderWidth:1
        backgroundColor: 'rgba(0,0,0,0.5)', 
      },
      modalView: {
        margin: 20,
        width:"90%",
        height:200,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})





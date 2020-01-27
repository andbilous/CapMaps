import React, { useState } from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import Driver from "../screens/Driver";
import Passenger from "../screens/Passenger";


 const Router = () => {
    const [isDriver,setIsDriver] = useState(false);
    const [isPassenger,setIsPassenger] = useState(false);

    const clickPassengerBtn = () => {
        setIsPassenger(true);
    };

     const clickDriverBtn =() => {
         setIsDriver(true);
     };

    if(isDriver){
          return <Driver />;
    }
    if(isPassenger) {
        return <Passenger />;
    }
     return (
         <View style={styles.container}>
             <Text style={styles.buttonTextStyle}>Choose Your Role</Text>
             <TouchableOpacity
                 style={styles.buttonStyle}
                 onPress={clickPassengerBtn}
                 title="Passenger"
             >
                 <Text style={styles.buttonTextStyle}>Passenger</Text>
             </TouchableOpacity>
             <TouchableOpacity
                 style={styles.buttonStyle}
                 onPress={clickDriverBtn}
                 title="Driver"
             >
                 <Text style={styles.buttonTextStyle}>Driver</Text>
             </TouchableOpacity>
         </View>
     );

};
 export default Router;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
    buttonStyle: {
        borderRadius: 10,
        alignSelf: 'center',
        width: '80%',
        color: 'red',
        marginTop: 20,
        padding: 20,
        backgroundColor: 'green'
    },
    buttonTextStyle : {
        textAlign: 'center',
    }
});

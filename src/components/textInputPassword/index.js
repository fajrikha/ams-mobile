import { Input, Item, View } from 'native-base'
import React, { useState } from 'react'
import { Text, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';


export default function Password() {
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    const showPassword = () => {
        setIsSecureEntry(!isSecureEntry)
    }
    return (

        <View style={{paddingHorizontal: 47, marginTop: 20}}>
            <Item regular style={styles.itemWrapper}>
                <Input placeholder="Password" style={styles.textInput} secureTextEntry={isSecureEntry}/>
                <TouchableOpacity onPress={showPassword}>
                    {
                        isSecureEntry?
                        <Icon name='eye-off' size={26} style={{marginRight: 13}}/>
                        :
                        <Icon name='eye' size={26} style={{marginRight: 13, opacity: 0.8,}}/>
                    }
                    
                </TouchableOpacity>
            </Item>
        </View>
       
        // <>
        //     <Item regular >
        //         <Input 
        //         placeholder="Password"
        //         secureTextEntry={isSecureEntry}
                
        //         />
        //         <TouchableOpacity onPress={showPassword}>
        //         {
        //             isSecureEntry ? 
        //                 <Icon name='eye-off' size={20} style={{marginRight: 13}}/> 
        //                 : 
        //                 <Icon name='eye' size={20} style={{marginRight: 13}}/>
        //         }
        //         </TouchableOpacity>
        //     </Item>
        //     <TouchableOpacity>
        //         <Text style={{color: '#1B1D28', top: 560,}}>Lupa password</Text>
        //     </TouchableOpacity>

        // </>
    )
}


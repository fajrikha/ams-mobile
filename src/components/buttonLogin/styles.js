import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 47, 
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 40,
    },
    button: {
        width: 319, 
        justifyContent: 'center', 
        borderRadius: 10, 
        backgroundColor: '#567DF4',
        marginBottom: 5,
    },
    textButton: {
        color: '#fff', 
        fontFamily: 'FSAlbert', 
        fontSize: 18, 
        fontWeight: '700'
    },
    wrapperText:{
        flexDirection: 'row',
    },
    textRegist: {
        fontFamily: 'FSAlbert',
        fontSize: 16,
        fontWeight: '700',
        color: '#002F5F'
    }
})

export default styles
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

export default  Users=()=>{
    const {users,loading,error}=useSelector()
    return (
        <View style={styles.container} >
            <Text>Users</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

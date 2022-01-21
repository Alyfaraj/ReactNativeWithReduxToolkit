import React from 'react'
import { Button, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { getUsers, setMessage } from './src/store/usersSlice'
export default App = () => {
  const { users, loading, error } = useSelector(state => state.users)
  const dispatch = useDispatch()


  if (error.length > 0) (
    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
      <Text style={{ color: 'red' }} >{error}</Text>
    </View>
  )

  return (
    <View style={{ marginTop: 100 }} >
      <Button title='Get Users' onPress={() => dispatch(getUsers())} />
      {loading && <ActivityIndicator size='large' />}
      {error.length > 0 &&
        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: 'red' }} >{error}</Text>
        </View>}
      {
        users?.map(user =>
          <View key={user.id}>
            <Text>{user.id}-{user.name}</Text>
            <Text>{user.address.city}</Text>
          </View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({})

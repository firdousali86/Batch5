import { useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { FirestoreHelper } from '../../helpers'
import firestore from '@react-native-firebase/firestore';
import { USER_COLLECTION } from '../../../res/strings';


const FirestoreUsersScreen = (props) => {
    const [users, setUsers] = useState([])
    const loadUsers = async () => {
        let response = await FirestoreHelper.fetchAllUsersData()
        console.log(response)
        setUsers(response.data)
    }
    const loadUser = async () => {
        let response = await FirestoreHelper.fetchUserData('test5@gmail.com')
        console.log(response)
        setUsers(response.data)

        // await FirestoreHelper.updateUserData('test5@gmail.com',{firstName:'Charlie',skills:'Javascript,React Native'})
        // await FirestoreHelper.deleteUserData('KMqrBIXfyNQbxqW7YhzK')

    }
    useEffect(() => {
        // loadUsers()
        // loadUser()
        const subscriber = firestore()
            .collection(USER_COLLECTION)
            .doc('test5@gmail.com')
            .onSnapshot(documentSnapshot => {
                console.log('User data: ', documentSnapshot.data());
            });

        // Stop listening for updates when no longer required
        return () => subscriber();
    }, [])

    return (
        <View>
            <Text styles={styles.heading}>Users</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.card}>
                            <Text>{item.firstName}</Text>
                        </View>
                    )
                }}

                keyExtractor={item => item.firstName}

            />
        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        alignSelf: 'center'
    }, card: {
        height: 40,
        margin: 5,
        backgroundColor: '#d3d3d3'
    }
})
export default FirestoreUsersScreen
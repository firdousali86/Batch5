import firestore from '@react-native-firebase/firestore';
import { USER_COLLECTION } from '../../res/strings';

class FirestoreHelper {
    constructor() {
        console.log('FirestoreHelper')
    }

    addUserData = async (payload) => {
        try {
            await firestore().collection(USER_COLLECTION).add(payload)
            return { success: true }
        } catch (e) {
            console.log(e)
            return { success: false }
        }
    }

    setUserData = async (payload) => {
        try {
            await firestore().collection(USER_COLLECTION).doc(payload.docName).set(payload)
            return { success: true }
        } catch (e) {
            console.log(e)
            return { success: false }
        }
    }
    fetchAllUsersData = async () => {
        try {
            let dataArray = []
            let users = await firestore().collection(USER_COLLECTION).orderBy("firstName", "asc").get()
            users.forEach((user) => {
                dataArray.push(user.data())
            })
            return { success: true, data: dataArray }
        } catch (e) {
            console.log(e)
            return { success: false, data: [] }

        }
    }
    fetchUserData = async (id) => {
        try {
            let dataArray = []
            let user = await firestore().collection(USER_COLLECTION).doc(id).get()
            return { success: true, data: user.data() }
        } catch (e) {
            console.log(e)
            return { success: false, data: [] }

        }
    }
    updateUserData = async (id, payload) => {
        try {
            let dataArray = []
            let user = await firestore().collection(USER_COLLECTION).doc(id).update(payload)
            return { success: true, data: user.data() }
        } catch (e) {
            console.log(e)
            return { success: false, data: [] }

        }
    }
    deleteUserData = async (id) => {
        try {
            let dataArray = []
            let user = await firestore().collection(USER_COLLECTION).doc(id).delete()
            return { success: true }
        } catch (e) {
            console.log(e)
            return { success: false }

        }
    }

}


export default new FirestoreHelper()
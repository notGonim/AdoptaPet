import { firebase, FieldValue } from '../lib/firebase.lib'


export async function doesUsernameExist(username) {
    const res = await firebase.firestore().collection('users').where('username', '==', username).get()
    return res.docs.map((user) => user.data().length > 0)
}



export async function getPetsData() {

    const res = await firebase.firestore().collection('pets').get()
    const pets = res.docs.map((pet) => ({
        ...pet.data(),
        docId: pet.id
    }));
    return [pets]
}
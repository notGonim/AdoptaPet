import React, { useContext, useEffect, useState } from 'react'
import FirebaseContext from '../context/firebase.context'
import { getPetsData } from '../services/firebase.services'



export default function usePet() {

    const [pets, setPets] = useState([])
    const { firebase } = useContext(FirebaseContext)


    useEffect(async () => {
        //get Pets from the firebase data
        const res = await getPetsData()
        setPets(...res)
    }, [firebase])
    return pets
}



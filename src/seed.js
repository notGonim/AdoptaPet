
export function seedDatabases(firebase) {

    const pets = [
        {
            petId: 1,
            petName: 'Bossy',
            shelter: 'CatAndDogs',
            age: 1,
            dateCreated: Date.now(),
            imageSrc:  ' '
        },
        {
            petId: 2,
            petName: 'Kook',
            shelter: 'FourLeggd',
            age: 1,
            dateCreated: Date.now(),
            imageSrc:  ' '
        },
        {
            petId: 3,
            petName: 'Nani',
            shelter: 'SunniDai',
            age: 1,
            dateCreated: Date.now(),
            imageSrc:  ' '
        },
        {
            petId: 4,
            petName: 'Bta',
            shelter: 'PetHouse',
            age: 1,
            dateCreated: Date.now(),
            imageSrc:  ' '
        },
        {
            petId: 5,
            petName: 'Moomo',
            shelter: 'Bittoo',
            age: 1,
            dateCreated: Date.now(),
            imageSrc:  ' '
        },
        {
            petId: 6,
            petName: 'KOPOp',
            shelter: 'CatAndDogs',
            age: 1,
            dateCreated: Date.now(),
            imageSrc:  ' '
        },
        {
            petId: 7,
            petName: 'Dodo',
            shelter: 'FourLeggd',
            age: 1,
            dateCreated: Date.now(),
            imageSrc:  ' '
        },
        {
            petId: 8,
            petName: 'Soso',
            shelter: 'SunniDai',
            age: 1,
            dateCreated: Date.now(),
            imageSrc:  ' '
        },
        {
            petId: 9,
            petName: 'Meme',
            shelter: 'PetHouse',
            age: 1,
            dateCreated: Date.now(),
            imageSrc:  ' '
        },
        {
            petId: 10,
            petName: 'Lolo',
            shelter: 'Bittoo',
            age: 1,
            dateCreated: Date.now(),
            imageSrc:  ' '
        },
        {
            petId: 11,
            petName: 'Lman',
            shelter: 'CatAndDogs',
            age: 1,
            dateCreated: Date.now(),
            imageSrc: ' '
        },
        {
            petId: 12,
            petName: 'NONO',
            shelter: 'FourLeggd',
            age: 1,
            dateCreated: Date.now(),
            imageSrc:  ' '
        },
        {
            petId: 13,
            petName: 'GOGo',
            shelter: 'SunniDai',
            age: 1,
            dateCreated: Date.now(),
            imageSrc:  ' '
        },
        {
            petId: 14,
            petName: 'JOJO',
            shelter: 'PetHouse',
            age: 1,
            dateCreated: Date.now(),
            imageSrc:  ' '
        },
        {
            petId: 15,
            petName: 'BOBO',
            shelter: 'Bittoo',
            age: 1,
            dateCreated: Date.now(),
            imageSrc: ' '
        },
        {
            petId: 16,
            petName: 'sosoqq',
            shelter: 'CatAndDogs',
            age: 1,
            dateCreated: Date.now(),
            imageSrc:  ' '
        },
        {
            petId: 17,
            petName: 'Waters',
            shelter: 'FourLeggd',
            age: 1,
            dateCreated: Date.now(),
            imageSrc:  ' '
        },
        {
            petId: 18,
            petName: 'SHSHS',
            shelter: 'SunniDai',
            age: 1,
            dateCreated: Date.now(),
            imageSrc:  ' '
        },
        {
            petId: 19,
            petName: 'Btssa',
            shelter: 'PetHouse',
            age: 1,
            dateCreated: Date.now(),
            imageSrc:  ' '
        },
        {
            petId: 20,
            petName: 'alpha',
            shelter: 'Bittoo',
            age: 1,
            dateCreated: Date.now(),
            imageSrc: ' '
        },
    ]

    
    //Add photos to databases for each pet 
    for (let i = 0; i < pets.length; ++i) {
        pets[i].imageSrc = `/pets/${i+1}.jpg`
    }


    //Add Pet data set to the firestore database 
    for (let k = 0; k < pets.length; k++) {
        firebase.firestore().collection('pets').add(pets[k]);
    }


}



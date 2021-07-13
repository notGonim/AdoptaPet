
export function seedDatabases(firebase) {

    const pets = [
        {
            petId: 1,
            petName: 'Bossy',
            shelter: 'CatAndDogs',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 2,
            petName: 'Kook',
            shelter: 'FourLeggd',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 3,
            petName: 'Nani',
            shelter: 'SunniDai',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 4,
            petName: 'Bta',
            shelter: 'PetHouse',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 5,
            petName: 'Moomo',
            shelter: 'Bittoo',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 6,
            petName: 'KOPOp',
            shelter: 'CatAndDogs',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 7,
            petName: 'Dodo',
            shelter: 'FourLeggd',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 8,
            petName: 'Soso',
            shelter: 'SunniDai',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 9,
            petName: 'Meme',
            shelter: 'PetHouse',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 10,
            petName: 'Lolo',
            shelter: 'Bittoo',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 11,
            petName: 'Lman',
            shelter: 'CatAndDogs',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 12,
            petName: 'NONO',
            shelter: 'FourLeggd',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 13,
            petName: 'GOGo',
            shelter: 'SunniDai',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 14,
            petName: 'JOJO',
            shelter: 'PetHouse',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 15,
            petName: 'BOBO',
            shelter: 'Bittoo',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 16,
            petName: 'sosoqq',
            shelter: 'CatAndDogs',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 17,
            petName: 'Waters',
            shelter: 'FourLeggd',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 18,
            petName: 'SHSHS',
            shelter: 'SunniDai',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 19,
            petName: 'Btssa',
            shelter: 'PetHouse',
            age: 1,
            dateCreated: Date.now()
        },
        {
            petId: 20,
            petName: 'alpha',
            shelter: 'Bittoo',
            age: 1,
            dateCreated: Date.now()
        },
    ]

    //Add Pet data set to the firestore database 
    for (let k = 0; k < pets.length; k++) {
        firebase.firestore().collection('pets').add(pets[k]);
    }

    //Add photos to databases for each pet 
    for (let i = 1; i <= 20; ++i) {
        firebase
            .firestore()
            .collection('photos')
            .add({
                photoId: i,
                userId: i,
                imageSrc: `./assets/pets/${i}.jpg`,
                dateCreated: Date.now()
            });
    }

}

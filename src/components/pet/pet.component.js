import usePet from "../../hooks/usePet"
import Card from "../card/card.component"



export default function Pets() {

    const pets = usePet()
    console.log(pets)
    return (
        <div className="container grid grid-cols-4  p-5 m-9">
            {
                pets?.length > 0 ?
                    (pets.map((pet) =>
                        <Card key={pet.docId}
                            name={pet.petName}
                            age={pet.age}
                            dateCreated={pet.dateCreated}
                            shelter={pet.shelter}
                        />)
                    ) : (<p className="text-center text-2xl">No Pets on the Street</p>)
            }
        </div>
    )
}
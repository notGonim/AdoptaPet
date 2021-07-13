import Skeleton from "react-loading-skeleton"
import usePet from "../../hooks/usePet"
import Card from "../card/card.component"



export default function Pets() {

    const pets = usePet()
    return (
        <div className="container grid grid-cols-4 m-10 ">
            {!pets &&
                (
                    <>
                        <Skeleton className="mb-10 mt-10 " count={4} width={60} height={290} />
                        <Skeleton className="mb-10 mt-10 " count={4} width={60} height={290} />
                        <Skeleton className="mb-10 mt-10" count={4} width={60} height={290} />
                        <Skeleton className="mb-10 mt-10" count={4} width={60} height={290} />
                    </>
                )
            }
            {
                pets?.length > 0 ?
                    (pets.map((pet) =>
                        <Card key={pet.docId}
                          pet={pet}
                        />)
                    ) : (<p className="text-center text-2xl">No Pets on the Street</p>)
            }
        </div>
    )
}
/*


*/
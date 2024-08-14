
interface Person {
    firstName: string,
    lastName: string,
    age: number,
    address: Address,
    isAlive?: boolean
}

interface Address {
    country: string,
    houseNo: number
}
export const ObjectLiterals = () => {

    const person: Person = {
        firstName: 'Leamsi',
        lastName: "Alvarado",
        isAlive: true,
        age: 25,
        address: {
            country: 'Mexico',
            houseNo: 7508
        }

    }



    return (
        <>
            <h3>Objetos literales</h3>
            <pre>
            {JSON.stringify(person,null,2)}
            </pre>
        </>
    )
}

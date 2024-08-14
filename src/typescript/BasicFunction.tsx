export const BasicFunction = () => {
    const addTwoNumber = (a: number, b:number):number => { 
        return a + b
    }

  return (
    <>
    <h3>Funciones</h3>
    <span>El resultado de sumar { addTwoNumber(8,2) }</span>
    </>
  )
}

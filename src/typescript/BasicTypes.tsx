export const BasicTypes = () => {
    const name: string = 'Leamsi';
    const age: number = 25;
    const isActive: boolean = true;
    const powers: string[] = ['react', 'react native', 'angular'];

    
    return (

        <>
            <h3>Tipos básicos</h3>
            {name} {age} {isActive ? 'true' : 'false'}
            <br />
            {powers.join(',')}
        </>
    )
}

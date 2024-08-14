import { useForm } from "react-hook-form"

type FormInputs = {
    email: string
    password: string
}

export const FormsPage = () => {

    const {register, handleSubmit, formState, watch} = useForm<FormInputs>({
        defaultValues:{
            email: 'leamsi-alvarado@hotmail.com',
            password: 'Abc123'
        }
    });  

    const onSumbit = (myForm: FormInputs) => {
        console.log({myForm})
    }

console.log(watch('email'))

  return (
    <>
        <form onSubmit={handleSubmit(onSumbit)}>
            <h3>Formularios</h3>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input type="text" placeholder="email" {...register('email', {required: true}) }/>
                <input type="text" placeholder="password" {...register('password')}/>

                <button type="submit" >Ingresar</button>
            </div>
        </form>

        <pre>
            {JSON.stringify(formState, null, 2)}
        </pre>
    </>
  )
}

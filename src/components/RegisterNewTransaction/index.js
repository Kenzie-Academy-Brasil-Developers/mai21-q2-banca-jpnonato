
import { useState} from 'react'

const RegisterNewTransaction = ({setList,list}) => {

    const [title,setTitle] = useState('')
    const [value,setValue] = useState('')
    const [type,setType] = useState('')

    const Register = () => {
        if(type === 'Saída' || type === 'saída' || type === 'saida'){
            setList([...list, { 
                title: title, 
                type: "Saída", 
                value: Number(value) *-1
            }])
        }

       
    }

    return(
        <div>
            <input 
                value={title}
                type='text' 
                // placeholder='Título' 
                onChange={(e) => setTitle(e.target.value)}
            />
            <input 
                value={type} 
                type='text' 
                placeholder='Tipo' 
                onChange={(e) => setType(e.target.value)}
            />
            <input 
                value={value}
                type='text' 
                placeholder='Valor' 
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={Register}>Registrar</button>
        </div>
    )
}

export default RegisterNewTransaction
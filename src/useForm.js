import {useState} from 'react'

const useForm = (validateInfo) => {
    const [values, setValues] = useState({
        fullname: '',
        email: '',
        password: '',
        occupation: '',
        state: ''
    })
    const [error, setError] = useState({})
    const [response, setResponse] = useState('')

    const handleChange = e => {

        setError(validateInfo(values));

        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })  
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        

        Object.keys(error).length === 0 ? fetch('https://frontend-take-home.fetchrewards.com/form',{
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: values.fullname,
                email: values.email,
                password: values.password,
                occupation: values.occupation,
                state: values.state
            })
            }).then(resp => console.log(resp))
            .then(setResponse("You're all signed up!"))
            : setResponse('All fields must be filled in')
        }
    return { handleChange, values, error, handleSubmit, response}
}

export default useForm;
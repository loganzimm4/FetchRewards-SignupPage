import {React, useEffect, useState} from 'react'
import useForm from './useForm'
import validateInfo from './validateInfo'
import './Form.css'

const FormSignup = () => {

     //custom hook for form -------------------------------------
    const {handleChange, values, handleSubmit, error, response} = useForm(validateInfo)

    //fetch call to isolate occupations data --------------------
    useEffect(() => {
        fetch('https://frontend-take-home.fetchrewards.com/form')
        .then(resp => resp.json())
        .then(resp => setJobs(resp.occupations))
    },[]);

    //fetch call to isolate state data --------------------------
    useEffect(() => {
        fetch('https://frontend-take-home.fetchrewards.com/form')
        .then(resp => resp.json())
        .then(resp => setStates(resp.states))
    },[]);

    //created useState to retain info from fetch calls -------------
    const [jobs, setJobs] = useState([]);
    const [states, setStates] = useState([]);

  return (
    <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
            <h1> Please Input Your Information To Signup For An Account! </h1>
              <div className='form-inputs'>
                <label htmlFor='fullname' className='form-label'> Full Name </label>
                <input 
                    id='fullname'
                    type='text'
                    name='fullname'
                    className='form-input'
                    placeholder='Enter Your Full Name'
                    value={values.fullname}
                    onChange={handleChange}
                />
                {error.fullname && <p>{error.fullname}</p>}

                <label htmlFor='email' className='form-label'> Email </label>
                <input 
                    id='email'
                    type='email'
                    name='email'
                    className='form-input'
                    placeholder='Enter Your Email'
                    value={values.email}
                    onChange={handleChange}
                />
                {error.email && <p>{error.email}</p>}

                <label htmlFor='password' className='form-label'> Password </label>
                <input 
                    id='password'
                    type='password'
                    name='password'
                    className='form-input'
                    placeholder='Enter Your Password'
                    value={values.password}
                    onChange={handleChange}
                />
                {error.password && <p>{error.password}</p>}

                <label htmlFor='occupation' className='form-label'> Occupation </label>
                <select 
                  id='occupation'
                  type='text'
                  name='occupation'
                  className='form-input'
                  onChange={handleChange}
                >
                    <option>-Occupation-</option>
                    {jobs.map((job, index) => {
                        return <option key = {index}> {job} </option>
                    })}
                </select>
                {error.occupation && <p>{error.occupation}</p>}

                <label htmlFor='state' className='form-label'> State </label>
                <select 
                  id='state'
                  type='state'
                  name='state'
                  className='form-input'
                  onChange={handleChange}
                >
                    <option> -State- </option>
                    {states.map((state, index) => {
                        return <option key={index}>{state.name}</option>
                    })}
                </select>
                {error.state && <p>{error.state}</p>}

              </div>
            <button className='form-input-button' type='submit'> Create My Account! </button>
            <p>{response}</p>
        </form>
    </div>
  )
}

export default FormSignup

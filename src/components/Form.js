import React, { useState } from 'react';
import RenderList from './Display';

const Form = () =>{
    const [inputVal, setInput] = useState({username: "",data:null});

    const onType = e => {
        console.log(e.target.value)
        const newObj={username: e.target.value}
        setInput(oldObj=>{ return {...oldObj, ...newObj}})
        
    }

    const onSubmit = async e => {
        e.preventDefault()
        let username=inputVal.username
        console.log(username)
        let options= {method: 'GET'}
        await fetch(`https://api.github.com/users/${username}/repos`,options)
         .then(d=>{
             console.log(d)
             return d.json()
        })
        .then(d=>{

        })
         
    }

		return (
				<form onSubmit={e=>onSubmit(e)}>
					<input type="text" onChange={e=>onType(e)}></input>
                    <input type="submit" value="Search" />
				</form>
			
		);
}

export default Form;
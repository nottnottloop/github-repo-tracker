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
         .then(res=>{
             /*if (res.status==404){

             }*/
             return res.json()
        })
         .then(d=>{
            const newObj={data: d}
            setInput(oldObj=>{ return {...oldObj, ...newObj}})
            console.log(d,d.length)
        })
         
    }
       let searched=inputVal.data
		return (
            <div>
			<form onSubmit={e=>onSubmit(e)}>
				<input type="text" onChange={e=>onType(e)}></input>
                <input type="submit" value="Search" />
			</form>
            {searched?<RenderList data={searched}></RenderList>
            :<h2>Type a github username to find details</h2>}
            </div>
			
		);
}

export default Form;
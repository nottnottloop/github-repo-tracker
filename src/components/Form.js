import React, { useState } from 'react';
import RenderList from './Display';

const Form = () =>{
    const [inputVal, setInput] = useState({username: "",data:null,error:false});

    const onType = e => {
        console.log(e.target.value)
        const newObj={username: e.target.value}
        setInput(oldObj=>{ return {...oldObj, ...newObj}})
        
    }
    const onSubmit = async e => {
        e.preventDefault()
        let username=inputVal.username
        
        console.log(inputVal)
        console.log(username)
        let options= {method: 'GET'}
        await fetch(`https://api.github.com/users/${username}/repos`,options)
         .then(res=>{
             if (res.status==404){
              //GIVE USER DOESNT EXIST ERROR 
              setInput(old=>{
                  old.data=null;
                  return old
              })
              return null
             }
             return res.json()
        })
         .then(d=>{
             let newObj;
             !d?newObj={data: d,error:true}:newObj={data:d,error:false} 
             //ternary statement to check if data is null
            setInput(oldObj=>{ return {...oldObj, ...newObj}})
            //overwrite old state parameters with new ones
        })
         
    }
       let searched=inputVal.data
       let e=inputVal.error
       console.log(e)
		return (
            <div>
                {e?<h1>{inputVal.username} doesnt exist on github. Try a different one</h1>:null}
			<form onSubmit={e=>onSubmit(e)}>
				<input type="text" onChange={e=>onType(e)}></input>
                <input type="submit" value="Search" />
			</form>
            {searched?<RenderList data={searched} username={inputVal.username}></RenderList>
            :<h2>Type a github username to find details</h2>}
            </div>
			
		);
}

export default Form;
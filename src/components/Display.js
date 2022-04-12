import React, { useState } from 'react';
import './display.css'
const RenderList = (props) =>{
    //let values=props.data.map(d=><li>{d.id}</li>)
    let values2=[]
    let vals2=props.data.forEach(d => {
        values2.push(
        <li>
            <h2>{d.name}</h2>
            <a target="_blank" href={d.html_url}>{d.html_url}</a><br></br>
            <a>Languages: {d.language}</a><br></br>
            <a>Last Push: {d.pushed_at} </a><br></br>
            <a>Stargazers: {d.stargazers_count}</a><br></br>
            <a>Visibility: {d.visibility}</a>
            
        </li>)
        
    });
    let user=props.data[0].owner.login
    return (
			<div>
                <h1>Results for {user} </h1>
                <ul>{values2}</ul>
            </div>
	);
}

export default RenderList;
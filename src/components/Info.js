import React, { useState } from 'react';
import './display.css'
const RenderList = (props) =>{

    let values2=[]
    let data=props.data
    data.forEach(d => {
            values2.push(
            <li>
                <a target="_blank" href={d.html_url}>{d.html_url}</a><br></br>
                <a>Languages: {d.language}</a><br></br>
                <a>Last Push: {new Date(d.pushed_at).toLocaleDateString()} at {new Date(d.pushed_at).toLocaleTimeString()} </a><br></br>
                <a>Stargazers: {d.stargazers_count}</a><br></br>
                <a>Visibility: {d.visibility}</a><br></br>
                <a>Forks: {d.forks}</a><br></br>
                <a>Issues Count: {d.open_issues}</a>
                
    </li>)
        
})

        
    ;
    let user=props.username
    return (
			<div className='results'>
                <ul>{values2}</ul>
                </div>
	);
}

export default RenderList;
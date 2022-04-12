import React, { useState } from 'react';

const RenderList = (props) =>{
    let values=props.data.map(d=><li>{d.id}</li>)
    let values2=[]
    let vals2=props.data.forEach(d => {
        values2.push(
        <li>
            <a>{d.name}</a>
            <a href={d.html_url}>{d.html_url}</a>
            <a>{d.language}</a>
        </li>)
        
    });
    return (
			<div>
                <h1>Results for:</h1>
                <ul>{values2}</ul>
            </div>
	);
}

export default RenderList;
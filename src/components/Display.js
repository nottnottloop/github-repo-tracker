import React, { useState } from 'react';

const RenderList = (props) =>{
    let values=props.data.map(d=><li>{d.id}</li>)
    return (
			<div>
                <h1>Results for:</h1>
                <ul>{values}</ul>
            </div>
	);
}

export default RenderList;
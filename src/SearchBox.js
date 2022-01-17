import React from 'react'

export default function SearchBox({onInputChange}) {
    return (
        <div >
            <input 
                type='text' 
                placeholder="Search Robots" 
                onChange={(event) => onInputChange(event.target.value)}/>
        </div>
    )
}

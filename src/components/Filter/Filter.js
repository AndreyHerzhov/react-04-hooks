import React from "react"

const Filter = ({value, onChange}) => {
    return (
        <>
        <label>
            Name filter 
            <input type="text" value={value} onChange={onChange}/> 
        </label>
        </>
    )
    
}
    
 export default Filter
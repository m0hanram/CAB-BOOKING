import React from 'react'
import './FilterComponent.css'

const Filter = (props) => {

    console.log(props.hide)

    return (
        <div className={(props.hide===1)?'Filterhide':'Filtershow'}>
            <p>Filter</p>
            <hr />
            <form className={(props.hide===1)?'Hide':'Show'}>
                <div>
                    <select className='Drop' name="state" id="StateValue" onChange={e => props.onSelectState(e.target.value)}>
                        <option value="null">All</option>
                        <option value="Maharashtra" >Maharashtra</option>
                    </select>
                </div>
                <div>
                    <select className='Drop' name="city" id="CityValue" onChange={e => props.onSelectCity(e.target.value)}>
                        <option value="null">All</option>
                        <option value="Panvel" >Panvel</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filter
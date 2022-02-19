import React from "react";
import "./ListComponent.css"

const List = (props) => {
    
    console.log(props)
    let Distance = props.data.distance_difference
    let path = '[ '
    props.data.station_path.map((e) => path+=String(e)+', ')
    path += ']'
    console.log(path)

    let options = {year: 'numeric', month: 'long', day: 'numeric' };
    let dateFormated = new Date(props.data.date)
    let dateString = dateFormated.toLocaleDateString("en-US", options).toString() + ' ' + dateFormated.getHours()+ ":" +dateFormated.getMinutes()
    // dateString += dateFormated.getDay() + ' ' + `${dateFormated.getMonth()+1}` + " " + dateFormated.getFullYear() + " " + dateFormated.getHours()+":"+dateFormated.getMinutes()

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img src={props.data.map_url}/>
                    </div>
                    <div className="col-7">
                        <pre style={{whiteSpace: "pre-wrap",lineHeight:"30px"}}>
                            Ride Id : {props.data.id}  <br/>
                            Origin Station : {props.data.origin_station_code}<br/>  
                            Station path : {path}  <br/>
                            Date : {dateString}     <br/>
                            Distance : {Distance} <br/>
                        </pre>
                    </div> 
                    <div className="col-2">
                        <button type="button" className="btn btn-secondary btn-sm">{props.data.state}</button>
                        <button type="button" className="btn btn-secondary btn-sm">{props.data.city}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default List;
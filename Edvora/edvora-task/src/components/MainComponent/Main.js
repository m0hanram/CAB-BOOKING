import React, {useState, useEffect} from "react";
import Navbar from "../NavbarComponent/Navbar";
import List from '../ListComponent/List'
import "./MainComponent.css";
import {Ride,user} from "../../staticResources/data"
import TitleBar from '../TitleBarComponent/TitleBar';
import Filter from "../FilterComponent/Filter";



const Main = () => {

    const [choice, setChoice] = useState(1)
    const [Data, setData] = useState([])
    const [stateFilter, setStateFilter] = useState("null")
    const [cityFilter, setCityFilter] = useState("null")
    const [countItemsPast, setCountItemsPast] = useState(0)
    const [countItemsUpcoming, setCountItemsUpcoming] = useState(0)
    const [hide,setHide] = useState(1);

    function clickHandler(val) {
        setHide(val*hide);
    }

    console.log(choice, cityFilter, stateFilter, hide)

    useEffect( () => {
        let DataListNearest = []
        let min = []
        for(let i=0;i<Ride.length;i++){
            let mini = Infinity;
            let miniPos = 0
            for(let j=0;j<Ride[i].station_path.length;j++){
                if (Math.abs(Ride[i].station_path[j]-user.station_code)<mini){
                    mini = Math.abs(Ride[i].station_path[j]-user.station_code)
                    miniPos = j
                }
            }
            min.push([mini,miniPos,i])
        }
        function compare(a,b) {
            if (a[0]<b[0]){
                return -1
            }
            else if(a[0]>b[0]) {
                return 1
            }
            else{
                return 0
            }
        }
        min.sort(compare);
        for(let i=0; i<min.length; i++){
            if(stateFilter==='null' && cityFilter==='null'){
                DataListNearest.push(Ride[min[i][2]])
                DataListNearest[DataListNearest.length - 1]['distance_difference'] = min[i][0]
            }
            else if(Ride[min[i][2]].state===stateFilter && cityFilter==='null'){
                DataListNearest.push(Ride[min[i][2]])
                DataListNearest[DataListNearest.length - 1]['distance_difference'] = min[i][0]
            }
            else if(stateFilter==='null' && Ride[min[i][2]].city===cityFilter){
                DataListNearest.push(Ride[min[i][2]])
                DataListNearest[DataListNearest.length - 1]['distance_difference'] = min[i][0]
            }
            else if(Ride[min[i][2]].state===stateFilter && Ride[min[i][2]].city===cityFilter){
                DataListNearest.push(Ride[min[i][2]]) 
                DataListNearest[DataListNearest.length - 1]['distance_difference'] = min[i][0]
            }
        }


        let DataListUpcoming = []
        let newDate = new Date()
        let currentDate = newDate.getTime()
        for(let i=0;i<Ride.length;i++){
            if(Ride[i].date>currentDate){
                if(stateFilter==='null' && cityFilter==='null'){
                    DataListUpcoming.push(Ride[i])
                }
                else if(Ride[i].state===stateFilter && cityFilter==='null'){
                    DataListUpcoming.push(Ride[i])
                }
                else if(stateFilter==='null' && Ride[i].city===cityFilter){
                    DataListUpcoming.push(Ride[i])
                } 
                else if(Ride[i].state===stateFilter && Ride[i].city===cityFilter){
                    DataListUpcoming.push(Ride[i])
                }   
            }
        }
        setCountItemsUpcoming(DataListUpcoming.length)

        let DataListPast = []
        newDate = new Date()
        currentDate = newDate.getTime()
        for(let i=0;i<Ride.length;i++){
            if(Ride[i].date<currentDate){
                if(stateFilter==='null' && cityFilter==='null'){
                    DataListPast.push(Ride[i])
                }
                else if(Ride[i].state===stateFilter && cityFilter==='null'){
                    DataListPast.push(Ride[i])
                }
                else if(stateFilter==='null' && Ride[i].city===cityFilter){
                    DataListPast.push(Ride[i])
                }
                else if(Ride[i].state===stateFilter && Ride[i].city===cityFilter){
                    DataListPast.push(Ride[i])
                }
            }
        }
        setCountItemsPast(DataListPast.length)

    },[])
    

    useEffect(() => {
        console.log(choice,stateFilter,cityFilter,hide)
        if(choice===1){
            let DataList = []
            let min = []
            for(let i=0;i<Ride.length;i++){
                let mini = Infinity;
                let miniPos = 0
                for(let j=0;j<Ride[i].station_path.length;j++){
                    if (Math.abs(Ride[i].station_path[j]-user.station_code)<mini){
                        mini = Math.abs(Ride[i].station_path[j]-user.station_code)
                        miniPos = j
                    }
                }
                min.push([mini,miniPos,i])
            }

            function compare(a,b) {
                if (a[0]<b[0]){
                    return -1
                }
                else if(a[0]>b[0]) {
                    return 1
                }
                else{
                    return 0
                }
            }

            min.sort(compare);

            for(let i=0; i<min.length; i++){
                if(stateFilter==='null' && cityFilter==='null'){
                    DataList.push(Ride[min[i][2]])
                    DataList[DataList.length - 1]['distance_difference'] = min[i][0]
                }
                else if(Ride[min[i][2]].state===stateFilter && cityFilter==='null'){
                    DataList.push(Ride[min[i][2]])
                    DataList[DataList.length - 1]['distance_difference'] = min[i][0]
                }
                else if(stateFilter==='null' && Ride[min[i][2]].city===cityFilter){
                    DataList.push(Ride[min[i][2]])
                    DataList[DataList.length - 1]['distance_difference'] = min[i][0]
                }
                else if(Ride[min[i][2]].state===stateFilter && Ride[min[i][2]].city===cityFilter){
                    DataList.push(Ride[min[i][2]])
                    DataList[DataList.length - 1]['distance_difference'] = min[i][0]
                }
            }
            setData(DataList)
            console.log(Data)
        }
        else if(choice===2) {
            let DataList = []

            let newDate = new Date()
            let currentDate = newDate.getTime()

            for(let i=0;i<Ride.length;i++){
                if(Ride[i].date>currentDate){
                    if(stateFilter==='null' && cityFilter==='null'){
                        DataList.push(Ride[i])
                    }
                    else if(Ride[i].state===stateFilter && cityFilter===null){
                        DataList.push(Ride[i])
                    }
                    else if(stateFilter==='null' && Ride[i].city===cityFilter){
                        DataList.push(Ride[i])
                    }
                    else if(Ride[i].state===stateFilter && Ride[i].city===cityFilter){
                        DataList.push(Ride[i])
                    }
                }
            }

            setData(DataList)
            setCountItemsUpcoming(DataList.length)
        }
        else if(choice===3) {
            let DataList = []

            let newDate = new Date()
            let currentDate = newDate.getTime()

            for(let i=0;i<Ride.length;i++){
                if(Ride[i].date<currentDate){
                    if(stateFilter==='null' && cityFilter==='null'){
                        DataList.push(Ride[i])
                    }
                    else if(Ride[i].state===stateFilter && cityFilter==='null'){
                        DataList.push(Ride[i])
                    }
                    else if(stateFilter==='null' && Ride[i].city===cityFilter){
                        DataList.push(Ride[i])
                    }
                    else if(Ride[i].state===stateFilter && Ride[i].city===cityFilter){
                        DataList.push(Ride[i])
                    }
                }
            }

            setData(DataList)
            setCountItemsPast(DataList.length)
        }
        return function cleanup() {
            setData([])
        }
    }, [choice, stateFilter, cityFilter, hide])
        

    return (
        <>
            <TitleBar user={user}/> 
            <div id="main-container">
                <Navbar onSelect={setChoice} onClick={clickHandler} countUpcoming={countItemsUpcoming} countPast={countItemsPast}/>
                <Filter hide={hide} onSelectState={setStateFilter} onSelectCity={setCityFilter} />
                <div className="list-container">
                    {Data.map((d) => (
                                        <>
                                            <List key={d.id} data={d} />
                                            <br/>
                                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Main;
import React , {useState} from "react";
import winter from "./images/winter.jpg"
import summer from "./images/summer.jpg"

const App =() =>{


  const [latitude , setLatitude] = useState(0)
  const [longitude , setLongitude] = useState(0)
  const [hemisphere, setHemisphere] = useState("")
  const [month , setMonth] = useState(()=>{return (new Date().getMonth()+1)})


   function fetchlocation(){
    if(navigator.geolocation){
           navigator.geolocation.getCurrentPosition(
             (position=>{
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
                


                if(latitude>0){
                    setHemisphere("Northen Hemisphere")
                }
                else if(latitude<0){
                    setHemisphere("Southern Hemisphere")
                }
                else{
                    setHemisphere("Equator")
                }
             }

             )
           )
    }
    else{
        alert("Geolocations is not supported at your browser")
    }
   }

    return(
        <div>
        <button onClick={fetchlocation}>Fetch Location</button>
        <h1>Latitude :{latitude}</h1>
        <h1>Longitude:{longitude}</h1>
        <h1>Hemisphere:{hemisphere}</h1>
        <h1>Month: {month}</h1>
        {
            hemisphere && (hemisphere ==="Northen Hemisphere" && month>=4 && month<=10) &&
            (
                <div>
                    <h1>Summer Season </h1>
                    <img src="{summer}" alt="summer"/>
                </div>
            )
        }
        {
            hemisphere && (hemisphere ==="Norther Hemisphere" && (month<4 || month>10))&&
            (
                <div>
                   <h1>winter Season</h1>
                   <img src="{winter}" alt="winter"/>
                </div>
            )
        }

        </div>
    )
}
export default App;

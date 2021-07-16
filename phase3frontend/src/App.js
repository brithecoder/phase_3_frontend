import {React,useState,useEffect} from "react";
import Foundation from  "./Foundation";
import LipGloss from "./LipGloss";
import LashSet  from "./LashSet";

import './App.css';




function App() {

const [glosscollection,setglosscollection]=useState([])
// const [foundationCollection,setFoundationCollection]=useState([])
// const [lashCollection,setLashCollection]=useState([])
 
useEffect (() => {
    fetch('http://localhost:9393/lip_glosses/')
    .then(res => res.json())
    .then(data => 
      console.log(data.lip_glosses))
      .catch(error => console.error('Error:', error))
    
  },[])

//   useEffect (() => {
//     fetch('http://localhost:9393/foundations/')
//     .then(res => res.json())
//     .then(data => {
//        setFoundationCollection(data.foundations);
//     }
//     )
//   },[])

//   useEffect (() => {
//     fetch('http://localhost:9393/lash_sets/')
//     .then(res => res.json())
//     .then(data => { 
//       setLashCollection(data.lash_sets);
//     }
//     )
//   },[])

  return (
    <div>
      <h1>Makeup shop</h1>
      {/* <Foundation        foundationCollection={foundationCollection}/> */}
       <LipGloss    glosscollection={glosscollection} />
       {/* <LashSet   lashCollection={lashCollection} /> */}
      
    </div>
  );
}

export default App;

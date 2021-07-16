import {React,useState,useEffect} from "react";
import Foundation from  "./Foundation";
import LipGloss from "./LipGloss";
import LashSet  from "./LashSet";

import './App.css';




function App() {

const [glosscollection,setglosscollection]=useState([])
const [foundationCollection,setFoundationCollection]=useState([])
const [lashCollection,setLashCollection]=useState([])
const [showFoundation,setShowFoundation]=useState(false);
const [showLipGloss,setShowLipGloss]=useState(false);
const [showLash,setShowLash]=useState(false);
useEffect (() => {
    fetch('http://localhost:9393/lip_glosses')
    .then(res => res.json())
    .then(data => 
      setglosscollection(data.lip_glosses))
      .catch(error => console.error('Error:', error))
    
  },[])

  useEffect (() => {
    fetch('http://localhost:9393/foundations')
    .then(res => res.json())
    .then(data => {
       setFoundationCollection(data.foundations);
    }
    )
  },[])

  useEffect (() => {
    fetch('http://localhost:9393/lash_sets')
    .then(res => res.json())
    .then(data => { 
      setLashCollection(data.lash_sets);
    }
    )
  },[])
  function handleFoundation(){
    setShowFoundation((showFoundation)=> !showFoundation);
  }
  function handleLipGloss(){
  setShowLipGloss((showLipGloss)=> !showLipGloss);
  }
  function handleLashSet(){
   setShowLash((showLash)=> !showLash);
  }

  return (
    <div>
      <h1 className ="header"> 💄 The Makeup Shop 💄 </h1>
      <img className="introPic" src="https://ctl.s6img.com/society6/img/uL2lUHfaLWEJou42tuDTzA38MLw/w_700/prints/~artwork/s6-0089/a/34873654_2842477/~~/pink-lips-z6b-prints.jpg" width="400"/>
      <br/>
     {showFoundation? <Foundation  foundationCollection={foundationCollection} /> :null}
     <button onClick={handleFoundation} className="showbutton">  Shop Foundation </button>
      {showLipGloss? <LipGloss    glosscollection={glosscollection} /> :null}
      <button onClick={handleLipGloss} className="showbutton"> Shop Lip Gloss </button>
    {showLash? <LashSet     lashCollection={lashCollection}  /> :null}
    <button onClick={handleLashSet} className="showbutton"> Shop Lash Sets </button>
    </div>
  );
}

export default App;

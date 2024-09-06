import React, {useState,useEffect} from "react";
import "./App.css";
import Axios from 'axios'
function App()
{
const[sname,setStudentName]= useState("");
const[tech,setTechnology]= useState("");
const[status,setStatus]= useState("");
const[rollnumber,setRollno]=useState("");
const[dept,setBranch]=useState("");
const submitReview=()=>
{
Axios.post('http://localhost:9008/aliens',
{name:sname,
tech:tech,
sub:status,
rollno:rollnumber,
branch:dept}).then(()=>
{
alert("success");
});
};
return (
<div className="App">
<h1>CRUD Application Demo</h1>
<div className="information">
<label><b>Student Name</b></label>
<input
type="String"
name="sname"
onChange={(e)=>{
setStudentName(e.target.value);
}}
required/>
<label><b>Technology</b></label>
<input
type="String"
name="tech"
onChange={(e)=>{
setTechnology(e.target.value);
}}
required/>
<label><b>Status</b></label>
<input
type="String"
name="status"
onChange={(e)=>{
setStatus(e.target.value);
}}
required/>
<label><b>Rollno</b></label>
<input
type="Number"
name="rollnumber"
onChange={(e)=>{
setRollno(e.target.value);
}}
required/>
<label><b>Department</b></label>
<input
type="String"
name="dept"
onChange={(e)=>{
setBranch(e.target.value);
}}
required/>

<button onClick={submitReview}><b>Submit</b></button>
</div>
</div>);
}
export default App;


import React, { Component } from "react";
import "./style.css";
import * as dashboardService from '../../Services/dashboard';

class NewDashboard extends Component {
  constructor(props){
    super(props);
    this.state ={dashboardName:"",dashboardId:""};
  }
   updateValue = (e) =>{
    this.setState({dashboardName:e.target.value})
  }
  createDashboard  = () =>{
    console.log("Click");
    dashboardService.createDashboard(this.state.dashboardName).then((response)=>{
        this.setState({dashboardId:response.id});
    });
  }

  render(){
    return(  <div className="create-dashboard">
    <span>Dashboard Name :</span>
    <input value={this.state.dashboardName} onChange={this.updateValue}/>
    <button onClick={this.createDashboard}> Create Dashboard Id</button>
    <input value={this.state.dashboardId} disabled="true"/>
  </div>);
  }
}

export  {NewDashboard};
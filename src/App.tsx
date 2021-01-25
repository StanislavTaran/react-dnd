import React from 'react';
import styled from "styled-components";
import './App.css';
import Card from './components/Card/Card'

const status = {
    pending : "PENDING",
    inProcess : "IN PROCESS",
    completed : 'COMPLETED'
}

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
`

const StyledStatusColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 200px;
`

export default class App extends React.Component{
    state = {
        list: [
            {
                name: "Prepare workspace",
                status : status.inProcess
            },
            {
                name: "Write requirements",
                status : status.pending
            },
            {
                name: "take rest",
                status : status.completed
            },
        ]
    }

    handleDragStart = (e :React.DragEvent<HTMLDivElement>,name : string)=>{
        console.log(name);
        e.dataTransfer.setData("id", name)
    }

    handleDragOver=(e :React.DragEvent<HTMLDivElement>)=>{
        e.preventDefault()
    }

    handleDrop=(e : React.DragEvent<HTMLDivElement>, status : string)=>{
        let id = e.dataTransfer.getData("id");
        console.log(this.state.list);
        const list = this.state.list.map(task=> {
            if (task.name === id){
                task.status = status;
            }
            return task;
        })

        this.setState((state)=>({...state, list}))
    }

 render(){
   return <StyledSection>
       <StyledStatusColumn onDragOver={(e)=>this.handleDragOver(e)} onDrop={(e)=>this.handleDrop(e, status.pending)}>
           <h3>{status.pending}</h3>
           {this.state.list.filter(item=> item.status === status.pending)
               .map(item=> <Card onStartDrag={this.handleDragStart} draggable name={item.name} status={item.status}/>)}
       </StyledStatusColumn>
       <StyledStatusColumn onDragOver={(e)=>this.handleDragOver(e)} onDrop={(e)=>this.handleDrop(e, status.inProcess)}>
           <h3>{status.inProcess}</h3>
           {this.state.list.filter(item=> item.status === status.inProcess)
               .map(item=> <Card onStartDrag={this.handleDragStart} draggable name={item.name} status={item.status}/>)}
       </StyledStatusColumn>
       <StyledStatusColumn onDragOver={(e)=>this.handleDragOver(e)} onDrop={(e)=>this.handleDrop(e, status.completed)}>
           <h3>{status.completed}</h3>
           {this.state.list.filter(item=> item.status === status.completed)
               .map(item=> <Card onStartDrag={this.handleDragStart} draggable name={item.name} status={item.status}/>)}
       </StyledStatusColumn>
   </StyledSection>
 }
}

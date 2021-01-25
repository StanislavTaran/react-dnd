import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  min-height: 100px;
  width: 180px;
  margin: 4px 12px;
  padding: 4px;
  background-color: aquamarine;
  color: #282c34;
  font-family: "Calisto MT";
  text-align: center;
  border: 3px solid #61dafb;
  border-radius: 8px;
`
interface ICardProps {
    name : string,
    status: string,
    draggable : boolean,
    onStartDrag : (e: React.DragEvent<HTMLDivElement>, name: string)=>void,
}

export default function Card(props:ICardProps) {
    return <StyledCard onDragStart={(e)=>props.onStartDrag(e, props.name)} {...props} >
        <p>{props.name}</p>
    </StyledCard>

}

import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

`
export const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    justify-content: center;
    border: solid 2px white;
    padding-top: 20px;
    box-sizing: border-box;
    padding-left: 20px;
    overflow-x: auto;
    li{
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        width: 150px;
        height: 150px;
        border: 2px solid red;
        border-radius: 4px;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 10px;
    }
    @media (max-width: 530px){
        margin-top: 20px;
    }
`

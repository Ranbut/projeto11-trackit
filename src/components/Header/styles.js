import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
  position: fixed;
  background-color: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: ${props => props.id === "" ? "none" : "flex"};
  padding: 10px 18px;
  justify-content: space-between;
  h1{
    font-family: 'Playball', cursive;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
  }
  img{
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;

export {HeaderContainer};
import styled from "styled-components";

export const Button = styled.button`
background: ${props => props.isBack ? 'transparent' : '#000000CC'};
width: 342px;
height: 74px;
margin-top: 130px;
border-radius: 14px;
color: #ffffff;
font-size: 17px;
font-weight: 700;
line-height: 28px;
border: ${props => props.isBack ? '1px solid #ffffff' : 'none'};
outline: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
&:hover{
    opacity: .8;
}
&:active{
    opacity: .5
}

img{
    transform: ${props => props.isBack ? 'rotateY(180deg)' : ''};
}
`;
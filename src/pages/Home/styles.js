import styled from 'styled-components';
import Background from '../../assets/background.svg';


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
`;

export const Image = styled.img`
    margin-top: 30px;
`;


export const Label = styled.p`
letter-spacing: -0.40799999237060547px;
color: #EEEEEE;
font-family: Roboto;
font-size: 18px;
font-weight: 700;
line-height: 22px;
text-align: left;
padding-left: 23px;
`;

export const Input = styled.input`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px #00000025;
border-radius: 14px;
width: 342px;
height: 58px;
border: none;
outline: none;
padding: 15px 20px 15px 25px;
font-size: 24px;
color: #FFFFFF;
margin-bottom: 34px;
`;



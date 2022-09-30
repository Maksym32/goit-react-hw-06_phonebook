import styled from 'styled-components';
import { Field } from 'formik';

export const InputFormBox = styled.div`
padding: 10px;
margin: 10px;
width: 320px;
border: 1px solid black;
border-radius: 5px;
background-color: #68829e;
`
export const InputItem = styled(Field)`
display: flex;
flex-direction: column;
margin-bottom: 10px;
`

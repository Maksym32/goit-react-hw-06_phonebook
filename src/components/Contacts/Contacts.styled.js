import styled from 'styled-components' 

export const ListItem = styled.li`
  display: flex;
align-items:center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  font-size: 15px;
`

export const ContactsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`
export const ContactsTitle = styled.p`
margin: 0;
`

export const Button = styled.button`
margin-top: 0;
  margin-left: 20px;
  cursor: pointer;
  font-size: 15px;
`

import React from "react"
import styled from "styled-components"

const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;`;

const DropDownContainer = styled("div")`
  margin: 0 auto;`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  background-color: #ffffff;
  max-width: 120px;
  text-align: center;`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  position: absolute;
  z-index: 5;
  text-align: left;
  padding: 0;
  margin: 0;
  padding-left: 0.4em;
  padding-right:0.4em;
  background-color: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;`;

export default function StockMenu(){

  const [isOpen, setIsOpen] = React.useState(false)

  const [selectedOption, setSelectedOption] = React.useState(null)

  const options = ["Aspen", "Richemont", "Naspers", "Firstrand", "AngloGold Ashanti gold", "Sasol"]

  const toggling = () => setIsOpen(!isOpen);

  const chosenOptions = []

  const onOptionClicked = value => () => {
    setSelectedOption(value)
    setIsOpen(false)
    chosenOptions.push(value)
    console.log(value)
  }



  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "select"}
        </DropDownHeader>
        {isOpen && 
        (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem value={option} onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
        </DropDownListContainer>
        )}
        

      </DropDownContainer>
    </ Main>
  )
}
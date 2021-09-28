import React from "react";
import styled from "styled-components";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(44, 62, 80, 0.96);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: #f1f1f1;

  &:hover{
    color: #81cfe0;
  }
`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  color: #fff;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(4, 60px);

  }
`;
const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #81cfe0;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Dropdown = ({isOpen, toggle}) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {" "}
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <ButtonWrap>
          <Button primary="true" round="true" big="true" to="/contact">
              Liên hệ
          </Button>
        </ButtonWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;

import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { BsPersonCircle   } from "react-icons/bs";

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <Dropdown show={isOpen} onClick={toggleDropdown} onToggle={toggleDropdown}>
    <Dropdown.Toggle as={BsPersonCircle} />

    <Dropdown.Menu>
        <Dropdown.Item href="/EditProfile">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
}

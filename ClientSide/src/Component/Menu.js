import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { BsPersonCircle   } from "react-icons/bs";
import { FaUserGear } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <Dropdown show={isOpen} onClick={toggleDropdown} onToggle={toggleDropdown}>
    <Dropdown.Toggle as={BsPersonCircle} className='user_icon'/>

    <Dropdown.Menu>
        <Dropdown.Item  href="/EditProfile"><FaUserGear className='pb-1'/> Edit Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><MdOutlineShoppingBag /> My order</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><CiLogout /> Logout</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
}

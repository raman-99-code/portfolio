import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5"
import { AiOutlineUser } from "react-icons/ai"
import { IoMdBook } from "react-icons/io"
import { GoProjectRoadmap } from "react-icons/go"
import { MdOutlineMessage } from "react-icons/md"
import {useState} from 'react'
const Nav = () => {
	const[activeNav,setActiveNav]=useState('#')
return(
	<nav>
		<a href="#" onClick={()=> setActiveNav('#')}className={activeNav=='#' ? 'active':''}><IoHomeOutline /></a>
		<a href="#about" onClick={()=> setActiveNav('#about')}className={activeNav=='#about' ? 'active':''} ><AiOutlineUser /></a>
		<a href="#experience"onClick={()=> setActiveNav('#experience')}className={activeNav=='#experience		' ? 'active':''}><IoMdBook /></a>
		<a href="#service" onClick={()=> setActiveNav('#service')}className={activeNav=='#service' ? 'active':''}><GoProjectRoadmap /></a>
		<a href="#contact"onClick={()=> setActiveNav('#contact')}className={activeNav=='#contact' ? 'active':''}><MdOutlineMessage /></a>
	</nav>
	)
}
export default Nav
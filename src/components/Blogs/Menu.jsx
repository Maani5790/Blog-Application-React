import React from 'react'
import { Link } from 'react-router-dom'
import MenuCard from './MenuCard'

const Menu = ({MenuData}) => {
  return (
    <>
    <Link to={<MenuCard />} >{MenuData}</Link>
    </>
  )
}

export default Menu;
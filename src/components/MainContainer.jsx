import React from 'react'
import Revenues from "./Revenues"
import LostDeals from './LostDeals'
import QuaterGoals from './QuaterGoals'
import Customer from './Customer'
import Growth from './Growth'
import Chats from './Chats'
import Topstates from './Topstates'
import NewDeals from './NewDeals'


const MainConatiner = () => {
  return (<div className='flex flex-wrap gap-[20px]'>

    <Revenues />
    <LostDeals />
    <QuaterGoals />

    <Customer />
    <Growth />

    <Chats />
    <Topstates />
    <NewDeals />

  </div>
  )
}

export default MainConatiner
import React from 'react'
import PopMal from '../MalayalamList/PopMal'
import PopMalCaro from '../MalayalamList/PopMalCaro'
import RevenueMal from '../MalayalamList/RevenueMal'
import UpcomingMal from '../MalayalamList/UpcomingMal'
import VoteMal from '../MalayalamList/VoteMal'

const Malay = () => {
  return (
    <div>
    
    <PopMalCaro/>
    <RevenueMal/>
    <PopMal/>
    <UpcomingMal/>
    <VoteMal/>
    </div>
  )
}

export default Malay

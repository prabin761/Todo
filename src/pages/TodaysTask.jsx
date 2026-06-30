import React from 'react'
import TopHeader from '../components/TopHeader'
import CategoryTitle from '../components/CategoryTitle'
import Date from '../components/date'
import Navbar from '../components/Navbar'
import Progress from '../components/Progress'
import TaskGroup from '../components/TaskGroup'

const TodaysTask = () => {
  return (
    <>
    <TopHeader />
    <Date />
    <CategoryTitle/>
    <Progress />
    <TaskGroup />
    <Navbar />
    </>
  )
}

export default TodaysTask

import React from './node_modules/react'
import { TransactionRow, JobRow, CategoryRow } from './TableRow'

export const TransactionList = ({ data }) => data.map(info => {
  if (info.jobInfo === null) {
    return null
  }
  console.log(data)
  return <TransactionRow key={info.jobInfo._id || Math.random()} {...info} />
})

export const JobList = ({ data }) => data.map(data => (
  <JobRow key={`${data.jobInfo._id}${Math.random()}` || Math.random()} {...data} />
))

export const CategoryList = ({ data, handleShowEditCategory, handleShowDeleteCategory }) => data.map(data => (
  <CategoryRow key={data._id}
    handleShowEditCategory={() => handleShowEditCategory(data._id, data.category)} handleShowDeleteCategory={() => handleShowDeleteCategory(data._id, data.category)} {...data} />
))

import React, { useState, useEffect, useRef } from './node_modules/react'
import { Table } from './node_modules/react-bootstrap'
import * as PageTable from './styles'
import { TableHead } from './TableParts'
import { TransactionList, JobList, CategoryList } from './TableList'
import { CardHeader as Header } from '../../theme/style/typeface'
import Pagination from '../Tools/Pagination'
import { SortInput } from '../Input'
import { TransactionDropDown } from '../DropDown'

export const DashboardTable = ({ 
  title,
  data,
  pageInfo,
  setPagination,
  allUsers,
  pageUsers,
  newindexOfFirstUser,
  handlePagnationUp,
  handlePagnationDown,
  handleDataRange,
  pageNumbers,
  selectedPage
 }) => {
  let header
  if (title) {
    header = (
      <Header>
        <p>{title}</p>
      </Header>
    )
  }
  // const newData = data.slice(0, 10)
  return (
    <PageTable.Wrapper>
      <PageTable.Container>
        {header}
        <Table id='myTable'>
          <TableHead>
            <th>date</th>
            <th>job info</th>
            <th>paid by</th>
            <th>amount</th>
            <th>paid to</th>
          </TableHead>
          <tbody>
            <TransactionList data={data} />
          </tbody>

        </Table>
        { setPagination ? <Pagination
          data={pageInfo}
          allUsers={allUsers}
          pageUsers={pageUsers}
          newindexOfFirstUser={newindexOfFirstUser}
          handlePagnationUp={handlePagnationUp}
          handlePagnationDown={handlePagnationDown}
          handleDataRange={handleDataRange}
          pageNumbers={pageNumbers}
          selectedPage={selectedPage}
          pageLimit={pageInfo.pageLimit}
          upperPageBound={pageInfo.upperPageBound}
          lowerPageBound={pageInfo.lowerPageBound}
        /> : null }
      </PageTable.Container>
    </PageTable.Wrapper>
  )
}

export default Table

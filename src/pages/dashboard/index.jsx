import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Table from '../../components/table'
// import Dashboard from '../../components/dashboard'

export default class index extends Component {

  state = {
    loading:false,
    filterLoading: false,
    firstPage: 1,
    currentPage: 1,
    usersPerPage: 5,
    pageLimit: 5,
    upperPageBound: 5,
    lowerPageBound: 0,
    showFilter: false,
    showDisableModal:false,
    showConfirmDisableModal: false,
    showEnableModal:false,
    showConfirmEnableModal: false,
    disableUserMessage:'',
    showDisableMessage:false,
    message:'Disabled by admin',
    otherMessage:'',
    clickedUser:{
      id:'',
      name:''
    },
    data:[],
    query:'',
    categories:[],
    spinner:true
  }

  
  scrollToTop =()=> window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
   handlePagnationUp = (e) => {
    e.target.blur()
    if (this.state.currentPage >= this.state.firstPage) {
       this.setState((prevState, props) => {
        return {currentPage: prevState.currentPage + 1};
      }, ()=> this.scrollToTop())
    }
    if (this.state.currentPage === this.state.upperPageBound) {
      let upperPageBound = this.state.upperPageBound + this.state.pageLimit
      let lowerPageBound = this.state.lowerPageBound + this.state.pageLimit
      this.setState((prevState, props) => {
       return { upperPageBound, lowerPageBound }
     })
   }
  }
 handlePagnationDown = (e) => {
    e.target.blur()
    if (this.state.currentPage === this.state.lowerPageBound + 1) {
      let upperPageBound = this.state.upperPageBound - this.state.pageLimit
      let lowerPageBound = this.state.lowerPageBound - this.state.pageLimit
      this.setState((prevState, props) => {
       return { upperPageBound, lowerPageBound }
     })
   }
   if (this.state.currentPage !== this.state.firstPage) { 
     this.setState((prevState, props) => {
      return {currentPage: prevState.currentPage - 1};
    }, ()=> this.scrollToTop())
  }
  }
    handleDataRange = e => {
    e.target.blur()
    const callback = () => {
      this.renderPageNumbers()
      this.scrollToTop()
    }
    
    let numberToShow = Number(e.target.value)
    return this.setState({ usersPerPage: numberToShow, currentPage: 1 }, ()=>setTimeout(() => {
      
      callback() }, 100))
  }

  renderPageNumbers = () =>{ 
    let pageList = []
    let length = Math.ceil( this.state.data.length / this.state.usersPerPage)
    for(let index = 1; index <= length; index++) {
    const element = {
      id: index,
      page: index
    };
    pageList.push(element)
  }
 return pageList
}
selectedPage = page =>{
  this.scrollToTop()
  this.setState({currentPage: page})
}
componentDidMount(){
  this.renderPageNumbers()
}
  render () {
    const indexOfLastUser = this.state.currentPage * this.state.usersPerPage
    const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage
    const currentUsers = this.state.data.slice(indexOfFirstUser, indexOfLastUser)
    const allUsers = this.state.data.length
    let newindexOfFirstUser = indexOfFirstUser + 1
    let pageUsers = currentUsers.length + indexOfFirstUser
    console.log(this.props.data)
    return (
      <>
        {/* this component handles setting the title and dynamically injecting head specific tags */}
        <Helmet>
          <meta charSet='utf-8' />
          <title> Dashboard </title>
        </Helmet>
        <Table {...this.state} 
        data={this.props.data}
        setPagination ={false} 
        // data={this.state}
        // allUsers={allUsers}
        // pageUsers={pageUsers}
        // newindexOfFirstUser={newindexOfFirstUser}
        // handlePagnationUp={this.handlePagnationUp}
        // handlePagnationDown={this.handlePagnationDown}
        // handleDataRange={this.handleDataRange}
        // pageNumbers={this.renderPageNumbers}
        // selectedPage={this.selectedPage}
        // pageLimit={this.state.pageLimit}
        // upperPageBound={this.state.upperPageBound}
        // lowerPageBound={this.state.lowerPageBound}
        />
      </>
    )
  }
}

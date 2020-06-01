import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
// import Navbar from '../../components/navbar'
import {Header, SubHeader} from '../../themes/style/typeface'
import {FilterCard} from '../../components/card'
import '../../themes/sass/pages/Home.sass'

export default class index extends Component {

  state={
    data:[{
	"id": 1,
	"start_year": 1991,
	"end_year": 2009,
	"gender": "male",
	"countries": ["Brazil", "Ireland", "Egypt", "Poland", "Niger", "Greece", "Peru"],
	"colors": ["Green", "Violet", "Yellow", "Blue"]
}, {
	"id": 2,
	"start_year": 1990,
	"end_year": 2010,
	"gender": "",
	"countries": ["Russia", "Portugal", "Vietnam", "Croatia", "Uganda", "Iran"],
	"colors": ["Teal", "Maroon", "Red"]
}, {
	"id": 3,
	"start_year": 2001,
	"end_year": 2009,
	"gender": "female",
	"countries": [],
	"colors": ["Red", "Aquamarine", "Orange", "Mauv"]
}, {
	"id": 4,
	"start_year": 1990,
	"end_year": 2000,
	"gender": "",
	"countries": ["United States"],
	"colors": []
}, {
	"id": 5,
	"start_year": 2000,
	"end_year": 2009,
	"gender": "",
	"countries": ["Myanmar", "South Africa", "Nicaragua", "Finland", "Cuba", "Mexico"],
	"colors": []
}]
  }
handleFilterRequest = filter => {
  this.props.handlePageLoader(true)
const countries = filter.countries.map(country=>(
  {'country': country}
))
const colors = filter.colors.map(color=>(
  {'car_color': color }
))
const gender = filter.gender && filter.gender === 'female' ? 'Female' : filter.gender && filter.gender === 'male' ? 'Male' : ''
this.props.handleFilterRequest({...filter, gender, countries, colors})
.then((result) => {
  this.props.handlePageLoader(false)
  this.props.history.push('/dashboard')
  console.log(result);
}).catch((err) => {
  console.log(err);
});

}
  componentDidMount (){
    this.props.handleFetchFilters()
    .then(results => console.log('results:', results))
  }
  render () {
    return (
      <>
        {/*  this component handles setting the title and dynamically injecting head specific tags */}
        <Helmet>
          <meta charSet='utf-8' />
          <title>Home Page</title>
        </Helmet>
        <div id='_home'>
         
          <Header className='text-center' margin='30px auto 5px'>
            Welcome to the Car Owner Filter App
          </Header>
          <SubHeader className='text-center' margin='0 auto'>
            This is webApp we shpw you a list of car owners <br />
            from around the world
          </SubHeader>


          <SubHeader className='text-center' margin='30px auto 10px'>
            Please select for the list blow to get a pre filtered list
          </SubHeader>
          <div className='container mt-5'>
              <div className='row justify-content-start px-5'>
                  {this.state.data && this.state.data.length > 0 ? this.state.data.map(filters =>(
                    <FilterCard key={filters.id} {...filters} onClick={()=>this.handleFilterRequest(filters)}/>
                  )) :  <SubHeader className='text-center' margin='0 auto'>
                      No Filters Found!
                    </SubHeader>}
              </div>
          </div> 
        </div>
      </>
    )
  }
}

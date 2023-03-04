import React from 'react'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import List from '../../components/table/List'
import "./Single.scss"

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>
        <div className='top'>
          <div className='left'>
            <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img src='https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg' alt='' className='itemImg'/>
              <div className='details'>
                <h1 className='itemTitle'>H@rtman Muasa</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>harman.muasa@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+254784130692</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>Thika rd Kasarani Nairobi</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country</span>
                  <span className='itemValue'>Kenya</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className='bottom'>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single
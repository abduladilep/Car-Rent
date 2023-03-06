import React, { useEffect } from 'react'
import DefualtLayout from '../Components/DefualtLayout'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../Redux/Actions/CarsAction'
import { Row, Col } from 'antd';
import Spinner from '../Components/Spinner'



function Home() {

  const { cars } = useSelector(state => state.CarsReducer)
const {loading} = useSelector(state => state.alertsReducer)

  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getAllCars())
  }, [])


  return (
    <div>
      <DefualtLayout>
        {loading === true && (<Spinner/>)}


        <Row justify="center" gutter={16} className='mt-5' >

          {cars.map(car => {
            return <Col lg={5} sm={24} xs={24}>
              <div className="car p-2  bs1 ">
                <img src={car.image} className="carimg" alt='' />

                <div className="car-content d-flex align-items-center justify-content-between">
                  <div  >
                    <p>{car.Name}</p>
                    <p>500  Rent Per Hour</p>
                  </div>
                  <div>
                    <button className="btn1 mr-2">Book Now</button>
                  </div>


                </div>
              </div>



            </Col>
          })}
        </Row>



      </DefualtLayout>


    </div>
  )
}

export default Home

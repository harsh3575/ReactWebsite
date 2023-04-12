import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

const Service = () => {
    return (<>
        <div className='my-5'>
            <h1 className='text-center'>Our Service</h1>
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row'>
                        {Sdata.map((e, index) => {
                            return <Card key={index} img={e.imgsrc} tit={e.topic} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>)
}


export default Service
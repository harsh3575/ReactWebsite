import React, { useState } from 'react'


const Contact = () => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        mess: ""
    })
    const Susano = (e) => {
        let { value, name } = e.target
        setData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    return (<>
        <div className='my-5'>
            <h1 className='text-center'>Contact Us</h1>
        </div>
        <div className='container contact_div'>
            <div className='row'>
                <div className='col-md-6 col-10 mx-auto'>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                        <input
                            type="text"
                            onChange={Susano}
                            className="form-control"
                            name='name'
                            id="exampleFormControlInput1"
                            placeholder="Enter Your Full Name"
                            value={data.name}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Phone Number </label>
                        <input
                            type="email"
                            onChange={Susano}
                            className="form-control"
                            name='phone'
                            id="exampleFormControlInput1"
                            placeholder="Enter Phone Number"
                            value={data.phone}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input
                            type="email"
                            onChange={Susano}
                            className="form-control"
                            name='email'
                            id="exampleFormControlInput1" placeholder="name@example.com"
                            value={data.email}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea
                            className="form-control"
                            onChange={Susano}
                            name='mess'
                            id="exampleFormControlTextarea1"
                            rows="3"
                            value={data.mess}>
                        </textarea>
                    </div>
                    <div className="col-12">
                        <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={() => {
                                alert(`Name : ${data.name} Phone : ${data.phone} Email : ${data.email} mess : ${data.mess}`)
                                setData({
                                    name: "",
                                    phone: "",
                                    email: "",
                                    mess: ""
                                })

                            }}>
                            Submit form</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Contact
import React from 'react'

const Login = () => {
  return (
    <>
    <div className="container my-5 p-3  " style={{width:"600px",
        border:'2px solid yellow',
        borderRadius:'10px'
        }}>
        <h2 className='text-center'>Login</h2>
        <form style={{
            width:'420px',
            margin:'auto'
        }}
        className='my-3 p-3'
        >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="container d-grid col-6 ">
  <button type="submit" className="btn btn-primary my-3">Login</button>

  </div>
  
</form>
    </div>
    </>
  )
}

export default Login

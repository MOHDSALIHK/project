import React from 'react'

export default function Login() {
  return (
    <div>
         <div className='box' style={{height:'350px',width:'320px',border:'3px solid',marginLeft:'40%',marginTop:'115px'}}>
           
            <label style={{marginLeft:'30px',marginTop:'50px',fontSize:'15px'}}><b>Email or Mobile number</b></label> <br></br>
            <input style={{marginLeft:'30px',height:'25px',width:'200px',marginTop:'7px',border:'2px solid',borderBlockColor:'grey',borderRightColor:'grey',borderLeftColor:'grey'}} type='text'className='inp'></input><br></br><br></br>
            <button style={{marginLeft:'30px',height:'25px',width:'200px',marginTop:'7px',border:'2px solid',borderBlockColor:'grey',borderRightColor:'grey',borderLeftColor:'grey'}} >Continue</button>
         </div>

    </div>
  )
}

{/*  <div style={{ marginLeft: '35%', marginTop: '120px' }}>
            <div style={{
                height: '370px', width: '520px', border: '2px solid', background: ' rgb(2,0,36)',
                background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(172,16,167,1) 0%, rgba(80,159,187,1) 0%, rgba(145,190,208,1) 0%, rgba(82,84,198,1) 0%, rgba(66,86,200,1) 50%, rgba(193,91,228,1) 89%)'
            }}  >
                <div style={{ height: '320px', background: 'white', width: '460px', border: '2px solid', marginLeft: '30px', marginTop: '25px' }} className='ml-auto'>
                    <div >
                        <h6 style={{ color: 'blue', marginLeft: '62%', marginTop: '20%' }}>USERLOGIN</h6>
                        <form>
                            <input style={{ marginLeft: '50%', height: '35px', width: '200px' }} type='text' placeholder='Email'></input><br></br><br></br>
                            <input style={{ marginLeft: '50%', height: '35px', width: '200px' }} type='password' placeholder='Enter your password'></input>
                            <button style={{
                                background: 'rgb(2,0,36)',
                                background: ' linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(172,16,167,1) 0%, rgba(145,190,208,1) 0%, rgba(82,84,198,1) 0%, rgba(216,25,216,1) 0%)', height: '36px', width: '130px', marginLeft: '55%', marginTop: '4%'
                            }} class="btn ">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  */}
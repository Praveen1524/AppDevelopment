import React, { useState } from 'react'
import '../styles/register.css';

// import './AddAccount.css'
// import NavAd from './NavAd';
let account_number = 100000;

const AddAccount = () => {

  const [user,setuser] = useState(0)
  const [username,setusername] = useState('PRAVEEN K')
  const [email,setemail] = useState('727721euit113@skcet.ac.in')
  const [mobile,setmobile] = useState('9345536789')
  const [dob,setdob] = useState('01052004')
  const [address,setaddress] = useState('eswadfcff')
  const [amount,setamount] = useState('100')


  const addUser = async (e) =>{

    e.preventDefault();

    const response = fetch('https://backend-bankapp.onrender.com/addaccount',{
    method : 'POST',
    headers : {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body : JSON.stringify({
      username,
      email,
      amount,
    })
   })
   .then(res => setuser(res.status))
  }

  if(user === 200)
    alert('User Created')

  return (
    <div>
      
    <div >
        <div className="regbg">
          <form className='regform' onSubmit={addUser}>
          <h2 >Add Your Account </h2>
          <label for="username">Name:</label>
          <input type="text" placeholder='Name' value={username} onChange={e => setusername(e.target.value)} />
          <label for="email">Email:</label>
          <input type="text" placeholder='Email' value={email} onChange={e=> setemail(e.target.value)} />
          <label for="mobile">Mobile Number:</label>
          <input type="number" placeholder='Mobile Number' value={mobile} onChange={e => setamount(e.target.value)} />
          <label for="dob">Date of Birth:</label>
          <input type="date" placeholder='DOB' value={dob} onChange={e => setamount(e.target.value)} />
          <label for="address">Address:</label>
          {/* <input htmlFor="message" value={address} onChange={e => setamount(e.target.value)} /> */}
          <textarea id="message" rows="4" />
          <label for="amount">Amount:</label>
          <input type="number" placeholder='Amount' value={amount} onChange={e => setamount(e.target.value)} />
         <br></br>
          <button>Add User</button>
          </form>
        </div>
    </div>
    </div>
  )
}

export default AddAccount
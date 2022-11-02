import React from 'react'
import './Header.css'
import { FaPeopleArrows} from "react-icons/fa";

function Header() {
  return (
     <>
        <h1> Welcome Agent
     <br/><FaPeopleArrows />
        </h1>
        <h1> To Create a Business Consultant Profile please complet these Demat Account sales</h1>
            <h2> 1. ICICI Demat Account</h2>
            <a href='https://leads.banksathi.com/?h=SVFUbUhleU1oV0tHb09aQzZ5MVpzUT09' target="blank"> <button className='btn'>
                Apply Now
            </button></a>
            <h2>2. Bajaj Securities Demat Account</h2>
            <a href='https://sales.gromo.in/bs/w6hYea9VOs2XMaftTiHgu' target="blank"> <button className='btn'>
                Apply Now
            </button></a>
            <h1> After completion of these Demat account you can send new agent orignal ID like Aadhar, Pan, One-cancel cheque on this E-mail ID- Anubhavelamba@gmail.com or Whatsapp-9991787186</h1>
     </>
  )
}

export default Header
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const AddVlog = () => {
   navigate("/AddVlog");
  }
  return (
    <div className="Footer">
      <button className="AddVlogButton" onClick={AddVlog}>+</button>
    </div>
  )
}

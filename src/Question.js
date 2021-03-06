import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title,info}) => {
  const [show,setShow] = useState(false)
  return <article className='question'>
          <header>
          <h3>{title}</h3>
          <button className="btn" onClick={()=>setShow(!show)}>{show? <AiOutlineMinus/>:<AiOutlinePlus/>}</button>
          </header>
          <p>{show?info:''}</p>
        </article>;
};

export default Question;

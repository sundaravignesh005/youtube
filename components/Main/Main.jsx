import React from "react";
import './main.css';
import { MdDescription } from "react-icons/md";


const Data=[
  {
    id:1,
    destTittle:'Bali Island',
  
    location:'India',
    grade:'culturals relax',
    fees:'$500',
    description:'lorem',
  },
  {
    id:1,
    destTittle:'Bali Island',
    location:'India',
    grade:'culturals relax',
    fees:'$500',
    description:'lorem',
  },
  {
    id:1,
    destTittle:'Bali Island',
    location:'India',
    grade:'culturals relax',
    fees:'$500',
    description:'lorem',
  },
  {
    id:1,
    destTittle:'Bali Island',
    location:'India',
    grade:'culturals relax',
    fees:'$500',
    description:'hi bro',
  },
]

const Main=()=>{
  
  return (
    <>
    <section className="main container section">
      <div className="secTittle">          
      <h10>
        most viwed
         
          </h10>
        
      </div>
      <div className="secContent grid">
       
       {
        Data.map(({id,location,description,destTittle,fees,grade})=>{
        return(
          <div key={id} className="singleDestination">            
          </div>
        )
        })
       }
    
      </div>
    </section>
    </>
  )
}

export default Main
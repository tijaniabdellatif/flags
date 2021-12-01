import React from 'react';
import styled from 'styled-components';

function Country(props) {
    return (
        <Wrapper>

         <div className="flag">
              <img src={props.flag} alt={props.name} />
             <div className="badge">
              <span>{props.spelling}</span>
             </div>

         </div>

         <div className="information">
              
               <div className="names">
                   <h5>{props.name}</h5>
                   <h5>{props.nameArabic}</h5>
                   <p className="capital">Capital : <span>{props.capitalName}</span></p>
               </div>

               <div className="details">
                   <p className="region">
                       Region : {props.region}
                   </p>
                   <p className="sub">subRegion : <span>{props.subregion}</span> </p>
               </div>
             
             
         </div>

         <div className="buttons">
            <a className="btn" href={props.click} target="_blank">View on map</a>
         </div>
            
        </Wrapper>
    )
}
const Wrapper = styled.div`
  
  border:1px solid black;
  display:grid;
  width:100%;
  grid-template-areas:'flag flag information'
                       'flag flag information'
                       'buttons buttons information';

 grid-template-columns: 1fr 1fr 1fr;         
 border:none;
 border-radius:10px;
 padding:1rem;
 box-shadow:var(--dark-shadow);       


    .flag{

        grid-area:flag;
        place-items:center;
       

        img{

            width:60%;

            
        }
    }

    .information{

        grid-area:information
    }

    .buttons{

        grid-area:buttons;
    }

`;
export default Country;

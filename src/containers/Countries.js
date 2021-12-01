
import React from 'react';
import styled from 'styled-components';
import classes from './countries.module.css';
import CustomButton from '../components/Buttons/CustomButton';
import Loading from '../components/UI/Loading';
import {useAppContext} from "../context/app_context";
import Country from '../components/controllers/Country';
function Countries() {

    const titleClass = `${classes.title}`;

    const {
        dataLoading:loading,
        dataError:error,
        dataCountries:countries,
    } = useAppContext();

    console.log(countries);

    if(error){

        return(<div>Error</div>)
    }

    else {
        return (
            <Wrapper>
    
                <div className="container-title">
                    <h1 className={titleClass}>World Countries</h1>
                </div>
                 <div className="filters">
    
                     <CustomButton variant='contained' text="All" color='warning' click={() => console.log('clicked')} />
                     <CustomButton variant='contained' text="Europe" color='warning' />
                     <CustomButton variant='contained' text="Afrique" color='warning' click={() => console.log('clicked')} />
                     <CustomButton variant='contained' text="Asie" color='warning' click={() => console.log('clicked')} />
                     <CustomButton variant='contained' text="America" color='warning' click={() => console.log('clicked')} />
                     <CustomButton variant='contained' text="Oceanie" color='warning' click={() => console.log('clicked')} />
                 </div>
    
                 <div className="countries">
                  
                   {
                       loading ? <Loading /> :
                       
                      countries.map((item,index) => {
                          console.log(item);

                        const {flags,name,translations,capital,region,subregion,maps} = item;
                      

                           return(<Country
                             {...item}  flag={flags.png}  key={index}

                             name={name.common}
                             nameArabic={translations.ara.official}
                             capitalName={capital}
                             region={region}
                             subregion={subregion}
                             click={maps.openStreetMaps}
                           
                             
                             />)
                      })
                   }
    
                   
                 </div>
    
                 <div className="pagination">
    
                     PAgination
    
                 </div>
            </Wrapper>
        )
    }
  
    
}

const Wrapper = styled.section`


 display:grid;
 grid-template-areas:'. header .'
                      '. filters .'
                      'countries countries countries'
                      'pagination pagination pagination';

grid-gap:10px;
place-items:center;
margin:0 1rem;
                      

 .container-title{

    width:100%;
    background:transparent;
    padding:1rem;
    margin:1rem auto;
    box-shadow:var(--dark-shadow);
    grid-area:header;
 }

 .filters{

    width:100%;

    grid-area:filters;
    margin:0 1rem;
    padding:1rem;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;

 }

 .countries{

    grid-area:countries;
    width:100%;
    height:auto;
    margin:0 10rem;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-gap:20px;
  
 }

 .pagination{
     grid-area:pagination;
     width:100%;
     height:auto;
     margin:0 10rem;
 }

`

export default Countries;

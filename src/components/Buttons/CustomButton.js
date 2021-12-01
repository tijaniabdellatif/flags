import React from 'react';
import {Button} from '@mui/material';


const CustomButton = (props) => {

    return(
        <>
            <Button 
            variant={props.variant} 
            color={props.color}
            classes={props.classes}
            endIcon={props.icon}
            onClick={props.click}
            >
               {props.text}
            </Button>
        </>
    );

}


export default CustomButton;
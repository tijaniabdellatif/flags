import React from 'react';
import Typography from '@mui/material/Typography';

function CustomTitle({variant,text,component,align,myclass,href}) {
    return (
        <>

        <Typography 
        align={align}  
        variant={variant} 
        component={component}
        classes={myclass}
        href={href}
        >

            {text}

        </Typography>
            
        </>
    )
}

export default CustomTitle;

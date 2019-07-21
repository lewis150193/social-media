import React from 'react'
import { Tooltip, IconButton} from '@material-ui/core';

export default ({children, onClick, BtnClassName, TipClassName, TipTitle}) => (
    <Tooltip title={TipTitle} className={TipClassName}>
         <IconButton onClick={onClick} className={BtnClassName}>
             {children}
         </IconButton>
    </Tooltip>
)
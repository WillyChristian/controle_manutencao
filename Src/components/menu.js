import React from 'react';
import {
    Menu,
    MenuItem,
    Button,
    Link
} from '@material-ui/core'

const MeuMenu = () => {

    const [statusMenus, setStatusMenu] = React.useState(null)

    const handleClick =(event)=>{
        setStatusMenu(event.currentTarget)
    }

    const handleClose = () =>{
        setStatusMenu(null)
    }
    return (
        <>
        <Button 
        aria-control= "list-tecnicos" 
        aria-haspopup="true" 
        onClick={handleClick}
        variant="outlined"
        >
            Lista de Técnicos
        </Button>                    
        <Menu 
            id="list-tecnicos" 
            keepMounted 
            anchorEl={statusMenus} 
            open={Boolean(statusMenus)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClick}>
                <Link  href="/willy">
                    <a>Willy</a>
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClick}>
                <Link  href="/galileo">
                    <a>Galileu</a>
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClick}>
                <Link  href="/messias">
                    <a>Messias</a>
                </Link>
            </MenuItem>
        </Menu>
        </>
    )
}

export default MeuMenu
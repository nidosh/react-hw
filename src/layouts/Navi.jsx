import React, { useState } from 'react'
import {
    MenuMenu,
    MenuItem,
    Menu,
    Container,
} from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import CartSummary from './CartSummary'
import { useNavigate } from 'react-router-dom'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    const navigate = useNavigate()

    function handleSignOut() {
        setIsAuthenticated(false)
        navigate('/');
    }


    function handleSignIn(){
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed>
                <Container>
                    <MenuItem
                        name='home'
                    />
                    <MenuItem
                        name='messages'
                    />
                    <MenuMenu position='right'>
                        <CartSummary/>
                        {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
                    </MenuMenu>

                </Container>

            </Menu>
        </div>
    )
}
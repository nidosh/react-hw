import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    DropdownMenu,
    DropdownItem,
    Dropdown

} from 'semantic-ui-react'

export default function CartSummary() {
    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                <DropdownMenu>
                    <DropdownItem>Macbook Air</DropdownItem>
                    <DropdownItem>Asus Laptop</DropdownItem>
                    <DropdownItem>Dell Laptop</DropdownItem>
                    <Dropdown.Divider/>
                    <DropdownItem as={NavLink} to="/cart">Sepete Git</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
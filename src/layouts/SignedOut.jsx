import React from 'react'
import { Button,Menu } from 'semantic-ui-react'

function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={signIn} inverted color='pink'>Giriş Yap</Button>
                <Button inverted color='pink' style={{marginLeft:'0.5em'}}>Kayıt Ol</Button>
            </Menu.Item>
        </div>
    )
}
export default SignedOut;
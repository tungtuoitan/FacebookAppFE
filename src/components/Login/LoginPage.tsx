// import facebookBlue from '@src/assets/facebook-blue.svg';
import {Button, Link, Paper, TextField} from '@mui/material'
import facebookBlue from '@src/assets/facebook-blue.svg'
import {loginConstants} from './loginConstants';
import styled from 'styled-components';

const LeftW = styled('div')({
})
const RightW = styled('div')({
})

export const LoginPage = () => {

    return <>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f0f0',
            justifyItems: 'center',
            // border: '1px solid blue',
            
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '40px',
            }}>
                <LeftW style={{
                    width: '500px',
                    height: '100%',
                    paddingTop: '40px'
                }}>
                    <div style={{width: '320px', height: '106px', marginBottom: '20px'}}>
                        <img src={facebookBlue} alt="Logo" style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <p style={{fontSize: '28px', color:'#1c1e21', margin: '-20px 0 0 28px'}}>
                    Facebook helps you connect and share with the people in your life.
                    </p>
                </LeftW>
                <RightW>
                    <div>
                    <Paper elevation={3} 
                    style={{
                        width: '396px',
                        height: 'auto',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '8px',
                        
                    }}>
                        <TextField
                            variant="outlined"
                            label="Email address or phone number"
                            name='emailOrPhone'
                            fullWidth
                            sx={{
                                height: '52px',
                                '& .MuiInputBase-root': {
                                    height: '52px',
                                },
                                marginBottom: '14px'
                            }}
                        />
                            <TextField
                            variant="outlined"
                            label="Password"
                            name='password'
                            fullWidth
                            sx={{
                                height: '52px',
                                '& .MuiInputBase-root': {
                                    height: '52px',
                                },
                                marginBottom: '14px' 
                            }}
                        />
                        <Button 
                            style={{
                                background: loginConstants.blueStandard,
                                color: loginConstants.whiteStandard,
                                fontSize: '20px',
                                textTransform: "none" ,
                                width: '100%',
                                marginBottom: '6px',
                                padding: '0px 16px',
                                height:'48px'

                            }}>
                            Login
                        </Button>
                        <Link href="#" style={{textDecoration: 'none', color: '#1877f2', fontSize: '14px', marginTop: '10px'}}>Forgotten password?</Link>
                        <div style={{height:'1px', width: '100%', margin: '20px 16px', background:'#00000030'}}> </div>
                        <Button 
                            style={{
                                background: loginConstants.greenStandard,
                                color: loginConstants.whiteStandard,
                                fontSize: '17px',
                                textTransform: "none" ,
                                // width: '100%',
                                padding: '0px 16px',
                                height:'48px',
                                marginBottom: '6px',
                                marginTop: '6px',

                            }}>
                            Create new account
                        </Button>
                    </Paper>
                    </div>
                    <p style={{marginTop: '20px', textAlign:'center'}}>
                        <a style={{color:'black', marginRight:'6px'}}><strong>Create a Page</strong></a>
                        <span>

                        for a celebrity, brand or business.
                        </span>
                    </p>
                </RightW>
            </div>
        </div>
    </>
}
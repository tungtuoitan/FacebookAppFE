// import facebookBlue from '@src/assets/facebook-blue.svg';
import {Button, IconButton, InputAdornment, Link, Paper, TextField} from '@mui/material'
import facebookBlue from '@src/assets/facebook-blue.svg'
import {loginConstants} from './loginConstants';
import styled from 'styled-components';
import googleIcon from '@src/assets/google-icon.webp'
import {useLoginStore} from './LoginStore';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {loginByDefault} from './LoginHelpers';
import {useSnackbar} from 'notistack';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const LeftW = styled('div')({
})
const RightW = styled('div')({
})


export const LoginPage = () => {
    const {emailOrPhone, setEmailOrPhone, password, setPassword, showPassword, setShowPassword} = useLoginStore();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
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
                            value={emailOrPhone}
                            onChange={(e) => setEmailOrPhone(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                fullWidth
                                type={showPassword ? 'text' : 'password'}
                                sx={{
                                    height: '52px',
                                    '& .MuiInputBase-root': {
                                        height: '52px',
                                    },
                                    marginBottom: '14px',
                                     // Thêm CSS để ẩn icon mặc định của trình duyệt
                                        "& input::-ms-reveal, & input::-ms-clear": {
                                            display: "none", // Ẩn icon trên Edge
                                        },
                                        "& input::-webkit-credential-autofill-button, & input::-webkit-textfield-decoration-container": {
                                            display: "none", // Ẩn icon trên Chrome
                                        },
                                        "& input[type='password']": {
                                            // Đảm bảo icon mặc định không hiển thị
                                            WebkitTextSecurity: showPassword ? "none" : "disc", // Điều chỉnh kiểu hiển thị mật khẩu
                                        },
                                }}
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label={
                                                        showPassword ? 'hide the password' : 'display the password'
                                                    }
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                    sx={{
                                                        "&": {
                                                            outline: "none !important", // Xoá viền focus
                                                            border: "none !important", // Xoá viền focus
                                                        }
                                                    }}
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }
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
                                }}
                                onClick={() => {
                                    console.log('Login clicked');
                                    loginByDefault({
                                        token: '',
                                        emailOrPhone,
                                        password,
                                        enqueueSnackbar
                                    })
                                }}
                                >
                                Login
                            </Button>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                                <GoogleOAuthProvider clientId={loginConstants.googleClientId}>
                                    <GoogleLogin
                                        onSuccess={(response) => {
                                            console.log("Login Success:", response);
                                        }}
                                        onError={() => {
                                            console.log("Login Failed");
                                        }}
                                        />
                                    {/* <IconButton
                                        style={{
                                            margin: '6px',
                                            padding: '0px 16px',
                                            height:'32px',
                                            width: '32px',

                                        }}>
                                        <img src={googleIcon} alt="Login with google" style={{width: '32px', height: '32px'}}/>

                                    </IconButton> */}

                                </GoogleOAuthProvider>
                                {/* <IconButton
                                    style={{
                                        margin: '6px',
                                        padding: '0px 16px',
                                        height:'32px',
                                        width: '32px',

                                    }}>
                                    <img src={xIcon} alt="Login with google" style={{width: '32px', height: '32px'}}/>

                                </IconButton> */}
                            </div>
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
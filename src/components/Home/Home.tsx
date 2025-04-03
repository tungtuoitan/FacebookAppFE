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
import {_getBackendToken} from './loginApis';

const LeftW = styled('div')({
})
const RightW = styled('div')({
})


export const Home = () => {
    const {emailOrPhone, setEmailOrPhone, password, setPassword, showPassword, setShowPassword, loadingLogin, setLoadingLogin, user, setUser} = useLoginStore();
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
        hiiiiiiiiiiiiiiiiiii
        </div>
    </>
}
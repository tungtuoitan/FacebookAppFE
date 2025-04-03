// import facebookBlue from '@src/assets/facebook-blue.svg';
import styled from 'styled-components';
import {useSnackbar} from 'notistack';
// import {useLoginStore} from './homeStore';



export const Home = () => {
    // const {emailOrPhone, setEmailOrPhone, password, setPassword, showPassword, setShowPassword, loadingLogin, setLoadingLogin, user, setUser} = useLoginStore();
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
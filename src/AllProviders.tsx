import { SnackbarKey, SnackbarProvider } from "notistack";
import { CloseNotiBtn } from "./components/CommonHelpers/1_CloseNotiBtn";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {loginConstants} from "./components/Login/loginConstants";
import {SignUpProvider} from "./components/SignUp/signUpStore";
import {SignUpFormStoreProvider} from "./components/SignUp/SignUpFormStore";
import {LoginProvider} from "./components/Login/LoginStore";

export const AllProviders = ({
    children,
}: React.PropsWithChildren<React.PropsWithChildren<unknown>>) => {
    return (
        <>
            <SnackbarProvider
                action={(id: SnackbarKey) => <CloseNotiBtn id={id} />}
                autoHideDuration={3000}
            >
                <GoogleOAuthProvider clientId={loginConstants.googleClientId}>
                    <SignUpFormStoreProvider>
                        <SignUpProvider>
                            <LoginProvider>{children}</LoginProvider>
                        </SignUpProvider>
                    </SignUpFormStoreProvider>
                </GoogleOAuthProvider>
            </SnackbarProvider>
        </>
    );
};

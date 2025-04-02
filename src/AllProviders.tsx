import { SnackbarKey, SnackbarProvider } from "notistack";
import { LoginProvider } from "./components/Login/LoginStore";
import { CloseNotiBtn } from "./components/CommonHelpers/1_CloseNotiBtn";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {loginConstants} from "./components/Login/loginConstants";

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
                    <LoginProvider>{children}</LoginProvider>
                </GoogleOAuthProvider>
            </SnackbarProvider>
        </>
    );
};

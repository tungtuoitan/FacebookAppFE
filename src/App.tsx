import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {LoginPage} from "./components/Login/LoginPage";
// import { LoginPage } from "@src/assets/Login/LoginPage.tsx"; 

function App() {
    return (
        <div>
            <div
                style={{
                    height: "100vh",
                    backgroundColor: "#f0f0f0",
                    // border: "1px solid blue", // ** STANDARD CONTAINER (equal screeen) **
                }}
            >
                <LoginPage   />
            </div>
        </div>
    );
}

export default App;

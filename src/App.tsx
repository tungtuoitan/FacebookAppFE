import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {AllProviders} from "./AllProviders";
import {LoginPage} from "./components/Login/LoginPage";
import {AllRoutes} from "./routes";

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
                <AllProviders>
                    <AllRoutes />
                </AllProviders>
            </div>
        </div>
    );
}

export default App;

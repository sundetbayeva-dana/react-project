import {render} from "react-dom";
import App from "./App";
import './styles/index.scss';
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./themes/ThemeProvider";

render (
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>

    </BrowserRouter>,
    document.getElementById('root')
)





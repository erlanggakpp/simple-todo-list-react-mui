import "./App.css";
import CSSBaseline from "@mui/material/CssBaseline";
import Todolist from "./Todolist";

function App() {
    return (
        <>
            <CSSBaseline />
            <h1 style={{ textAlign: "center" }}>Todos</h1>
            <Todolist />
        </>
    );
}

export default App;

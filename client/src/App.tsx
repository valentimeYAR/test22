import Create from "./components/Create/Create.tsx";
import {Box} from "@mui/material";
import Check from "./components/Check/Check.tsx";

function App() {
    return (
        <Box display="flex" gap={2}>
            <Create/>
            <Check/>
        </Box>
    )
}

export default App

import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./../../routes/CustomRoutes";

function Layout() {
    return (
        <BrowserRouter>

            <main className="bg-[#071520]">
                <CustomRoutes />
            </main>

        </BrowserRouter>
    )
}

export default Layout;
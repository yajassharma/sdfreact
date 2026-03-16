import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import SmoothScrolling from "./components/SmoothScrolling";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <SmoothScrolling>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/cookies" element={<Cookies />} />
                </Routes>
            </SmoothScrolling>
        </Router>
    );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import FundDashboard from "./pages/FundDashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/fund-dashboard" element={<FundDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

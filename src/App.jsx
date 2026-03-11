import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { SiteHeader } from './components/UI';
import Home from './pages/Home';
import FlowA from './flows/FlowA';
import FlowB from './flows/FlowB';

function AppContent() {
  const navigate = useNavigate();
  return (
    <>
      <SiteHeader onHome={() => navigate('/')} />
      <Routes>
        <Route path="/"       element={<Home />} />
        <Route path="/flow-a" element={<FlowA />} />
        <Route path="/flow-b" element={<FlowB />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

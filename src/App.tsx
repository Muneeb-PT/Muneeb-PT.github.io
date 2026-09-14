import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Journey from "./pages/Journey";
import NotFound from "./pages/NotFound";

const MSF = lazy(() => import("./pages/msf/MSF"));
const SKSSF = lazy(() => import("./pages/skssf/SKSSF"));

function FallbackScreen() {
  return <div className="min-h-screen bg-bg" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/journey" element={<Journey />} />
        </Route>

        <Route
          path="/msf"
          element={
            <Suspense fallback={<FallbackScreen />}>
              <MSF />
            </Suspense>
          }
        />
        <Route
          path="/skssf"
          element={
            <Suspense fallback={<FallbackScreen />}>
              <SKSSF />
            </Suspense>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

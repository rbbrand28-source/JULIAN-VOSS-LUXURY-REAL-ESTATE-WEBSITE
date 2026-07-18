import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import Collections from "./pages/Collections";
import Intelligence from "./pages/Intelligence";
import ArticleDetail from "./pages/ArticleDetail";
import Advisor from "./pages/Advisor";
import Legacy from "./pages/Legacy";
import Salon from "./pages/Salon";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "hsl(213 50% 9%)",
            border: "1px solid hsl(33 52% 68% / 0.25)",
            color: "hsl(40 35% 93%)",
          },
        }}
      />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:slug" element={<PropertyDetail />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/intelligence" element={<Intelligence />} />
            <Route path="/intelligence/:slug" element={<ArticleDetail />} />
            <Route path="/advisor" element={<Advisor />} />
            <Route path="/legacy" element={<Legacy />} />
            <Route path="/salon" element={<Salon />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


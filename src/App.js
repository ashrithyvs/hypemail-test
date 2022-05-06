import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {
  Campaigns,
  Overview,
  Templates,
  EmailAccounts,
  Help,
  Login,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import CreateCampaignFlow from "./pages/CreateCampaignFlow";
function App() {
  const [utils, setUtils] = useState({ sideBar: true });

  const pages = [
    { Component: Overview, slug: "/" },
    { Component: Templates, slug: "/templates" },
    { Component: EmailAccounts, slug: "/email-accounts" },
    { Component: Help, slug: "/help" },
    { Component: Campaigns, slug: "/campaigns" },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <div className="overflow-hidden relative">
        <div className="flex items-start justify-between">
          {utils.sideBar ? <Sidebar utils={utils} /> : null}
          <div className="w-full flex-col space-y-4">
            <Navbar utils={utils} setUtils={setUtils} />
            <div className="px-6">
              <Routes>
                <Route
                  path="/create-campaign"
                  element={<CreateCampaignFlow />}
                />
                {pages.map((Item) => {
                  return (
                    <Route path={Item.slug} element={<Item.Component />} />
                  );
                })}
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

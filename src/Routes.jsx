import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectPagePresentation = React.lazy(() =>
  import("pages/ProjectPagePresentation")
);
const ProjectPageCalendar = React.lazy(() =>
  import("pages/ProjectPageCalendar")
);
const ProjectPageProjectLinks = React.lazy(() =>
  import("pages/ProjectPageProjectLinks")
);
const ProjectPageTeam = React.lazy(() => import("pages/ProjectPageTeam"));
const ProjectPageProjectInfo = React.lazy(() =>
  import("pages/ProjectPageProjectInfo")
);
const HackathonDetails = React.lazy(() => import("pages/HackathonDetails"));
const HackathonPage = React.lazy(() => import("pages/HackathonPage"));
const Marketplace = React.lazy(() => import("pages/Marketplace"));
const Profile = React.lazy(() => import("pages/Profile"));
const Hackathons = React.lazy(() => import("pages/Hackathons"));
const MainPage = React.lazy(() => import("pages/MainPage"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/hackathonpage" element={<HackathonPage />} />
          <Route path="/hackathondetails" element={<HackathonDetails />} />
          <Route
            path="/projectpageprojectinfo"
            element={<ProjectPageProjectInfo />}
          />
          <Route path="/projectpageteam" element={<ProjectPageTeam />} />
          <Route
            path="/projectpageprojectlinks"
            element={<ProjectPageProjectLinks />}
          />
          <Route
            path="/projectpagecalendar"
            element={<ProjectPageCalendar />}
          />
          <Route
            path="/projectpagepresentation"
            element={<ProjectPagePresentation />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ContactPage } from "../pages/ContactPage";
import { ProjectPage } from "../pages/ProjectPage";
import { DepoimentsPage } from "../pages/DepoimentsPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/depoiment" element={<DepoimentsPage />} />
    </Routes>
  );
};

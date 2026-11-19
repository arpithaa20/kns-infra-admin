import { Routes, Route } from "react-router-dom";

import ProjectList from "../pages/ProjectList";
import CreateProject from "../pages/CreateProject";
import ProjectDetails from "../pages/ProjectDetails";

const AppRoutes  = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProjectList />} />

                <Route path="/create-project" element={<CreateProject />} />

                <Route path="/project-details" element={<ProjectDetails />} />
            </Routes>
        </>
    );
};

export default AppRoutes ;

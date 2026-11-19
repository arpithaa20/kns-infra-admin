
import React, { useEffect } from "react";
import "./style.scss"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWebProjects } from "../../store/slices/getWebProjectSlice";

const ProjectList = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { projects, error } = useSelector(
        (state) => state.projects
    );

    useEffect(() => {
        dispatch(getWebProjects());
    }, [dispatch]);

    return (
        <div>
            <div className="project-list-header">
                <h1>Project List</h1>

                <button
                    className="add-project-btn"
                    onClick={() => navigate("/create-project")}
                // title="Add Project"
                >
                    +
                </button>
            </div>

            {error && <p>{error}</p>}

            {!error && (
                <table border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Project Type</th>
                            <th>Builder Name</th>
                            <th>Land Area</th>
                            <th>Total Units</th>
                            <th>RERA Status</th>
                            <th>Published</th>
                            <th>Active</th>
                        </tr>
                    </thead>

                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.project_slug}>
                                <td>{project.project_name}</td>
                                <td>{project.project_type}</td>
                                <td>{project.builder_name}</td>
                                <td>{project.land_area_acres} Acres</td>
                                <td>{project.total_units}</td>
                                <td>{project.rera_status}</td>
                                <td>
                                    {project.is_published === "1" ? "Yes" : "No"}
                                </td>
                                <td>
                                    <button
                                        onClick={() => navigate("/project-details")}
                            
                                    >
                                        {project.is_active === "1" ? "Active" : "Inactive"}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ProjectList;

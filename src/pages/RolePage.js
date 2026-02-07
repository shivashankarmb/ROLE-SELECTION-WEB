import { useParams, useNavigate } from "react-router-dom";
import { roles } from "../data/roles";
import { useEffect } from "react";

export default function RolePage() {
  const { roleName } = useParams();
  const navigate = useNavigate();

  const role =
    roles.find((r) => r.slug === roleName) ||
    roles.find((r) => r.slug === localStorage.getItem("selectedRole"));

  useEffect(() => {
    if (role) {
      document.documentElement.style.setProperty(
        "--accent",
        role.color
      );
    }
  }, [role]);

  if (!role) {
    return <div className="hero">Role not found</div>;
  }

  return (
    <div className="hero">
      <div className="role-box fade-in">
        <h1>{role.name}</h1>
        <p className="subtitle">{role.description}</p>

        <h3>Key Skills</h3>
        <div className="skills">
          {role.skills.map((skill) => (
            <span key={skill} className="skill">
              {skill}
            </span>
          ))}
        </div>

        <p className="note">
          You can manage and update your role information from this page.
        </p>

        <button onClick={() => navigate("/")}>
          Back to Role Selection
        </button>
      </div>
    </div>
  );
}

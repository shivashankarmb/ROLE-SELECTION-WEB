import { useNavigate } from "react-router-dom";
import { roles } from "../data/roles";
import { useEffect, useState } from "react";

export default function RoleSelection() {
  const navigate = useNavigate();
  const [lastRole, setLastRole] = useState(null);

  useEffect(() => {
    const savedRole = localStorage.getItem("selectedRole");
    if (savedRole) {
      setLastRole(savedRole);
    }
  }, []);

  const handleSelect = (role) => {
    localStorage.setItem("selectedRole", role.slug);
    localStorage.setItem("themeColor", role.color);
    navigate(`/role/${role.slug}`);
  };

  return (
    <div className="hero">
      <div className="hero-content fade-in">
        <h1>Welcome to the Platform</h1>
        <p className="subtitle">Choose your role to continue</p>

        {lastRole && (
          <p className="footer-text">
            Welcome back! You last selected <strong>{lastRole}</strong>
          </p>
        )}

        <div className="grid">
          {roles.map((role) => (
            <div
              key={role.slug}
              className="card"
              style={{ "--accent": role.color }}
              onClick={() => handleSelect(role)}
              role="button"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSelect(role);
                }
              }}
            >
              <div className="icon-box">{role.icon}</div>
              <h3>{role.name}</h3>
              <p className="card-text">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

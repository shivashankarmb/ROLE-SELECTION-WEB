import { useNavigate } from "react-router-dom";
import { roles } from "../data/roles";

export default function RoleSelection() {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    localStorage.setItem("selectedRole", role.slug);
    navigate(`/role/${role.slug}`);
  };

  return (
    <div className="hero">
      <div className="hero-content fade-in">
        

        <h1>Welcome to the Platform</h1>
        <p className="subtitle">Select your role to continue</p>

        <div className="grid">
          {roles.map((role) => (
            <div
              key={role.slug}
              className="card"
              role="button"
              tabIndex="0"
              aria-label={`Select ${role.name}`}
              style={{ "--accent": role.color }}
              onClick={() => handleSelect(role)}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && handleSelect(role)
              }
            >
              <div className="icon-box">{role.icon}</div>
              <h3>{role.name}</h3>
              <p className="card-text">{role.description}</p>
            </div>
          ))}
        </div>

        <p className="footer-text">
          You can always change your role later.
        </p>
      </div>
    </div>
  );
}

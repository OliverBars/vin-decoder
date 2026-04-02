import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getVariableList } from "../../api/nhtsa";
import "./Variables.css";


export default function Variables() {
  const [variables, setVariables] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchVariables() {
      try {
        const data = await getVariableList();
        setVariables(data);
      } catch (err) {
        setError(err.message || "Failed to load variables");
      } finally {
        setIsLoading(false);
      }
    }

    fetchVariables();
  }, []);

  if (isLoading) {
    return (
      <div className="variables__state">
        <p className="variables__loading">Loading variables...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="variables__state">
        <p className="variables__error">⚠ {error}</p>
      </div>
    );
  }

  return (
    <div className="variables">
      <h1 className="variables__title">Vehicle Variables</h1>
      <p className="variables__subtitle">
        {variables.length} variables available from NHTSA
      </p>

      <ul className="variables__list">
        {variables.map((variable) => (
          <li key={variable.ID} className="variables__item">
            <Link to={`/variables/${variable.ID}`} className="variables__link">
              <span className="variables__name">{variable.Name}</span>
            </Link>
            {variable.Description && (
              <p
                className="variables__desc"
                dangerouslySetInnerHTML={{ __html: variable.Description }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

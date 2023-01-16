import React, { Fragment, useEffect, useState } from "react";

function FormSectors() {
  const [formSectors, setFormSectors] = useState([]);
  useEffect(() => {
    fetch("https://project-server-ubwp.onrender.com/api/v1/sectors")
      .then((res) => res.json())
      .then((data) => setFormSectors(data.formSectors));
  }, []);

  return formSectors.map(({ value, label, children }) => (
    <optgroup className="form-group" key={value} label={label}>
      {children.map((opt) =>
        // nested options are here
        opt?.children ? (
          <Fragment key={opt.value}>
            <option key={opt.value} value={opt.value} disabled>
              {opt.label}
            </option>

            {opt?.children.map((opt2) =>
              // nested of nested options are here

              opt2?.children ? (
                <Fragment key={opt2.value}>
                  <option key={opt2.value} value={opt2.value} disabled>
                    &nbsp;&nbsp;&nbsp;&nbsp; {opt2.label}
                  </option>

                  {opt2.children.map((opt3) => (
                    <option key={opt3.value} value={opt3.value}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {opt3.label}
                    </option>
                  ))}
                </Fragment>
              ) : (
                <option key={opt2.value} value={opt2.value}>
                  &nbsp;&nbsp;&nbsp;&nbsp; {opt2.label}
                </option>
              )
            )}
          </Fragment>
        ) : (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        )
      )}
    </optgroup>
  ));
}

export default FormSectors;

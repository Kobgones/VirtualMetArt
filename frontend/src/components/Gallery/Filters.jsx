import React, { useEffect } from "react";

function Filters({
  allDepartments,
  setAllDepartments,
  searchIdDepartment,
  setSearchIdDepartment,
  setIds,
}) {
  // fetch to get all departments in the museum
  useEffect(() => {
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/departments`
    )
      .then((response) => response.json())
      .then((result) => {
        setAllDepartments(result.departments);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${searchIdDepartment}`
    )
      .then((response) => response.json())
      .then((result) => {
        setIds(result.objectIDs);
      })
      .catch((err) => console.error(err));
  }, [searchIdDepartment]);

  return (
    <div>
      <section className="pt-80 w-full flex items-center justify-around sm:inline-block">
        <div className="basis-64">
          <section className="text-center flex flex-col sm:flex-row sm:items-center sm:justify-start sm:mb-2 lg:justify-start">
            <select
              name="Exhibitions"
              id="theme-select"
              className="svg-arrow mt-6 mb-2 rounded-full text-background h-12 w-56 text-center text-xl bg-secondary hover:border hover:border-secondary hover:bg-transparent focus:outline-none appearance-none"
              value={searchIdDepartment}
              onChange={(event) => setSearchIdDepartment(event.target.value)}
            >
              <option value="">Exhibitions</option>
              {allDepartments.map((department) => (
                <option value={department.departmentId}>
                  {department.displayName}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="w-56 mb-3 text-xl text-center text-background sm:mt-6"
            >
              Clear Filters
            </button>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Filters;

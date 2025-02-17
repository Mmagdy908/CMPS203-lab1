function fetchEmployees() {
  fetch("http://localhost:3000/api/v1/employee")
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.getElementById("dataTable");
      tableBody.innerHTML = "";
      const list = data.data;
      list.forEach((item) => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        idCell.textContent = item.id;
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell);

        tableBody.appendChild(row);
      });
    })
    .catch((error) => console.error(error));
}

// TODO
// add event listener to submit button
document
  .getElementById("employeeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    createEmployee();
  });
// TODO
// add event listener to delete button
document.getElementById("dataTable").addEventListener("click", function (e) {
  const { target } = e;
  if (!target.classList.contains("btn-danger")) return;
  const id = target.closest("tr").firstElementChild.textContent;
  deleteEmployee(id);
});
// TODO
function createEmployee() {
  // get data from input field
  const nameField = document.getElementById("name");
  const idField = document.getElementById("id");

  //get name
  const name = nameField.value;

  //get id
  const id = idField.value;

  // send data to BE
  fetch("http://localhost:3000/api/v1/employee", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, name }),
  })
    .then(() => {
      // call fetchEmployees
      fetchEmployees();
    })
    .catch((error) => console.error(error));

  idField.value = nameField.value = "";
  idField.blur();
  nameField.blur();
}

// TODO
function deleteEmployee(id) {
  // get id
  // send id to BE
  fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      // call fetchEmployees
      fetchEmployees();
    })
    .catch((error) => console.error(error));
}

fetchEmployees();

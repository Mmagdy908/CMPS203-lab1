const employee = [{ id: "1", name: "Mohamed Sayed" }];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const index = employee.findIndex((emp) => emp.id === req.params.id);

  if (index === -1)
    return res.status(404).json({ status: "fail", message: "invalid id" });

  employee.splice(index, 1);
  res.status(204).json({ status: "succes", data: null });
};

// TODO
exports.createEmployee = async (req, res, next) => {
  employee.push(req.body);
  res.status(201).json({ status: "succes", data: req.body });
};

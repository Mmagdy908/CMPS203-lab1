const employee = [{ id: "1", name: "Mohamed Sayed" }];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  employee.splice(
    employee.findIndex((emp) => emp.id === req.params.id),
    1
  );
  res.status(204).json({ data: null });
};

// TODO
exports.createEmployee = async (req, res, next) => {
  employee.push(req.body);
  res.status(201).json({ data: req.body });
};

const Employee = require("../models/Employee");
// const { paginate } = require("express-paginate"); // Install express-paginate for pagination

// Fetch all employees
exports.getEmployees = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const employees = await Employee.find()
            .sort({ firstName: 1 })
            .skip((page - 1) * limit)
            .limit(limit);

        res.status(200).json({
            data: employees,
            meta: {
                total_pages: Math.ceil(await Employee.countDocuments() / limit),
                current_page: page
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching employees", error });
    }
};

// Create a new employee
exports.createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).json(employee);
    } catch (error) {
        res.status(400).json({ message: "Error creating employee", error });
    }
};

// Update an employee
exports.updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(400).json({ message: "Error updating employee", error });
    }
};

// Delete an employee
exports.deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        await Employee.findByIdAndDelete(id);
        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting employee", error });
    }
};

// Search employees
exports.searchEmployees = async (req, res) => {
    try {
        const { id, firstName, lastName } = req.query;
        
        let query = Employee.find();

        if (id) {
            query = query.where('id').equals(id);
        }

        if (firstName) {
            query = query.where('firstName').regex(new RegExp(firstName, 'i'));
        }

        if (lastName) {
            query = query.where('lastName').regex(new RegExp(lastName, 'i'));
        }

        const employees = await query.exec();

        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: "Error searching employees", error });
    }
};

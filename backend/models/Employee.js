// models/Employee.js
const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true },
    lastName: {
        type: String,
        required: true },
    address: {
        type: String,
        required: true },
    image: String,
    id: {
        type: String,
        required: true,
        unique: true},
    payroll: {
        dailyRate: Number,
        allowances: {
            thirteenthMonth: Number,
            tool: Number,
            holiday: Number,
            incentive: Number,
        },
        deductions: {
            loans: Number,
            sss: Number,
            philhealth: Number,
            pagibig: Number,
            cashAdvance: Number,
            canteen: Number,
            deductables: Number
        },
        totalDaysWorked: Number,
        project: String,
    },
});

module.exports = mongoose.model("Employee", EmployeeSchema);

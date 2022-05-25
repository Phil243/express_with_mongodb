import Student from "../models/Student.js";

export const getAllStudents = (req, res) => {};

export const getSingleStudent = (req, res) => {};

export const createNewStudent = async (req, res) => {
    try {
        const { name, first_name, email } = req.body;
        const newStudent = await Student.create({ name, first_name, email });
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteStudent = (req, res) => {};

export const updateStudent = (req, res) => {};
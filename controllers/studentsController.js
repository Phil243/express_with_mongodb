import Student from "../models/Student.js";

export const getAllStudents = async (req, res) => {
    try{
        const allStudents = await Student.find();
        res.status(200).json({
            students: allStudents
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

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

export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, first_name, email } = req.body;
        const modifiedStudent = await Student.findByIdAndUpdate(
            id,
            { name, first_name, email },
            {new: true}
        );
        res.status(200).json(modifiedStudent);
    } catch (error) {
        res.status(500).json(error);
    }
};
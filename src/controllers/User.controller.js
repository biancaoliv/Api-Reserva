const { where } = require('sequelize');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    async createUser(req, res) {
        try {
            const { name, email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User.findOne({ where: { email } });
            if (user) {
                res.status(401).json({
                    message: 'User already registered with the provided email.',
                });
            }
            const newUser = await User.create({
                name,
                email,
                password: hashedPassword,
            });

            const token = jwt.sign(
                { userId: newUser.id },
                process.env.JWT_KEY,
                {
                    expiresIn: '1h',
                },
            );

            res.status(201).json({ user: newUser, token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async userLogin(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res
                    .status(401)
                    .json({ message: 'Incorrect email or password.' });
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res
                    .status(401)
                    .json({ message: 'Incorrect email or password.' });
            }
            const token = jwt.sign({ userId: user.id }, process.env.JWT_KEY, {
                expiresIn: '1h',
            });
            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { name, email } = req.body;

            const user = await User.findOne({ where: { id } });
            if (!user) {
                res.status(401).json({
                    message: 'No user found.',
                });
            } else {
                const user = await User.update(
                    { name, email },
                    { where: { id } },
                );
                res.status(202).json({ message: 'User data updated successfully.' });
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    async listUsers(req, res) {
        try {
            const users = await User.findAll();
            if (!users) {
                res.status(200).json({
                    message: 'There is no registered user',
                });
            }
            res.status(200).json({ users });
        } catch (error) {
            res.status(401).json({ error });
        }
    },
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findOne({ where: { id } });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            } else {
                await User.destroy({ where: { id } });
                return res
                    .status(200)
                    .json({ message: 'User deleted successfully' });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
};

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    async createUser(name, email, password) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User.findOne({ where: { email } });
            if (user) {
                throw new Error(
                    'User already registered with the provided email.',
                );
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

            return { user: newUser, token };
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async userLogin(email, password) {
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                throw new Error('Incorrect email or password.');
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                throw new Error('Incorrect email or password.');
            }
            const token = jwt.sign({ userId: user.id }, process.env.JWT_KEY, {
                expiresIn: '1h',
            });
            return { token };
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async updateUser(id, name, email) {
        try {
            const user = await User.findOne({ where: { id } });
            if (!user) {
                throw new Error('No user found.');
            } else {
                await User.update({ name, email }, { where: { id } });
                return 'User data updated successfully.';
            }
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async listUsers() {
        try {
            const users = await User.findAll();
            if (!users) {
                throw new Error('There is no registered user');
            }
            return users;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async deleteUser(id) {
        try {
            const user = await User.findOne({ where: { id } });
            if (!user) {
                throw new Error('User not found');
            } else {
                await User.destroy({ where: { id } });
                return 'User deleted successfully';
            }
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

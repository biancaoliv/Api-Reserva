// userService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repository/userRepository');

module.exports = {
    async createUser(name, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);

        const userExists = await userRepository.findUserByEmail(email);
        if (userExists) {
            throw new Error('User already registered with the provided email.');
        }

        const newUser = await userRepository.createUser({
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
    },

    async userLogin(email, password) {
        const user = await userRepository.findUserByEmail(email);
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
    },

    async updateUser(id, name, email) {
        const user = await userRepository.findUserById(id);
        if (!user) {
            throw new Error('No user found.');
        }

        await userRepository.updateUser(id, { name, email });
        return 'User data updated successfully.';
    },

    async listUsers() {
        const users = await userRepository.listUsers();
        if (!users || users.length === 0) {
            throw new Error('There are no registered users.');
        }
        return users;
    },

    async deleteUser(id) {
        const user = await userRepository.findUserById(id);
        if (!user) {
            throw new Error('User not found');
        }

        await userRepository.deleteUser(id);
        return 'User deleted successfully';
    },
};

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userService = require('../../services/userService.js');
const {
    createUser,
    userLogin,
    updateUser,
    listUsers,
    deleteUser,
} = require('../../controllers/User.controller.js');
const { mockRequest, mockResponse, mockNext } = require('../test/mock.user.js');

jest.mock('../../services/userService.js');

describe('User Controller', () => {
    test('Create user successfully', async () => {
        const req = mockRequest({
            name: 'teste',
            email: 'teste@teste.com',
            password: 'teste123',
        });
        const res = mockResponse();
        const next = mockNext;

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        userService.createUser.mockResolvedValue({
            name: 'teste',
            email: 'teste@teste.com',
            password: hashedPassword,
        });

        await createUser(req, res, next);
    });
    test('User Login sucessfully', async () => {
        const req = mockRequest({
            email: 'teste@teste.com',
            password: 'teste123',
        });
        const res = mockResponse();
        const next = mockNext;
        userService.userLogin.mockResolvedValue({
            id: '1',
            name: 'teste',
            email: 'teste@teste.com',
            token: 'mock_token',
        });
        await userLogin(req, res, next);
    });
    test('Update user successfully', async () => {
        const req = mockRequest({
            params: { id: '1' },
            body: {
                name: 'novo_nome',
                email: 'novo_email@teste.com',
            },
        });
        const res = mockResponse();
        const next = mockNext;
        userService.updateUser.mockResolvedValue({
            id: 'user_id',
            name: 'novo_nome',
            email: 'novo_email@teste.com',
        });
        await updateUser(req, res, next);
    });
    test('List users successfully', async () => {
        const req = mockRequest();
        const res = mockResponse();
        const next = mockNext;
        const mockUsers = [
            { id: 'user1', name: 'Alice', email: 'alice@teste.com' },
            { id: 'user2', name: 'Bob', email: 'bob@teste.com' },
        ];
        userService.listUsers.mockResolvedValue(mockUsers);
        await listUsers(req, res, next);
    });
    test('Delete user successfully', async () => {
        const req = mockRequest({
            params: { id: '1' },
        });
        const res = mockResponse();
        const next = mockNext;

        const deletedUser = {
            id: '1',
            name: 'Alice',
            email: 'alice@teste.com',
        };
        userService.deleteUser.mockResolvedValue(deletedUser);

        await deleteUser(req, res, next);
        expect(res.status).toHaveBeenCalledWith(200);

    });
});

afterEach(() => {
    jest.clearAllMocks();
});

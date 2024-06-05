const tableService = require('../../services/tableService');
const {
    createTable,
    updateTable,
    listTables,
    deleteTable,
} = require('../../controllers/Table.controller.js');
const { mockRequest, mockResponse, mockNext } = require('../test/mock.user.js');

jest.mock('../../services/tableService.js');

describe('TableController', () => {
    test('should create a table', async () => {
        const req = mockRequest({
            table: '1',
            capacity: '2',
            availability: 'available',
            restaurantId: '1',
        });
        const res = mockResponse();
        const next = mockNext();

        tableService.createTable.mockResolvedValue({
            table: 'teste',
            capacity: '2',
            availability: 'available',
            restaurantId: '1',
        });
        await createTable(req, res, next);
    });
});
afterEach(() => {
    jest.clearAllMocks();
});

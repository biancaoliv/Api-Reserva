// mocks.js
const mockRequest = (body = {}, params = {}, query = {}) => ({
    body,
    params,
    query
  });
  
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };
  
  const mockNext = jest.fn();
  
  module.exports = {
    mockRequest,
    mockResponse,
    mockNext
  };
  
import { constructAPIGwEvent } from '../../utils/helpers';

import { exampleHandler } from '../../../src/handlers/example';

// This includes all tests for exampleHandler() 
describe('Test exampleHandler', () => { 
  it('should return ids', async () => { 
    const event = constructAPIGwEvent({}, { method: 'GET', path: '/' });

    // Invoke exampleHandler() 
    const result = await exampleHandler(event); 

    const expectedResult = { 
      statusCode: 200, 
      body: JSON.stringify({ message: 'Hello world!' }) 
    }; 

    // Compare the result with the expected result 
    expect(result).toEqual(expectedResult); 
  }); 
}); 

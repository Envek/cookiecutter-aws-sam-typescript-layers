import 'source-map-support/register';
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult
} from 'aws-lambda';

/**
 * A simple example includes a HTTP get method.
 */
export const exampleHandler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  // All log statements are written to CloudWatch
  console.debug('Received event:', event);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world!',
    })
  };
}

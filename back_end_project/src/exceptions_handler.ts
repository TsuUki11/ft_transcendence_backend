import { Catch, ArgumentsHost, ExceptionFilter } from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    // Handle the exception here
    const response = host.switchToHttp().getResponse();
    if (exception.code === 'P2002') { //unique decorator exception
        response.status(409).json({
            error: `The ${exception.meta.target[0]} is already taken`,
            target: exception.meta.target[0]
        });
    }
    console.error('Global Exception:', exception);
    
    // You can customize the error response as per your requirements
    // const response = host.switchToHttp().getResponse();
    // response.status(500).json({
    //   error: 'Internal Server Error',
    // });
  }
}
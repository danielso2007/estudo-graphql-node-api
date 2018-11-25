import { Server } from "http";
import { AddressInfo } from "net";

export const normalizePort = (val: number | string): number => {
    return (typeof val === 'string') ? parseInt(val) : val;
}

export const onError = (server: Server) => {
    return (error: NodeJS.ErrnoException): void => {
        let addr: AddressInfo | string = server.address();
        if (error.syscall !== 'listen') throw error;
        let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
        switch(error.code) {
            case 'EACCES':
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
}

export const onListening = (server: Server) => {
    return (): void => {
        let addr = server.address();
        let bind = (typeof addr === 'string') ? `pipe ${addr}` : `http://${addr.address}:${addr.port}`;
        console.log(`Listening at ${bind}...`);
    }
}

export const handleError = (error: Error) => {
    let errorMessage: string = `${error.name}: ${error.message}`;
    let env: string = process.env.NODE_ENV;
    if (env !== 'test' && env !== 'pipelines') { console.log(errorMessage); }
    return Promise.reject(new Error(errorMessage));
};

export const throwError = (condition: boolean, message: string): void => {
    if (condition) { throw new Error(message); }
};

export const JWT_SECRET: string = process.env.JWT_SECRET;

export const getToken = (authorization: string): string => authorization ? authorization.split(' ')[1] : undefined;
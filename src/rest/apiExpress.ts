import express, { Application } from "express";

const server = (app: Application) => {
    try {
        app.listen(3000, (): void => {
            console.log(`Server Successfully Started.`)
        });
    } catch(err) {
        console.log(`Failed to start server ${err.message}.`);
    }
}

export const restApi = () => {
    const app: Application = express();

    app.use(express.json());

    server(app);
}
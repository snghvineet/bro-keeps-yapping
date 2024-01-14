import { app } from './app';
import 'dotenv/config';

// const client = new Client();
// client.connect().then(() => {
//     console.log('Connected!');
//     client.end();
// });

const port = process.env.PORT ?? 8000;

app.listen(() => {
    console.log(`Server started on port ${port}...`);
});

import express from 'express';
import * as routes from './routes/default.route';

const app = express();
const port = 3000;

app.use(routes);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});

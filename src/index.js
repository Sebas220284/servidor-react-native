import app from './app.js'
import { connectDB } from './db.js'
connectDB();
const port =process.env.PORT || 4000;
app.listen(4000)
console.log('server on port' ,port)
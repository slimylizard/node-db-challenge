const express = require('express');

const server = express();
server.use(express.json());

const projectRouter = require('./projects/project_router.js')
server.use('/projects', projectRouter)

const port = process.env.PORT || 6002;
server.listen(port, console.log(`server on ${port}`))
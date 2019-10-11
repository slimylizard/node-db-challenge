const express = require('express');

const Projects = require('./project_module.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.findProject()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: 'Could not get Projects' })
    })
})

router.get('/resources', (req, res) => {
    Projects.findResource()
    .then(resource => {
        res.status(200).json(resource);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: 'Could not get Resource' })
    })
})

router.get('/tasks', (req, res) => {
    Projects.findTasks()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: 'Could not get Tasks' })
    })
})


module.exports = router
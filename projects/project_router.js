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

router.post('/', (req, res) => {
    console.log(req.body);
    const { project_name, project_description } = req.body;
    Projects.insertProject({ project_name, project_description })
    .then(([project]) => {
        console.log(project)
        res.status(200).json(project)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: "could not post Project"})
    })
})

router.get('/resources', (req, res) => {
    Projects.findResources()
    .then(resource => {
        res.status(200).json(resource);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: 'Could not get Resource' })
    })
})
router.post('/resources', (req, res) => {
    const { resource_name, resource_description } = req.body;
    Projects.insertResource({ resource_name, resource_description })
    .then(resource => {
        console.log(resource)
        res.status(200).json(resource)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'error posting rescource'})
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
router.post('/tasks/:id', (req, res) => {
    const { task_description, notes, project_id } = req.body;
    Projects.insertTask({ task_description, notes, project_id })
    .then(task => {
        console.log(task)
        res.status(200).json(task)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'could not post Task'})
    })
})

module.exports = router
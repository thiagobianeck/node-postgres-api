import { Router } from 'express'

const router = Router()

import { createTask, getTasks, getOneTask, getTasksByProject, deleteTask, updateTask } from '../controllers/task.controller'

// -- /api/tasks

router.post('/', createTask)

router.get('/', getTasks)

// -- /api/tasks/:taskid
router.get('/:id', getOneTask)
router.get('/project/:id', getTasksByProject)
router.delete('/:id', deleteTask)
router.put('/:id', updateTask)

export default router;
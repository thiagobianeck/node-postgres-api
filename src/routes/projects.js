import { Router } from 'express'

const router = Router()

import { createProject, getProjects, getOneProject, deleteProject, updateProject } from '../controllers/project.controller'

// -- /api/projects

router.post('/', createProject)
router.get('/', getProjects)

// -- /api/projects/:projecId
router.get('/:id', getOneProject)
router.delete('/:id', deleteProject)
router.put('/:id', updateProject)

export default router;
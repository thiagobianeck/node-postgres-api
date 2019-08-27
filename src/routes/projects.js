import { Router } from 'express'

const router = Router()

import { createProject, getProjects } from '../controllers/project.controller'

// -- /api/projects

router.post('/', createProject)
router.get('/', getProjects)
// -- /api/projects/:projecId
router.get('/:id', )

export default router;
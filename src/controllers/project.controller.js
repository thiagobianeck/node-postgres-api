import Project from '../models/Project'

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll()
        res.json({
            data: projects
        })
    } catch (error) {
        console.error(error)
    }

}

export const createProject = async (req, res) => {
    const { name, priority, description, deliverydate } = req.body
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
                fields: ['name', 'priority', 'description', 'deliverydate']
            })

        if (newProject) {
            return res.json({
                message: 'Project created successfully :)',
                data: newProject
            })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: 'Something goes wrong :(',
            data: {}
        })
    }

}


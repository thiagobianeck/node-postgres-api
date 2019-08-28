import Task from '../models/Tasks'

export const createTask = async (req, res) => {
    const { name, done, projectid } = req.body
    try {
        const newTask = await Task.create(
            { name, done, projectid },
            { fields: ['name', 'done', 'projectid'] }
        )

        if (newTask) {
            return res.json({
                message: 'Task created successfully :)',
                data: newTask
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

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({
            attributes: ['id', 'name', 'done', 'projectid'],
            order: [
                ['id','DESC']
            ]
        })
        res.json({ tasks })
    } catch (error) {
        console.error(error)
    }
}

export const getOneTask = async (req, res) => {
    const { id } = req.params
    try {
        const task = await Task.findOne({
            attributes: ['id', 'name', 'done', 'projectid'],
            where: { id }
        })
        res.json(task)
    } catch (error) {
        console.error(error)
    }
}

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { name, done, projectid } = req.body;
    try {
        const tasks = await Task.findAll({
            attributes: ['id', 'name', 'done', 'projectid'],
            where: { id }
        })

        if(tasks.length > 0) {
            tasks.forEach(async task => {
                await task.update({
                    name, 
                    done, 
                    projectid 
                })
            })
        }
    
        return res.json({
            message: 'Task updated succesfully',
            data: tasks
        })
    } catch (error) {
        console.error(error)
    }
}

export const deleteTask = async (req, res) => {
    const { id } = req.params
    try {
        const deleteRowCount = await Task.destroy({
            where: { id }
        })
        res.json({
            message: 'Task Deleted succesfully',
            count: deleteRowCount
        })
    } catch (error) {
        console.error(error)
    }
}

export const getTasksByProject = async (req, res) => {
    const { id } = req.params
    try {
        const tasks = await Task.findAll({
            attributes: ['id', 'name', 'done', 'projectid'],
            where: { projectid: id }
        })
        res.json(tasks)
    } catch (error) {
        console.error(error)
    }
}
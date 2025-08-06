{
    "code": "import { Task } from './models/Task';\n\nexport class TaskValidator {\n    static validateTaskCreation(taskData: Partial<Task>): boolean {\n        if (!taskData.title || taskData.title.trim() === '') {\n            throw new Error('Task title is required.');\n        }\n        if (taskData.description && taskData.description.length > 500) {\n            throw new Error('Task description cannot exceed 500 characters.');\n        }\n        return true;\n    }\n\n    static validateTaskUpdate(taskId: string, taskData: Partial<Task>): boolean {\n        if (!taskId) {\n            throw new Error('Task ID is required for updating a task.');\n        }\n        if (taskData.status && !['todo', 'in-progress', 'done'].includes(taskData.status)) {\n            throw new Error('Invalid task status. Valid statuses are todo, in-progress, and done.');\n        }\n        return this.validateTaskCreation(taskData);\n    }\n\n    static validateTaskDeletion(taskId: string): boolean {\n        if (!taskId) {\n            throw new Error('Task ID is required for deleting a task.');\n        }\n        return true;\n    }\n}",
    "summary": "Implemented a TaskValidator class with methods to validate task creation, update, and deletion. The validation includes checking for required fields, such as task title and ID, and ensuring that the task description does not exceed 500 characters and that the task status is one of the valid options ('todo', 'in-progress', 'done').",
    "checklist": [
        "Validate task title is not empty during creation",
        "Validate task description does not exceed 500 characters",
        "Validate task status is one of the valid options during update",
        "Ensure task ID is provided for update and deletion operations"
    ]
}
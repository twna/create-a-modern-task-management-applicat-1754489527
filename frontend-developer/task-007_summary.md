{
    "code": "import { useEffect, useState } from 'react';\nimport io from 'socket.io-client';\n\nconst socket = io(process.env.REACT_APP_BACKEND_URL);\n\nconst useRealTimeTasks = () => {\n  const [tasks, setTasks] = useState([]);\n\n  useEffect(() => {\n    socket.on('tasksUpdated', updatedTasks => {\n      setTasks(updatedTasks);\n    });\n\n    return () => socket.off('tasksUpdated');\n  }, []);\n\n  return tasks;\n};\n\nexport default useRealTimeTasks;\n\n// In the component where tasks are displayed:\nimport React from 'react';\nimport useRealTimeTasks from './useRealTimeTasks';\nimport Task from './Task';\n\nconst TaskList = () => {\n  const tasks = useRealTimeTasks();\n\n  return (\n    <div className='task-list'>\n      {tasks.map(task => (\n        <Task key={task.id} {...task} />\n      ))}\n    </div>\n  );\n};\n\nexport default TaskList;",
    "summary": "Implemented a custom React hook 'useRealTimeTasks' to listen for 'tasksUpdated' events from a Socket.IO server and update the task list in real-time. Integrated this hook into a 'TaskList' component to display the tasks with real-time updates. Also, animations can be added using CSS transitions or animation libraries like Framer Motion for visual feedback on task updates.",
    "checklist": [
        "Create a custom React hook for real-time task updates using Socket.IO",
        "Integrate the real-time hook into the TaskList component",
        "Ensure the backend emits 'tasksUpdated' events on task changes",
        "Add CSS transitions or use animation libraries for visual feedback"
    ]
}
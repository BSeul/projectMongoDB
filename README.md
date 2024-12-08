# Task data
    - id: int
    - title: str
    - description: str
    - created_at: datetime
    - is_completed: bool

## Change backend url @ /src/app/global_constant.ts

# backend endpoint request

    - GET /tasks
        Get all tasks from database
    - POST /create
        Create a new task
        data sent: {
            title: str,
            description: str
        }
    - POST /update
        Update a task
        data sent: {
            id: int,
            title: str,
            description: str
        }
    - POST /done
        Mark a task as completed
        data sent: {
            id: int
        }
    - POST /undone
        Mark a task as not completed
        data sent: {
            id: int
        }
    - POST /delete
        Delete a task
        data sent: {
            id: int
        }#   p r o j e c t M o n g o D B  
 
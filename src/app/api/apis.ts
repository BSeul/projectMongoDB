import { global_constant } from "../global_constant.js";

async function getTaskFromDB() {
  try {
    const data = await fetch(`${global_constant.backend_url}/tasks`, {});
    if (data.ok) {
      const json = await data.json();
      return json.map((t: any) => {
        return {
          ...t,
          created_at: new Date(t.created_at),
        };
      });
    }
    return [];
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

const createTask = async (title: string, description: string) => {
  try {
    const data = await fetch(`${global_constant.backend_url}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    if (data.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

const updateTask = async (id: number, title: string, description: string) => {
  try {
    const data = await fetch(`${global_constant.backend_url}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, description }),
    });
    if (data.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

const deleteTask = async (id: number) => {
  try {
    const data = await fetch(`${global_constant.backend_url}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (data.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

const doneTask = async (id: number, isDone: boolean) => {
  try {
    const data = await fetch(
      `${global_constant.backend_url}/${isDone ? "undone" : "done"}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );
    if (data.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

export { getTaskFromDB, createTask, updateTask, deleteTask, doneTask };

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import  Chart  from "./Chart";
import { BASE_URL } from "../../config";
const Dashboard = () => {
  

  const location = useLocation();
  const username = location.state?.username || "User";
  const [task, setTasks] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/TaskRoutes/info`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      if (response.ok) {
        const data = await response.json();
        setTasks(Array.isArray(data) ? data : []);
      } else {
        console.log("Response not okay");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      {/* Header */}
      <div className="text-center py-4">
        <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
        <h2 className="text-lg md:text-xl mt-1">Welcome, {username}</h2>
      </div>

      {/* Task Overview Cards */}
      <div className="flex flex-wrap justify-center gap-4 px-4 md:px-8">
        {["Total Task", "Pending Task", "Completed Task"].map((title, idx) => (
          <div
            key={idx}
            className="shadow-lg w-full sm:w-52 md:w-64 lg:w-72 p-4 border-2 border-white rounded-xl bg-purple-300 text-center"
          >
            <h1 className="text-lg md:text-xl font-semibold text-black">
              {title}
            </h1>
          </div>
        ))}
      </div>

      {/* Chart Section */}
  <Chart/>
      {/* Task Table */}
      <div className="bg-white mt-6 p-4 rounded-xl border-4 border-blue-400 shadow-lg w-full sm:w-11/12 md:w-5/6 mx-auto">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg shadow-md bg-white text-gray-900">
            <thead>
              <tr className="bg-blue-600 text-white uppercase text-sm md:text-base">
                <th className="py-3 px-4 text-left">Task Name</th>
                <th className="py-3 px-4 text-left">Description</th>
                <th className="py-3 px-4 text-center">Due Date</th>
                <th className="py-3 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {task.length > 0 ? (
                task.map((task, index) => (
                  <tr
                    key={task.id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-blue-100`}
                  >
                    <td className="py-3 px-4">{task.name}</td>
                    <td className="py-3 px-4">{task.description}</td>
                    <td className="py-3 px-4 text-center">
                      {new Date(task.dueDate).toLocaleDateString()}
                    </td>
                    <td
                      className={`py-3 px-4 text-center font-semibold ${
                        task.status === "pending" ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {task.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No tasks available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 pb-4 text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Task Manager. All rights reserved.
      </div>
    </div>
  );
};

export default Dashboard;

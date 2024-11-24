import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Directory from "../Routes/Directory";
import DoneTasks from "../Routes/DoneTasks";
import Home from "../Routes/Home";
import ImportantTasks from "../Routes/ImportantTasks";
import SearchResults from "../Routes/SearchResults";
import TaskOnly from "../Routes/TaskOnly";
import TodaysTasks from "../Routes/TodaysTasks";
import HeaderTasks from "./HeaderTasks";
import { fetchWeather } from "../../utils/weatherApi";

const TasksSection: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    const getWeather = async () => {
      const weatherData = await fetchWeather('San Francisco');
      setWeather(weatherData);
    };
    getWeather();
  }, []);

  return (
    <main className=" pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full m-auto min-h-screen">
      <HeaderTasks />
      <Routes>
        <Route path="/" element={<Home weather={weather} />} />
        <Route path="/today" element={<TodaysTasks weather={weather} />} />
        <Route path="/important" element={<ImportantTasks weather={weather} />} />
        <Route
          path="/completed"
          element={<DoneTasks done={true} title="Completed tasks" weather={weather} />}
        />
        <Route
          path="/uncompleted"
          element={<DoneTasks done={false} title="Uncompleted tasks" weather={weather} />}
        />
        <Route path="/results" element={<SearchResults weather={weather} />} />
        <Route path="/dir/:dir" element={<Directory weather={weather} />} />
        <Route path="/task/:taskId" element={<TaskOnly weather={weather} />} />
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </main>
  );
};

export default TasksSection;

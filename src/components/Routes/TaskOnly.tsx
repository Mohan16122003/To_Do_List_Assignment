import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Task } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const TaskOnly: React.FC<{ weather: any }> = ({ weather }) => {
  const params = useParams();
  const navigate = useNavigate();

  const tasks = useAppSelector((store) => store.tasks.tasks);

  const matchedTask = tasks.filter((task: Task) => task.id === params.taskId);

  const title = matchedTask.length ? matchedTask[0].title : "";

  useDescriptionTitle(`Searching for ${title}`, "Task " + title);

  return <LayoutRoutes title={title} tasks={matchedTask} weather={weather} />;
};

export default TaskOnly;

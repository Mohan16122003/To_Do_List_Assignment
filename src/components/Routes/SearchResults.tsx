import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import useSearchQuery from "../hooks/useSearchQuery";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const SearchResults: React.FC<{ weather: any }> = ({ weather }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [currQueryParam, setCurrQueryParam] = useState<string>("");

  useEffect(() => {
    const queryParam = searchParams.get("query") || "";
    setCurrQueryParam(queryParam);
  }, [searchParams]);

  const matchedTasks = useSearchQuery(currQueryParam);

  const title = `Results for "${currQueryParam}"`;

  useDescriptionTitle(title, title);

  return <LayoutRoutes title={title} tasks={matchedTasks} weather={weather}></LayoutRoutes>;
};

export default SearchResults;

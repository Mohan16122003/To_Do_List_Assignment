import React from "react";
import { ReactComponent as IconView1 } from "../../assets/view-1.svg";
import { ReactComponent as IconView2 } from "../../assets/view-2.svg";

const sortValues = [
  { value: "order-added", title: "Order added" },
  { value: "min-date", title: "Earlier first" },
  { value: "max-date", title: "Later first" },
  { value: "completed-first", title: "Completed first" },
  { value: "uncompleted-first", title: "Uncompleted first" },
  { value: "priority", title: "Priority" },
];

const ButtonsSort: React.FC<{
  isListInView1: boolean;
  sortedBy: string;
  setSortedBy: (option: string) => void;
  setIsListInView1: (status: boolean) => void;
  filterByPriority: string;
  setFilterByPriority: (option: string) => void;
}> = ({ isListInView1, setIsListInView1, sortedBy, setSortedBy, filterByPriority, setFilterByPriority }) => {
  return (
    <div className="flex justify-end children-styles space-x-4">
      <button onClick={() => setIsListInView1(!isListInView1)} title="Toggle View">
        {isListInView1 ? (
          <IconView2 className="text-violet-600" />
        ) : (
          <IconView1 className="text-violet-600" />
        )}
      </button>
      <div className="flex justify-end flex-grow">
        <select
          className="inputStyles bg-slate-100 dark:bg-[#2C2C2C]"
          value={sortedBy}
          onChange={({ target }) => setSortedBy(target.value)}
        >
          <option value="" disabled >
            Sort by
          </option>
          {sortValues.map((val) => (
            <option
              key={val.value}
              value={val.value}
              className="bg-slate-100 dark:bg-[#2C2C2C]"
            >
              {val.title}
            </option>
          ))}
        </select>
        <select
          className="ml-2 inputStyles bg-slate-100 dark:bg-[#2C2C2C]"
          value={filterByPriority}
          onChange={({ target }) => setFilterByPriority(target.value)}
        >
          <option value="" disabled>
            Filter by Priority
          </option>
          <option value="">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
    </div>
  );
};

export default ButtonsSort;

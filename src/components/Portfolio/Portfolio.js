import data from './data.json';
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import { useState } from "react";

export default function Portfolio() {
  const initialState = 'All';
  const [selected, setState] = useState(initialState);
  const filters = data.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category)
    }

    return acc;
  }, [initialState]);
  let projectList = data;

  if (selected !== initialState) {
    projectList = projectList.filter(item => item.category === selected);
  }

  const handler = (event) => {
    const element = event.target;
    setState(element.innerText);
  };

  return (
    <>
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={handler}/>
      <ProjectList projects={projectList} />
    </>
  );
}

export default function ProjectList({projects}) {
  const project = (item) => {
    return (
      <img src={item.img} alt={item.category}/>
    );
  };

  const list = projects.reduce((acc, item) => {
    acc.push(project(item));

    return acc;
  }, []);

  return (
    <div className="projectList">
      {list}
    </div>
  );
}
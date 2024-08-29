export default function Toolbar({filters, selected, onSelectFilter}) {
  const btn = (item) => {
    return (
      <div
        onClick={onSelectFilter}
        className={`
          toolbar__item 
          ${item === selected ? 'toolbar__selected' : ''}
        `}
      >
        {item}
      </div>
    );
  };

  const list = filters.reduce((acc, item) => {
    acc.push(btn(item));

    return acc;
  }, []);

  return (
    <div className="toolbar">
      {list}
    </div>
  );
}
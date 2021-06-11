export function FilterInput({ options, value, filterSetter, name = '' }) {
  return (
    <select
      name={`${name}Filter`}
      className={`filter ${name}Filter`}
      value={value}
      onChange={(e) => {
        filterSetter(e.target.value);
      }}
    >
      <option value={''}>none</option>;
      {options.map((option) => {
        return (
          <option key={`album-${option.id}`} value={option.name}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
}

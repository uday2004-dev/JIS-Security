const stats = [
  ["5+", "Years Experience"],
  ["100+", "Professional Team"],
  ["25+", "Happy Clients"],
  ["4+", "Awards"],
  ["5+", "Cities"],
];

const Stats = () => {
  return (
    <section className="bg-yellow-500">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {stats.map(([number, label]) => (
          <div key={label} className="text-center">
            <h3 className="text-3xl font-bold text-black">{number}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-black/70">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
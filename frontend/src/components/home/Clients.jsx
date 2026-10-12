import { clients } from "../../data/clients";

const Clients = () => {
  return (
    <section className="bg-gray-50 px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-600">
          Clients
        </p>

        <h2 className="mt-3 text-3xl font-bold">Our Trusted Clients</h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex h-24 items-center justify-center rounded-xl bg-white text-sm font-semibold text-gray-500 shadow-sm"
            >
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
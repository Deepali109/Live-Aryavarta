export default function StatePage({ params }) {
  const { state } = params;
  const formattedState = state.replace(/-/g, " ");

  return (
    <section className="py-10 px-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Explore {formattedState}
      </h1>
      <p className="mt-4 text-gray-700">
        Welcome to {formattedState}! Here you can explore history, culture,
        food, and famous places of this state.
      </p>
    </section>
  );
}

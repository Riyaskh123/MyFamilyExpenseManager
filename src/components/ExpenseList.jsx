const ExpenseList = ({ expenses }) => {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  const categorySpending = {};

  expenses.forEach((e) => {
    categorySpending[e.category] =
      (categorySpending[e.category] || 0) + Number(e.amount);
  });

  if (expenses.length === 0) {
    return (
      <p className="text-sm text-gray-500 text-center">
        No expenses added yet
      </p>
    );
  }

  return (
    <div>
      {/* List */}
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {expenses.map((e) => (
          <div
            key={e.id}
            className="flex justify-between border-b pb-1 text-sm dark:text-white dark:border-zinc-800"
          >
            <span>{e.title}</span>
            <span className="font-medium dark:text-white">{e.amount}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
        {Object.entries(categorySpending).map(([category, amount]) => (
          <div
            key={category}
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4"
          >
            <p className="text-sm text-zinc-500">{category}</p>

            <h3 className="text-xl font-bold mt-2">
              {amount.toFixed(2)}
            </h3>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-4 text-right font-bold text-green-600 dark:text-green-400">
        Total: ₹ {total}
      </div>

    </div>
  );
};

export default ExpenseList;

export default function Summary({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);

  return (
    <div className="mt-6 p-4 bg-blue-50 rounded">
      <h2 className="text-lg font-semibold mb-2">📊 Summary</h2>
      <p className="text-xl font-bold text-blue-700">Total Spent: ₹ {total}</p>
    </div>
  );
}

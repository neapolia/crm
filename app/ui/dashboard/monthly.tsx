import { MonthlyStats } from "@/app/lib/definitions";

export default function MonthlyStatsTable({ stats }: { stats: MonthlyStats[] }) {
  return (
    <div className="rounded-xl bg-gray-50 p-4">
      <h2 className="mb-4 text-lg font-semibold">Статистика по месяцам</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm font-medium text-gray-600">
            <th className="pb-2">Месяц</th>
            <th className="pb-2">Заказов</th>
            <th className="pb-2">Сумма</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {stats.map((month) => (
            <tr key={month.month}>
              <td className="py-2 text-sm">{month.month}</td>
              <td className="py-2 text-sm">{month.invoices}</td>
              <td className="py-2 text-sm">{month.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 
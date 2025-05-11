import { ProviderStats } from "@/app/lib/definitions";

export default function ProviderStatsCard({ stats }: { stats: ProviderStats }) {
  return (
    <div className="rounded-xl bg-gray-50 p-4">
      <div className="text-sm font-medium text-gray-600">Поставщик</div>
      <div className="mt-2 text-lg font-semibold">{stats.provider_name}</div>
      <div className="text-sm text-gray-500">Заказов: {stats.totalInvoices}</div>
      <div className="text-sm text-gray-500">Сумма: {stats.totalAmount}</div>
      <div className="text-sm text-gray-500">Последний заказ: {stats.lastOrderDate}</div>
    </div>
  );
} 
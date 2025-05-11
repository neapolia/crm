import { DashboardStats } from "@/app/lib/definitions";
import { formatCurrency } from "@/app/lib/utils";

export default function StatsCards({ stats }: { stats: DashboardStats }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="text-sm font-medium text-gray-600">Всего заказов</div>
        <div className="mt-2 text-2xl font-semibold">{stats.totalInvoices}</div>
      </div>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="text-sm font-medium text-gray-600">Всего товаров</div>
        <div className="mt-2 text-2xl font-semibold">{stats.totalProducts}</div>
      </div>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="text-sm font-medium text-gray-600">Поставщиков</div>
        <div className="mt-2 text-2xl font-semibold">{stats.totalProviders}</div>
      </div>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="text-sm font-medium text-gray-600">Стоимость склада</div>
        <div className="mt-2 text-2xl font-semibold">
          {formatCurrency(stats.totalStorageValue)}
        </div>
      </div>
    </div>
  );
} 
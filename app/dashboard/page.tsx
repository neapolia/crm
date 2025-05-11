'use client';

import { fetchDashboardStats, fetchMonthlyStats, fetchProviderStats, fetchInvoices } from "@/app/lib/data";
import StatsCards from "../ui/dashboard/stats";
import MonthlyStatsTable from "../ui/dashboard/monthly";
import ProviderStatsCard from "../ui/dashboard/provider-stats";
import RecentInvoices from "../ui/dashboard/recent-invoices";

export default async function DashboardPage() {
  const [stats, monthlyStats, providerStats, recentInvoices] = await Promise.all([
    fetchDashboardStats(),
    fetchMonthlyStats(),
    fetchProviderStats(),
    fetchInvoices(),
  ]);

  return (
    <main className="p-6">
      <h1 className="mb-6 text-2xl font-semibold">Статистика</h1>
      <StatsCards stats={stats} />
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <MonthlyStatsTable stats={monthlyStats} />
        <div className="flex flex-col gap-4">
          {providerStats.map((stats) => (
            <ProviderStatsCard key={stats.provider_id} stats={stats} />
          ))}
        </div>
      </div>
      <div className="mt-6">
        <RecentInvoices invoices={recentInvoices} />
      </div>
    </main>
  );
}
'use client';

import { fetchDashboardStats, fetchMonthlyStats, fetchProviderStats, fetchInvoices } from "@/app/lib/data";
import StatsCards from "@/app/ui/dashboard/stats";
import MonthlyChart from "@/app/ui/dashboard/monthly";
import ProviderStatsTable from "@/app/ui/dashboard/provider-stats";
import RecentInvoices from "@/app/ui/dashboard/recent-invoices";

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
        <MonthlyChart data={monthlyStats} />
        <ProviderStatsTable data={providerStats} />
      </div>
      <div className="mt-6">
        <RecentInvoices invoices={recentInvoices} />
      </div>
    </main>
  );
}
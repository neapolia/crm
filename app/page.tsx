import { Metadata } from "next";
import { fetchFilteredStorage } from "@/app/lib/data";
import StorageTable from "@/app/ui/storage/table";

export const metadata: Metadata = {
  title: "Склад",
};

export default async function Page(props: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  const storage = await fetchFilteredStorage(query);

  return (
    <div className="w-full">
      <StorageTable storage={storage} />
    </div>
  );
}

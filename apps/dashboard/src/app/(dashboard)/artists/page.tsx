import { DataTable } from "@/components/Artists/data-table";
import { columns } from "@/components/Artists/Columns";
import { Button } from "@/components/ui/button";

export default function Artists() {
  const data = [
    {
      id: "1",
      created_at: new Date(),
      image: "/spotify-logo.svg",
      name: "Artist 1",
    },
    {
      id: "2",
      created_at: new Date(),
      image: "/spotify-logo.svg",
      name: "Artist 2",
    },
    {
      id: "3",
      created_at: new Date(),
      image: "/spotify-logo.svg",
      name: "Artist 3",
    },
  ];

  return (
    <main className="">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-24 mb-10">
        Artists
      </h2>
      <DataTable columns={columns} data={data} />
    </main>
  );
}
import { DataTable } from "@/components/Artists/data-table";
import { columns } from "@/components/Artists/Columns";
import { fetchArtists } from "@/services/ArtistsService";
import { Suspense } from "react";
import Loading from "./loading";

async function getData() {
  const response = await fetchArtists();

  if (response.status === "success") {
    return response.data;
  } else {
    throw new Error(response.errorCode);
  }
}

export default async function Artists() {
  const data = await getData();

  return (
    <main className="">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-24 mb-10">
        Artists
      </h2>
      <Suspense fallback={<Loading />}>
        <DataTable columns={columns} data={data} />
      </Suspense>
      {/* <DataTable columns={columns} data={data} /> */}
    </main>
  );
}
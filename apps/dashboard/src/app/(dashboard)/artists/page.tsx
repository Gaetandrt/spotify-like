"use client"

import { fetchArtists } from "@/services/ArtistsService";
import { Artist } from "@/types/Artist";
import { ApiResponse } from "@/lib/api-response";
import { Suspense } from "react";
import Loading from "./loading";
import { DataTableComponent } from "@/components/ui/data-table/DataTableComponent";
import { columns } from "@/components/Artists/Columns";
import { VisibilityState } from "@tanstack/react-table";
import { ArtistDialogCreate } from "@/components/Artists/DialogCreate";

async function fetchData(pageIndex: number, pageSize: number, filters?: string): Promise<ApiResponse<Artist[]>> {
  return fetchArtists({ pageIndex, pageSize }, filters);
}

export default async function Artists() {
  const columnsVisibility: VisibilityState = {
    "created_at": false,
    "id": false,
  };

  return (
    <main className="">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-24 mb-10">
        Artists
      </h2>
      <Suspense fallback={<Loading />}>
        <div className="">
          <DataTableComponent<Artist> fetchData={fetchData} columns={columns} defaultVisibility={columnsVisibility} createButton={<ArtistDialogCreate />} />
        </div>
      </Suspense>
    </main>
  );
}
import { Skeleton } from "@/components/ui/skeleton"

export function DataGridSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex justify-between items-center py-4">
        <Skeleton className="w-96 h-9"/>
        <Skeleton className="h-9 px-4 py-2 w-36" />
      </div>
      <Skeleton className="h-80 w-full rounded-xl" />
    </div>
  )
}

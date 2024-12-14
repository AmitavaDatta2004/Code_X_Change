import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-20">
      <div className="container mx-auto px-4 space-y-8">
        <div className="text-center space-y-4">
          <Skeleton className="h-10 w-64 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-[400px] w-full" />
          </Card>

          <Card className="p-6 space-y-4">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-[400px] w-full" />
          </Card>
        </div>

        <div className="flex justify-center gap-4">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-40" />
        </div>
      </div>
    </div>
  );
}
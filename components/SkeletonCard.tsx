import { Skeleton } from "./ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-64 w-full" />
      <div className="flex flex-col space-y-2">
        <Skeleton className="h-2 my-2 w-full" />
        <Skeleton className="h-2 my-2 w-full" />
        <Skeleton className="h-2 my-2 w-full" />
        <div className="flex w-full justify-between">
          <Skeleton className="h-3 w-3 rounded" />
          <Skeleton className="h-3 w-3 rounded" />
          <Skeleton className="h-3 w-3 rounded" />
          <Skeleton className="h-3 w-3 rounded" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;

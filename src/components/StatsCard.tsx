const StatsCard = ({ count, label }: { count: number; label: string }) => {
  return (
    <div className="flex p-4 gap-2 rounded-lg bg-blue-400 w-full h-fit justify-center items-center">
        <span className="text-xl">{count} :{label}</span>
    </div>
  );
};
export default StatsCard;

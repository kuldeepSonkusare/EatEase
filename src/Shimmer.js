export const Shimmer = () => {
  return (
    <div>
      <div className="m-5 h-72 w-52 rounded-xl border p-2">
        <div className="animate-pulse">
          <div className="h-32 w-48 rounded-xl bg-slate-200 p-2"></div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="m-2 h-12 w-12 rounded-full bg-slate-200"></div>
              <div className="h-16 w-16 rounded-lg bg-slate-200"></div>
            </div>
            <div className="m-2 flex flex-col space-y-2">
              <div className="h-12 w-28 rounded-xl bg-slate-200"></div>
              <div className="h-2 w-28 rounded-xl bg-slate-200"></div>
              <div className="h-2 w-28 rounded-xl bg-slate-200"></div>
              <div className="h-2 w-28 rounded-xl bg-slate-200"></div>
              <div className="h-6 w-28 rounded-xl bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

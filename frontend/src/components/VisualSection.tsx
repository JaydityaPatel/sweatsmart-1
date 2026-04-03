export default function VisualSection() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto w-full">
      <div className="relative rounded-[2.5rem] bg-slate-50 border border-slate-100 p-8 shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
        {/* Abstract UI representation instead of a heavy graphic */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white"></div>
        
        {/* Decorative elements representing AI analysis */}
        <div className="relative z-10 w-full max-w-3xl flex items-center justify-between">
          
          <div className="w-1/3 space-y-4">
            <div className="h-4 bg-slate-200 rounded-full w-3/4"></div>
            <div className="h-4 bg-slate-200 rounded-full w-1/2"></div>
            <div className="h-32 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mt-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">✓</div>
                <div className="h-4 bg-slate-100 rounded w-1/2"></div>
              </div>
              <div className="h-2 bg-slate-100 rounded w-full mb-2"></div>
              <div className="h-2 bg-slate-100 rounded w-4/5"></div>
            </div>
          </div>
          
          {/* Center scan mock */}
          <div className="relative w-64 h-80 bg-white rounded-3xl shadow-xl flex items-center justify-center border-4 border-white hidden sm:flex">
            <div className="w-32 h-48 border-2 border-dashed border-primary/50 relative">
               <div className="absolute top-0 left-0 w-full h-1 bg-primary animate-[bounce_3s_infinite] shadow-[0_0_10px_#14b8a6]"></div>
            </div>
          </div>

          <div className="w-1/3 flex justify-end hidden md:flex">
            <div className="w-3/4 space-y-4">
              <div className="h-24 bg-white rounded-2xl shadow-sm border border-slate-100"></div>
              <div className="h-24 bg-white rounded-2xl shadow-sm border border-slate-100"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

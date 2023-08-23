export default function Product() {
  return (
    <main className="pt-[65px]">
      <div className="flex flex-row bg-[#D3CABE]">
        <div className="flex w-2/3 flex-col justify-center gap-10">
          <p className="w-[600px] pl-20 text-4xl font-semibold leading-relaxed">
            Welcome to the Palm Tree WebGIS product menu
          </p>
          <p className="w-[700px] pl-40 text-xl leading-normal">
            Optimizing the performance of your oil palm plantations to be more efficient with an
            innovative automatic calculation feature
          </p>
        </div>

        <div className="w-1/3">
          <img src="/assets/medium/tree.png" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="mt-28 flex h-[100px] w-[400px] items-center justify-center gap-3 rounded-2xl bg-neutral-800 shadow-lg shadow-neutral-900/40 transition-all duration-300 hover:shadow-none">
          <a
            href="https://detect.roboflow.com/?model=pohonsawit2&version=7&api_key=2PNqpkPLTX6glZUiAPGu"
            className="text-decoration-none w-full rounded-xl px-4 py-2 text-center text-2xl text-white"
          >
            Get Started
          </a>
        </div>
      </div>
    </main>
  );
}

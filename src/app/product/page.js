export default function Product() {
  return (
    <main className="pt-[65px]">
      <div className="bg-[#D3CABE] flex flex-row">
        <div className="w-2/3 flex flex-col justify-center gap-10">
          <p className="w-[600px] pl-20 font-semibold text-4xl leading-relaxed">
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

      <div className="flex justify-center items-center">
        <div className="mt-28 w-[400px] h-[100px] rounded-2xl flex items-center justify-center bg-neutral-800 gap-3 shadow-lg shadow-neutral-900/40 transition-all duration-300 hover:shadow-none">
          <a
            href="https://detect.roboflow.com/?model=pohonsawit2&version=7&api_key=2PNqpkPLTX6glZUiAPGu"
            className="text-decoration-none w-full text-center text-2xl px-4 py-2 text-white rounded-xl"
          >
            Get Started
          </a>
        </div>
      </div>
    </main>
  );
}

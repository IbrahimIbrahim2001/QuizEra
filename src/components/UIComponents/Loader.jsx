export default function Loader() {
  return (
    <div className="absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4  border-[#4cbcd6]  border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
}

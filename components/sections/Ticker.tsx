import { TICKER_ITEMS } from "@/lib/constants";

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="w-full overflow-hidden bg-gold py-4" aria-hidden="true">
      <div className="animate-ticker flex w-max">
        {items.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span className="px-5 font-display text-lg tracking-wider text-bg whitespace-nowrap">
              {item}
            </span>
            <span className="text-[10px] text-bg/60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

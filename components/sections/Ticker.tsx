import { TICKER_ITEMS } from "@/lib/constants";

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="w-full overflow-hidden bg-gold py-4">
      <div className="animate-ticker flex w-max items-center gap-0">
        {items.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-6 px-6">
            <span className="font-display text-lg tracking-wider text-bg whitespace-nowrap">
              {item}
            </span>
            <span className="text-bg/40 text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

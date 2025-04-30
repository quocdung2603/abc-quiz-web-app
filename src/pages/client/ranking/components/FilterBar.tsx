interface Props {
  filter: { time: string; topic: string };
  setFilter: (f: { time: string; topic: string }) => void;
}

export default function FilterBar({ filter, setFilter }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      {/* Bộ lọc thời gian */}
      <div className="flex gap-2">
        {[
          { key: "all", label: "Tất cả" },
          { key: "month", label: "Tháng này" },
          { key: "week", label: "Tuần này" },
        ].map((t) => (
          <button
            key={t.key}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              filter.time === t.key
                ? "bg-yellow-400 text-white shadow"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter({ ...filter, time: t.key })}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Dropdown chọn chủ đề */}
      <div>
        <select
          className="px-4 py-2 rounded-full border border-gray-300 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={filter.topic}
          onChange={(e) => setFilter({ ...filter, topic: e.target.value })}
        >
          <option value="all">Tất cả chủ đề</option>
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="js">JavaScript</option>
        </select>
      </div>
    </div>
  );
}

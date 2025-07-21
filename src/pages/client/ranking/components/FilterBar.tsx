interface Props {
  filter: { time: string; topic: string };
  setFilter: (f: { time: string; topic: string }) => void;
}

export default function FilterBar({ filter, setFilter }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 bg-white/80 rounded-xl shadow p-4 border border-gray-100">
      {/* Bộ lọc thời gian */}
      <div className="flex gap-2">
        {[
          { key: "all", label: "Tất cả" },
          { key: "month", label: "Tháng này" },
          { key: "week", label: "Tuần này" },
        ].map((t) => (
          <button
            key={t.key}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition focus:outline-none shadow border-2 ${
              filter.time === t.key
                ? "bg-gradient-to-r from-yellow-400 to-purple-400 text-white border-yellow-400 scale-105"
                : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:text-blue-600"
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
          className="px-5 py-2 rounded-full border-2 border-gray-200 text-sm bg-white shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
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

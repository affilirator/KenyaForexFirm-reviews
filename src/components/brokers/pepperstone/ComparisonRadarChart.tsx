// @ts-nocheck
export const ComparisonRadarChart = () => {
  // Axes definitions
  const axes = [
    'Initial Incentives', // The one spike for Bonus Brokers
    'Cost Efficiency',
    'Platform & Tools',
    'Education',
    'Regulatory Safety',
    'Long-Term Growth',
  ];

  // Data: Bonus Broker vs Pepperstone
  // Scale 1-5
  const pepperstoneData = [1, 5, 5, 5, 5, 5]; // Low incentives, high everything else
  const bonusBrokerData = [5, 2, 3, 2, 2, 1]; // High incentives, low value

  const size = 320;
  const center = size / 2;
  const radius = 100;
  const angleSlice = (Math.PI * 2) / axes.length;

  const getCoordinates = (value, index) => {
    const angle = index * angleSlice - Math.PI / 2;
    const r = (value / 5) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const generatePath = (dataPoints) => {
    return (
      dataPoints
        .map((val, i) => {
          const coords = getCoordinates(val, i);
          return `${i === 0 ? 'M' : 'L'} ${coords.x},${coords.y}`;
        })
        .join(' ') + ' Z'
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200 my-8 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 mb-2">
        Strategic Analysis: The "Sugar Rush" vs. Nutrition
      </h3>
      <div className="flex gap-6 text-sm mb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-600"></span>
          <span className="font-semibold text-slate-700">
            Pepperstone (Value Model)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="font-semibold text-slate-700">
            Generic Bonus Broker
          </span>
        </div>
      </div>

      <div className="relative">
        <svg
          width={size}
          height={size}
          className="overflow-visible"
        >
          {/* Grid Circles */}
          {[1, 2, 3, 4, 5].map((level) => (
            <circle
              key={level}
              cx={center}
              cy={center}
              r={(level / 5) * radius}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="1"
            />
          ))}

          {/* Axes Lines */}
          {axes.map((_, i) => {
            const end = getCoordinates(5, i);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={end.x}
                y2={end.y}
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            );
          })}

          {/* Pepperstone Shape */}
          <path
            d={generatePath(pepperstoneData)}
            fill="rgba(37, 99, 235, 0.2)"
            stroke="#2563eb"
            strokeWidth="2.5"
          />

          {/* Bonus Broker Shape */}
          <path
            d={generatePath(bonusBrokerData)}
            fill="rgba(239, 68, 68, 0.1)"
            stroke="#ef4444"
            strokeWidth="2.5"
            strokeDasharray="4 2"
          />

          {/* Labels */}
          {axes.map((label, i) => {
            const coords = getCoordinates(6.2, i);
            return (
              <text
                key={i}
                x={coords.x}
                y={coords.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[10px] uppercase font-bold fill-slate-500 tracking-wide"
              >
                {label}
              </text>
            );
          })}
        </svg>
      </div>
      <p className="text-sm text-slate-600 mt-6 italic text-center max-w-md bg-white p-3 rounded border border-slate-100">
        "Visual Proof: While the bonus broker spikes on 'Initial Incentives', it
        collapses on Safety and Growth—the two factors that actually keep you in
        the game long-term."
      </p>
    </div>
  );
};

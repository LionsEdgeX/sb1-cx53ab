import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Heart, Users, Coins, Cross, Star } from 'lucide-react';

interface PillarData {
  name: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

const pillars: PillarData[] = [
  { name: 'Faith', value: 75, icon: <Cross className="h-5 w-5" />, color: 'purple' },
  { name: 'Family', value: 85, icon: <Users className="h-5 w-5" />, color: 'blue' },
  { name: 'Finance', value: 65, icon: <Coins className="h-5 w-5" />, color: 'gold' },
  { name: 'Fitness', value: 70, icon: <Heart className="h-5 w-5" />, color: 'red' },
  { name: 'Freedom', value: 80, icon: <Star className="h-5 w-5" />, color: 'emerald' }
];

const PillarWheel = () => {
  const { isDarkMode } = useTheme();
  const radius = 150;
  const center = radius + 50;
  const angleStep = (2 * Math.PI) / pillars.length;

  const getColor = (color: string) => {
    switch (color) {
      case 'purple': return 'rgb(147, 51, 234)';
      case 'blue': return 'rgb(59, 130, 246)';
      case 'gold': return 'rgb(255, 215, 0)';
      case 'red': return 'rgb(239, 68, 68)';
      case 'emerald': return 'rgb(16, 185, 129)';
      default: return 'rgb(107, 114, 128)';
    }
  };

  return (
    <div className={`p-6 rounded-2xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <h2 className={`text-lg font-bold mb-6 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        Life Balance Wheel
      </h2>

      <div className="flex justify-center">
        <svg width={center * 2} height={center * 2}>
          {/* Background circles */}
          {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
            <circle
              key={i}
              cx={center}
              cy={center}
              r={radius * scale}
              fill="none"
              stroke={isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}
              strokeWidth="1"
            />
          ))}

          {/* Pillar sections */}
          {pillars.map((pillar, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const value = (pillar.value / 100) * radius;
            const x = center + Math.cos(angle) * value;
            const y = center + Math.sin(angle) * value;
            const color = getColor(pillar.color);

            return (
              <React.Fragment key={pillar.name}>
                {/* Lines from center */}
                <line
                  x1={center}
                  y1={center}
                  x2={center + Math.cos(angle) * radius}
                  y2={center + Math.sin(angle) * radius}
                  stroke={isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}
                  strokeWidth="1"
                />

                {/* Value points */}
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill={color}
                />

                {/* Labels */}
                <g transform={`translate(
                  ${center + Math.cos(angle) * (radius + 30)},
                  ${center + Math.sin(angle) * (radius + 30)}
                )`}>
                  <foreignObject
                    x="-40"
                    y="-20"
                    width="80"
                    height="40"
                    style={{ textAlign: 'center' }}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`p-1 rounded-lg bg-${pillar.color}-500/10`}>
                        {React.cloneElement(pillar.icon as React.ReactElement, {
                          className: `h-5 w-5 text-${pillar.color}-500`
                        })}
                      </div>
                      <span className={`text-sm font-medium ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {pillar.name}
                      </span>
                    </div>
                  </foreignObject>
                </g>
              </React.Fragment>
            );
          })}

          {/* Connect the value points */}
          <path
            d={pillars.map((pillar, i) => {
              const angle = i * angleStep - Math.PI / 2;
              const value = (pillar.value / 100) * radius;
              const x = center + Math.cos(angle) * value;
              const y = center + Math.sin(angle) * value;
              return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
            }).join(' ') + ' Z'}
            fill="rgba(255, 215, 0, 0.2)"
            stroke="rgb(255, 215, 0)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-5 gap-4 mt-8">
        {pillars.map((pillar) => (
          <div key={pillar.name} className="flex flex-col items-center">
            <div className={`text-2xl font-bold text-${pillar.color}-500`}>
              {pillar.value}%
            </div>
            <div className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {pillar.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PillarWheel;
import React, { useState } from 'react';
import { GameStats, GameMode } from '@/types/game';
import { Trophy, ChevronUp, ChevronDown } from 'lucide-react';

interface StatusBarProps {
  gameStats: GameStats;
  selectedMode: GameMode;
}

const StatusBar: React.FC<StatusBarProps> = ({ gameStats, selectedMode }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const getShapePercentage = (shapeId: string) => {
    const count = gameStats.shapeCounts[shapeId] || 0;
    return gameStats.totalAgents > 0 ? Math.round((count / gameStats.totalAgents) * 100) : 0;
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-10 bg-card/80 backdrop-blur border-b border-arena-border">
      <div className={`px-6 transition-all duration-300 ${isMinimized ? 'py-2' : 'py-4'}`}>
        <div 
          className="flex items-center justify-between mb-3 cursor-pointer hover:bg-card/30 rounded p-1 transition-colors"
          onClick={toggleMinimize}
        >
          <h3 className="text-sm font-medium text-muted-foreground">Battle Statistics</h3>
          <div className="flex items-center gap-2">
            <div className="text-sm text-muted-foreground">
              Total: {gameStats.totalAgents} agents
            </div>
            {isMinimized ? (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronUp className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
        </div>
        
        <div className={`transition-all duration-300 overflow-hidden ${isMinimized ? 'max-h-0 opacity-0' : 'max-h-[70vh] opacity-100'}`}>
          <div className="overflow-y-auto max-h-[60vh] pr-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-2">
            {selectedMode.shapes.map(shape => {
              const count = gameStats.shapeCounts[shape.id] || 0;
              const percentage = getShapePercentage(shape.id);
              const maxCount = Math.max(...Object.values(gameStats.shapeCounts));
              const isLeading = count === maxCount && count > 0;
              
              return (
                <div key={shape.id} className="flex items-center gap-1.5 p-1.5 rounded bg-card/50 hover:bg-card/70 transition-colors">
                  <div className={`text-base ${isLeading ? 'animate-pulse' : ''}`}>
                    {shape.emoji}
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-xs truncate">{shape.name}</span>
                      {isLeading && <Trophy className="w-2.5 h-2.5 text-game-secondary flex-shrink-0" />}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-xs text-game-primary">{count}</span>
                      <div className="w-6 h-1 bg-arena-border rounded-full overflow-hidden flex-1">
                        <div 
                          className="h-full bg-gradient-to-r from-game-primary to-game-secondary transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground min-w-[2rem] text-right">{percentage}%</span>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar; 
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { GameEngine, createRandomAgents } from '@/lib/gameEngine';
import { Agent, GameStats, GAME_MODES, GameMode } from '@/types/game';
import MainScreen from '@/components/MainScreen';
import StatusBar from '@/components/StatusBar';

const AGENT_SIZE = 20;
const AGENT_SPEED = 4;

const BattleArena: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const gameEngineRef = useRef<GameEngine | null>(null);
  
  const [agentCount, setAgentCount] = useState(100);
  const [selectedMode, setSelectedMode] = useState<GameMode>(GAME_MODES[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [autoRestart, setAutoRestart] = useState(false);
  const [gameStats, setGameStats] = useState<GameStats>({
    shapeCounts: {},
    totalAgents: 0,
    isGameOver: false
  });

  const startGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const agents = createRandomAgents(
      agentCount,
      selectedMode.shapes,
      canvas.width,
      canvas.height,
      AGENT_SIZE,
      AGENT_SPEED
    );

    gameEngineRef.current = new GameEngine(agents, selectedMode.shapes, canvas.width, canvas.height);
    setIsRunning(true);
  }, [agentCount, selectedMode]);

  const stopGame = useCallback(() => {
    setIsRunning(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  }, []);

  const handleModeChange = useCallback((mode: GameMode) => {
    setSelectedMode(mode);
    if (gameEngineRef.current) {
      stopGame();
    }
  }, [stopGame]);

  const gameLoop = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const engine = gameEngineRef.current;

    if (!canvas || !ctx || !engine) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    engine.updateAgents();
    const stats = engine.getStats();
    setGameStats(stats);

    const agents = engine.getAgents();
    agents.forEach((agent: Agent) => {
      ctx.font = `${agent.size * 1.2}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      ctx.fillStyle = agent.shape.color;
      ctx.fillText(agent.shape.emoji, agent.x, agent.y);
    });
    
    if (stats.isGameOver) {
      setIsRunning(false);
    } else if (isRunning) {
      animationRef.current = requestAnimationFrame(gameLoop);
    }
  }, [isRunning]);

  useEffect(() => {
    if (isRunning) {
      gameLoop();
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRunning, gameLoop]);

  // Auto-restart logic
  useEffect(() => {
    if (gameStats.isGameOver && autoRestart && !isRunning) {
      const timer = setTimeout(() => {
        startGame();
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, [gameStats.isGameOver, autoRestart, isRunning, startGame]);

  // Handle canvas resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas && gameEngineRef.current) {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        gameEngineRef.current.updateCanvasSize(canvas.width, canvas.height);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {(!isRunning || gameStats.isGameOver) && (
        <MainScreen
          agentCount={agentCount}
          setAgentCount={setAgentCount}
          selectedMode={selectedMode}
          setSelectedMode={handleModeChange}
          gameStats={gameStats}
          onStartGame={startGame}
          onStopGame={stopGame}
          autoRestart={autoRestart}
          setAutoRestart={setAutoRestart}
        />
      )}

      {isRunning && (
        <StatusBar gameStats={gameStats} selectedMode={selectedMode} />
      )}
      
      <canvas
        ref={canvasRef}
        className="w-full h-screen block border-20 border-arena-border"
        style={{ 
          background: 'var(--gradient-arena)',
          border: '2px solid hsl(var(--arena-border))'
        }}
      />
    </div>
  );
};

export default BattleArena;
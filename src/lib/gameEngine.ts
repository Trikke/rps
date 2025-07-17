import { Agent, GameRule, Shape, GameStats, determineWinner } from '@/types/game';

export class GameEngine {
  private agents: Agent[] = [];
  private shapes: Shape[] = [];
  private canvasWidth: number = 0;
  private canvasHeight: number = 0;

  constructor(agents: Agent[], shapes: Shape[], width: number, height: number) {
    this.agents = agents;
    this.shapes = shapes;
    this.canvasWidth = width;
    this.canvasHeight = height;
  }

  updateAgents(): void {
    // Move agents
    this.agents.forEach(agent => {
      agent.x += agent.vx;
      agent.y += agent.vy;

      // Bounce off walls at 90 degree angles
      if (agent.x <= agent.size || agent.x >= this.canvasWidth - agent.size) {
        agent.vx = -agent.vx;
        agent.x = Math.max(agent.size, Math.min(this.canvasWidth - agent.size, agent.x));
      }
      
      if (agent.y <= agent.size || agent.y >= this.canvasHeight - agent.size) {
        agent.vy = -agent.vy;
        agent.y = Math.max(agent.size, Math.min(this.canvasHeight - agent.size, agent.y));
      }
    });

    for (let i = 0; i < this.agents.length; i++) {
      for (let j = i + 1; j < this.agents.length; j++) {
        if (this.checkCollision(this.agents[i], this.agents[j])) {
          this.handleCollision(this.agents[i], this.agents[j]);
        }
      }
    }
  }

  private checkCollision(agent1: Agent, agent2: Agent): boolean {
    const dx = agent1.x - agent2.x;
    const dy = agent1.y - agent2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < (agent1.size + agent2.size);
  }

  private handleCollision(agent1: Agent, agent2: Agent): void {
    if (agent1.shape.id !== agent2.shape.id) {
      if (determineWinner(agent1.shape, agent2.shape, this.shapes)) {
        agent2.shape = agent1.shape;
      } else {
        agent1.shape = agent2.shape;
      }
    }

    agent1.vx = -agent1.vx;
    agent1.vy = -agent1.vy;
    agent2.vx = -agent2.vx;
    agent2.vy = -agent2.vy;

    const dx = agent2.x - agent1.x;
    const dy = agent2.y - agent1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 0) {
      const overlap = (agent1.size + agent2.size) - distance;
      const separateX = (dx / distance) * overlap * 0.5;
      const separateY = (dy / distance) * overlap * 0.5;

      agent1.x -= separateX;
      agent1.y -= separateY;
      agent2.x += separateX;
      agent2.y += separateY;
    }
  }


  getStats(): GameStats {
    const shapeCounts: Record<string, number> = {};
    
    this.agents.forEach(agent => {
      shapeCounts[agent.shape.id] = (shapeCounts[agent.shape.id] || 0) + 1;
    });

    const uniqueShapes = Object.keys(shapeCounts);
    const isGameOver = uniqueShapes.length === 1;
    const winningShape = isGameOver ? this.agents[0]?.shape : undefined;

    return {
      shapeCounts,
      totalAgents: this.agents.length,
      isGameOver,
      winningShape
    };
  }

  getAgents(): Agent[] {
    return this.agents;
  }

  updateCanvasSize(width: number, height: number): void {
    this.canvasWidth = width;
    this.canvasHeight = height;
  }
}

export function createRandomAgents(
  count: number, 
  shapes: Shape[], 
  canvasWidth: number, 
  canvasHeight: number, 
  agentSize: number,
  speed: number
): Agent[] {
  const agents: Agent[] = [];
  
  for (let i = 0; i < count; i++) {
    const shapeIndex = i % shapes.length;
    const shape = shapes[shapeIndex];
    
    agents.push({
      id: `agent-${i}`,
      x: Math.random() * (canvasWidth - 2 * agentSize) + agentSize,
      y: Math.random() * (canvasHeight - 2 * agentSize) + agentSize,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      shape,
      size: agentSize
    });
  }
  
  return agents;
}
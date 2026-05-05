// AutoFlow Workflow SDK

export interface Node {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: Record<string, any>;
}

export interface Edge {
  id: string;
  source: string;
  target: string;
}

export interface Workflow {
  id: string;
  name: string;
  description?: string;
  nodes: Node[];
  edges: Edge[];
  version: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ExecutionResult {
  success: boolean;
  data?: any;
  error?: string;
  duration: number;
}

export class WorkflowBuilder {
  private nodes: Node[] = [];
  private edges: Edge[] = [];

  addNode(id: string, type: string, data: Record<string, any>): this {
    this.nodes.push({ id, type, position: { x: 0, y: 0 }, data });
    return this;
  }

  addEdge(source: string, target: string): this {
    this.edges.push({
      id: `${source}-${target}`,
      source,
      target,
    });
    return this;
  }

  build(): Workflow {
    return {
      id: `workflow-${Date.now()}`,
      name: 'New Workflow',
      nodes: this.nodes,
      edges: this.edges,
      version: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}

export default WorkflowBuilder;

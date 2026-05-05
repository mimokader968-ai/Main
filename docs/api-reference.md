# API Reference

## WorkflowBuilder

### `addNode(id: string, type: string, data: Record<string, any>)`
Add a node to the workflow.

### `addEdge(source: string, target: string)`
Connect two nodes.

### `build(): Workflow`
Build and return the workflow.

## WorkflowExecutor

### `execute(workflow: Workflow): Promise<ExecutionResult>`
Execute a workflow.

## Types

### Workflow

```typescript
interface Workflow {
  id: string;
  name: string;
  description?: string;
  nodes: Node[];
  edges: Edge[];
  version: number;
  createdAt: Date;
  updatedAt: Date;
}
```

### ExecutionResult

```typescript
interface ExecutionResult {
  success: boolean;
  data?: any;
  error?: string;
  duration: number;
}
```

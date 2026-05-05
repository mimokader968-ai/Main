# Creating Custom Nodes

## Node Structure

Each node must implement the following interface:

```typescript
interface Node {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: Record<string, any>;
}
```

## Creating a Simple Node

```typescript
import { Node } from '@autoflow/workflow';

const myNode: Node = {
  id: 'my-node-1',
  type: 'my-custom-node',
  position: { x: 100, y: 100 },
  data: {
    title: 'My Custom Node',
    description: 'Does something awesome',
  },
};
```

## Node Types

### Trigger Nodes
Start the workflow execution

### Action Nodes
Perform operations or transformations

### Conditional Nodes
Branch logic based on conditions

## Next Steps

- [API Reference](./api-reference.md)
- [Examples](./examples.md)

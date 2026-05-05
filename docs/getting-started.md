# Getting Started with AutoFlow

## Installation

### Using npm

```bash
npm install autoflow
```

### Using pnpm

```bash
pnpm add autoflow
```

### Using Docker

```bash
docker run -p 5678:5678 autoflow
```

## Quick Start

1. **Start the server**
   ```bash
   autoflow start
   ```

2. **Open the editor**
   Navigate to `http://localhost:5678`

3. **Create your first workflow**
   Click "New Workflow" and drag nodes from the sidebar

## Basic Workflow Structure

A workflow consists of:

- **Nodes**: Actions or transformations
- **Edges**: Connections between nodes
- **Triggers**: Events that start the workflow
- **Actions**: What happens when triggered

## Example: HTTP to Email

```
[HTTP Request] → [Transform] → [Send Email]
```

## Next Steps

- [Creating Custom Nodes](./creating-nodes.md)
- [API Reference](./api-reference.md)
- [Deployment Guide](./deployment.md)

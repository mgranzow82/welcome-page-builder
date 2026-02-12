import { motion } from "framer-motion";

interface DiagramNode {
  label: string;
  x: number;
  y: number;
  color?: string;
  size?: "sm" | "md" | "lg";
}

interface DiagramEdge {
  from: number;
  to: number;
  label?: string;
  dashed?: boolean;
}

interface ArchitectureDiagramProps {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  title?: string;
  height?: number;
}

const ArchitectureDiagram = ({ nodes, edges, title, height = 280 }: ArchitectureDiagramProps) => {
  const sizeMap = { sm: 60, md: 80, lg: 100 };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-lg border border-border bg-card p-5 shadow-sm"
    >
      {title && (
        <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-3">{title}</p>
      )}
      <svg viewBox={`0 0 600 ${height}`} className="w-full" style={{ maxHeight: height }}>
        {/* Edges */}
        {edges.map((edge, i) => {
          const from = nodes[edge.from];
          const to = nodes[edge.to];
          if (!from || !to) return null;
          const fSize = sizeMap[from.size || "md"];
          const tSize = sizeMap[to.size || "md"];
          return (
            <g key={`edge-${i}`}>
              <line
                x1={from.x + fSize / 2}
                y1={from.y + 18}
                x2={to.x + tSize / 2}
                y2={to.y + 18}
                stroke="hsl(var(--muted-foreground) / 0.3)"
                strokeWidth="1.5"
                strokeDasharray={edge.dashed ? "6 3" : undefined}
                markerEnd="url(#arrowhead)"
              />
              {edge.label && (
                <text
                  x={(from.x + fSize / 2 + to.x + tSize / 2) / 2}
                  y={(from.y + 18 + to.y + 18) / 2 - 6}
                  textAnchor="middle"
                  className="fill-muted-foreground"
                  fontSize="9"
                >
                  {edge.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Arrow marker */}
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className="fill-muted-foreground/40" />
          </marker>
        </defs>

        {/* Nodes */}
        {nodes.map((node, i) => {
          const w = sizeMap[node.size || "md"];
          return (
            <g key={`node-${i}`}>
              <rect
                x={node.x}
                y={node.y}
                width={w}
                height={36}
                rx="6"
                fill={node.color || "hsl(var(--accent))"}
                opacity="0.15"
                stroke={node.color || "hsl(var(--accent))"}
                strokeWidth="1.5"
              />
              <text
                x={node.x + w / 2}
                y={node.y + 22}
                textAnchor="middle"
                className="fill-foreground"
                fontSize="10"
                fontWeight="500"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
};

export default ArchitectureDiagram;

// Preset diagrams for each case study
export const ingDiagram = {
  title: "Target Architecture – Credit Rating Platform",
  nodes: [
    { label: "Channels", x: 10, y: 10, size: "md" as const, color: "hsl(200,60%,50%)" },
    { label: "API Gateway", x: 120, y: 10, size: "md" as const, color: "hsl(170,50%,45%)" },
    { label: "Rating Engine", x: 250, y: 10, size: "lg" as const, color: "hsl(15,80%,55%)" },
    { label: "Kafka", x: 390, y: 10, size: "md" as const, color: "hsl(30,70%,50%)" },
    { label: "DWH", x: 250, y: 80, size: "md" as const, color: "hsl(260,40%,55%)" },
    { label: "Data Lake", x: 390, y: 80, size: "md" as const, color: "hsl(260,40%,55%)" },
    { label: "Recon", x: 510, y: 10, size: "sm" as const, color: "hsl(0,50%,55%)" },
    { label: "Audit / ADR", x: 510, y: 80, size: "sm" as const, color: "hsl(45,60%,50%)" },
  ],
  edges: [
    { from: 0, to: 1, label: "REST" },
    { from: 1, to: 2, label: "API" },
    { from: 2, to: 3, label: "Events (AVRO)" },
    { from: 3, to: 4, dashed: true },
    { from: 3, to: 5, dashed: true },
    { from: 3, to: 6, label: "Stream" },
    { from: 2, to: 7, dashed: true },
  ],
  height: 140,
};

export const tuevDiagram = {
  title: "Component Architecture – Scheduling Platform",
  nodes: [
    { label: "Planning UI", x: 10, y: 10, size: "md" as const, color: "hsl(210,70%,50%)" },
    { label: "Scheduling API", x: 150, y: 10, size: "lg" as const, color: "hsl(170,50%,45%)" },
    { label: "Auditor DB", x: 300, y: 10, size: "md" as const, color: "hsl(260,40%,55%)" },
    { label: "Entra ID", x: 450, y: 10, size: "md" as const, color: "hsl(200,60%,50%)" },
    { label: "MuleSoft ESB", x: 150, y: 80, size: "lg" as const, color: "hsl(30,70%,50%)" },
    { label: "Power BI", x: 300, y: 80, size: "md" as const, color: "hsl(45,60%,50%)" },
    { label: "ERP / SAP", x: 450, y: 80, size: "md" as const, color: "hsl(0,50%,55%)" },
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 1, to: 3, label: "Auth" },
    { from: 1, to: 4, label: "Integration" },
    { from: 2, to: 5, dashed: true, label: "Reporting" },
    { from: 4, to: 6 },
  ],
  height: 140,
};

export const dbDiagram = {
  title: "Migration Architecture – On-Prem to Cloud",
  nodes: [
    { label: "On-Prem Apps", x: 10, y: 10, size: "lg" as const, color: "hsl(0,50%,55%)" },
    { label: "Migration Layer", x: 150, y: 10, size: "lg" as const, color: "hsl(45,60%,50%)" },
    { label: "Azure Cloud", x: 310, y: 10, size: "lg" as const, color: "hsl(210,70%,50%)" },
    { label: "AWS", x: 450, y: 10, size: "md" as const, color: "hsl(30,70%,50%)" },
    { label: "~60 HR/Budget Tools", x: 10, y: 80, size: "lg" as const, color: "hsl(0,50%,55%)" },
    { label: "arc42 / ADR", x: 200, y: 80, size: "md" as const, color: "hsl(170,50%,45%)" },
    { label: "Teams (BizDevOps)", x: 350, y: 80, size: "lg" as const, color: "hsl(260,40%,55%)" },
  ],
  edges: [
    { from: 0, to: 1, label: "Migrate" },
    { from: 1, to: 2 },
    { from: 1, to: 3, dashed: true },
    { from: 4, to: 1, label: "Consolidate" },
    { from: 5, to: 6, label: "Standards" },
  ],
  height: 140,
};

export const merkurDiagram = {
  title: "Target Architecture – Gaming & Payment Platform",
  nodes: [
    { label: "Game Clients", x: 10, y: 10, size: "md" as const, color: "hsl(45,85%,50%)" },
    { label: "API Gateway", x: 150, y: 10, size: "md" as const, color: "hsl(170,50%,45%)" },
    { label: "Game Service", x: 290, y: 10, size: "md" as const, color: "hsl(15,80%,55%)" },
    { label: "Payment Svc", x: 430, y: 10, size: "md" as const, color: "hsl(200,60%,50%)" },
    { label: "Account Svc", x: 150, y: 80, size: "md" as const, color: "hsl(260,40%,55%)" },
    { label: "Kafka", x: 290, y: 80, size: "md" as const, color: "hsl(30,70%,50%)" },
    { label: "BI / Analytics", x: 430, y: 80, size: "md" as const, color: "hsl(210,70%,50%)" },
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 2, to: 5, label: "Events" },
    { from: 3, to: 5, label: "Events" },
    { from: 5, to: 6, dashed: true },
  ],
  height: 140,
};

export const mreDiagram = {
  title: "Cloud Architecture – IoT & AI Insurance Platform (AWS)",
  nodes: [
    { label: "IoT Devices", x: 10, y: 10, size: "md" as const, color: "hsl(200,65%,50%)" },
    { label: "Data Ingestion", x: 150, y: 10, size: "md" as const, color: "hsl(170,50%,45%)" },
    { label: "Data Lake (S3)", x: 290, y: 10, size: "lg" as const, color: "hsl(30,70%,50%)" },
    { label: "AI/ML Services", x: 440, y: 10, size: "md" as const, color: "hsl(270,55%,55%)" },
    { label: "Processing", x: 150, y: 80, size: "md" as const, color: "hsl(15,80%,55%)" },
    { label: "Analytics", x: 290, y: 80, size: "md" as const, color: "hsl(210,70%,50%)" },
    { label: "API Layer", x: 440, y: 80, size: "md" as const, color: "hsl(170,50%,45%)" },
  ],
  edges: [
    { from: 0, to: 1, label: "Stream" },
    { from: 1, to: 2 },
    { from: 2, to: 3, label: "ML Pipeline" },
    { from: 1, to: 4, dashed: true },
    { from: 4, to: 5 },
    { from: 3, to: 6, label: "Results" },
  ],
  height: 140,
};

export const depotDiagram = {
  title: "Architecture – Headless E-Commerce Platform (SCAYLE / AWS)",
  nodes: [
    { label: "Web / Mobile", x: 10, y: 10, size: "md" as const, color: "hsl(330,65%,50%)" },
    { label: "GraphQL/REST", x: 150, y: 10, size: "md" as const, color: "hsl(170,50%,45%)" },
    { label: "SCAYLE Core", x: 290, y: 10, size: "lg" as const, color: "hsl(200,60%,50%)" },
    { label: "SAP / ERP", x: 440, y: 10, size: "md" as const, color: "hsl(15,80%,55%)" },
    { label: "Middleware", x: 150, y: 80, size: "md" as const, color: "hsl(45,60%,50%)" },
    { label: "SQS / SNS", x: 290, y: 80, size: "md" as const, color: "hsl(30,70%,50%)" },
    { label: "Monitoring", x: 440, y: 80, size: "md" as const, color: "hsl(260,40%,55%)" },
  ],
  edges: [
    { from: 0, to: 1 },
    { from: 1, to: 2, label: "API" },
    { from: 2, to: 3, label: "Integration" },
    { from: 1, to: 4 },
    { from: 4, to: 5, label: "Async" },
    { from: 2, to: 6, dashed: true, label: "Metrics" },
  ],
  height: 140,
};

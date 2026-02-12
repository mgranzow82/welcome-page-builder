/**
 * Central color mapping for blog tags and case study industries.
 * Use these consistently across all components to ensure visual coherence.
 */

export const tagColors: Record<string, string> = {
  Enterprise: "hsl(15, 80%, 55%)",
  Roadmap: "hsl(210, 70%, 50%)",
  Integration: "hsl(45, 85%, 50%)",
  "AI & Cloud": "hsl(120, 60%, 45%)",
  "Solution Architecture": "hsl(270, 65%, 55%)",
};

export const industryColors: Record<string, string> = {
  Banking: "hsl(15, 80%, 55%)",
  TIC: "hsl(210, 70%, 50%)",
  Rail: "hsl(0, 70%, 50%)",
  Gaming: "hsl(45, 85%, 50%)",
};

export function getTagColor(tag: string): string {
  return tagColors[tag] || "hsl(185, 50%, 38%)";
}

export function getIndustryColor(industry: string): string {
  return industryColors[industry] || "hsl(185, 50%, 38%)";
}

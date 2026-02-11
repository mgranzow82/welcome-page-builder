export interface BlogPost {
  slug: string;
  titleKey: string;
  excerptKey: string;
  contentKey: string;
  date: string;
  tag: string;
  // Keep these for fallback / non-translated contexts
  title: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "enterprise-architecture-2026",
    titleKey: "blog.post1.title",
    excerptKey: "blog.post1.excerpt",
    contentKey: "blog.post1.content",
    title: "Why Enterprise Architecture Matters in 2026",
    excerpt: "How structured architecture decisions prevent costly rework and accelerate digital transformation across DACH enterprises.",
    date: "Feb 3, 2026",
    tag: "Enterprise",
    content: `Enterprise Architecture is no longer an academic concept – it determines whether digital transformation succeeds or ends in chaos.

## The Challenge

In many DACH companies, IT landscapes grow organically over the years. What started as a pragmatic solution becomes an obstacle: data silos, inconsistent APIs, lack of transparency about system dependencies.

## Why 2026 Is the Turning Point

With pressure from AI integration, regulatory requirements (DORA, NIS2), and the talent shortage, structured architecture work becomes a competitive advantage. Companies investing in target architectures now avoid costly rework.

## The Pragmatic Approach

Instead of months-long analysis phases, we rely on iterative architecture work: target states in 4–6 weeks, decision-ready roadmaps, and documentation that teams actually use.

**Conclusion:** Enterprise Architecture is not a luxury, but the foundation for sound technology decisions – especially in regulated industries.`,
  },
  {
    slug: "ai-ready-infrastructure",
    titleKey: "blog.post2.title",
    excerptKey: "blog.post2.excerpt",
    contentKey: "blog.post2.content",
    title: "AI-Ready Infrastructure: A Pragmatic Guide",
    excerpt: "Moving beyond buzzwords — concrete steps to prepare your IT landscape for meaningful AI integration.",
    date: "Jan 22, 2026",
    tag: "AI & Cloud",
    content: `Every company talks about AI – but very few have an infrastructure that can actually support AI workloads.

## More Than GPU Clusters

AI readiness doesn't start with model selection, but with data quality, integration layers, and governance. Without clean APIs and consistent data models, AI projects remain isolated solutions.

## The Five Pillars of AI-Ready Infrastructure

1. **Data Architecture** – Consistent data models, data mesh or data lakehouse depending on maturity
2. **API-First Approach** – Standardized interfaces for model integration
3. **Cloud-native Compute** – Scalable resources for training and inference
4. **Governance & Security** – Data protection, bias monitoring, audit trails
5. **Team Enablement** – Architecture patterns that development teams can use independently

## Our Approach

We start with an Architecture Assessment: Where does your infrastructure stand today? What quick wins are there? And what does a realistic 12-month roadmap look like?

**The Result:** No PowerPoint visions, but a concrete plan with prioritized measures.`,
  },
  {
    slug: "integration-patterns-modern-enterprise",
    titleKey: "blog.post3.title",
    excerptKey: "blog.post3.excerpt",
    contentKey: "blog.post3.content",
    title: "Integration Patterns for the Modern Enterprise",
    excerpt: "Event-driven, API-first or hybrid? Choosing the right integration strategy for your organization.",
    date: "Jan 10, 2026",
    tag: "Integration",
    content: `Choosing the right integration strategy determines how flexible and resilient an IT landscape is.

## The Spectrum of Possibilities

Between synchronous REST APIs and fully event-driven architectures with Kafka lies a broad spectrum. The right choice depends on factors that are often overlooked.

## Decision Criteria

- **Consistency Requirements** – Do you need immediate consistency or is eventual consistency sufficient?
- **Volume & Latency** – How many events per second? What response times are acceptable?
- **Team Maturity** – Can the team operate and debug event-driven systems?
- **Regulation** – Are there audit requirements for traceability?

## Hybrid Approaches in Practice

In reality, hybrid approaches work best: synchronous APIs for user-facing interactions, events for background processes and data synchronization.

**Our Experience:** In over 150 projects, we've learned that the best architecture is the one that fits the team and context – not the one that's currently trending.`,
  },
];

export interface CaseStudy {
  slug: string;
  titleKey: string;
  teaserKey: string;
  industry: string;
  industryKey: string;
  region: string;
  regionKey: string;
  offeringKey: string;
  roleKey: string;
  summaryKey: string;
  startingPointKeys: string[];
  objectiveKeys: string[];
  approachSections: {
    titleKey: string;
    itemKeys: string[];
  }[];
  outcomeKeys: string[];
  color: string;
  icon: "building" | "shield" | "train" | "gamepad";
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ing-credit-rating-platform",
    titleKey: "cs.ing.title",
    teaserKey: "cs.ing.teaser",
    industry: "Banking",
    industryKey: "cs.ing.industry",
    region: "Germany (EU)",
    regionKey: "cs.ing.region",
    offeringKey: "cs.ing.offering",
    roleKey: "cs.ing.role",
    summaryKey: "cs.ing.summary",
    startingPointKeys: ["cs.ing.start1", "cs.ing.start2", "cs.ing.start3"],
    objectiveKeys: ["cs.ing.obj1", "cs.ing.obj2", "cs.ing.obj3"],
    approachSections: [
      { titleKey: "cs.ing.app1.title", itemKeys: ["cs.ing.app1.i1", "cs.ing.app1.i2"] },
      { titleKey: "cs.ing.app2.title", itemKeys: ["cs.ing.app2.i1", "cs.ing.app2.i2"] },
      { titleKey: "cs.ing.app3.title", itemKeys: ["cs.ing.app3.i1", "cs.ing.app3.i2"] },
      { titleKey: "cs.ing.app4.title", itemKeys: ["cs.ing.app4.i1", "cs.ing.app4.i2"] },
    ],
    outcomeKeys: ["cs.ing.out1", "cs.ing.out2", "cs.ing.out3"],
    color: "hsl(15, 80%, 55%)",
    icon: "building",
  },
  {
    slug: "tuev-sued-scheduling-platform",
    titleKey: "cs.tuev.title",
    teaserKey: "cs.tuev.teaser",
    industry: "TIC",
    industryKey: "cs.tuev.industry",
    region: "Global (HQ Germany)",
    regionKey: "cs.tuev.region",
    offeringKey: "cs.tuev.offering",
    roleKey: "cs.tuev.role",
    summaryKey: "cs.tuev.summary",
    startingPointKeys: ["cs.tuev.start1", "cs.tuev.start2", "cs.tuev.start3"],
    objectiveKeys: ["cs.tuev.obj1", "cs.tuev.obj2", "cs.tuev.obj3"],
    approachSections: [
      { titleKey: "cs.tuev.app1.title", itemKeys: ["cs.tuev.app1.i1", "cs.tuev.app1.i2"] },
      { titleKey: "cs.tuev.app2.title", itemKeys: ["cs.tuev.app2.i1", "cs.tuev.app2.i2"] },
      { titleKey: "cs.tuev.app3.title", itemKeys: ["cs.tuev.app3.i1", "cs.tuev.app3.i2"] },
    ],
    outcomeKeys: ["cs.tuev.out1", "cs.tuev.out2", "cs.tuev.out3"],
    color: "hsl(210, 70%, 50%)",
    icon: "shield",
  },
  {
    slug: "deutsche-bahn-cloud-transformation",
    titleKey: "cs.db.title",
    teaserKey: "cs.db.teaser",
    industry: "Rail",
    industryKey: "cs.db.industry",
    region: "Germany",
    regionKey: "cs.db.region",
    offeringKey: "cs.db.offering",
    roleKey: "cs.db.role",
    summaryKey: "cs.db.summary",
    startingPointKeys: ["cs.db.start1", "cs.db.start2", "cs.db.start3"],
    objectiveKeys: ["cs.db.obj1", "cs.db.obj2", "cs.db.obj3"],
    approachSections: [
      { titleKey: "cs.db.app1.title", itemKeys: ["cs.db.app1.i1", "cs.db.app1.i2"] },
      { titleKey: "cs.db.app2.title", itemKeys: ["cs.db.app2.i1", "cs.db.app2.i2"] },
      { titleKey: "cs.db.app3.title", itemKeys: ["cs.db.app3.i1", "cs.db.app3.i2"] },
    ],
    outcomeKeys: ["cs.db.out1", "cs.db.out2", "cs.db.out3"],
    color: "hsl(0, 70%, 50%)",
    icon: "train",
  },
  {
    slug: "gauselmann-merkur-gaming-platform",
    titleKey: "cs.merkur.title",
    teaserKey: "cs.merkur.teaser",
    industry: "Gaming",
    industryKey: "cs.merkur.industry",
    region: "International",
    regionKey: "cs.merkur.region",
    offeringKey: "cs.merkur.offering",
    roleKey: "cs.merkur.role",
    summaryKey: "cs.merkur.summary",
    startingPointKeys: ["cs.merkur.start1", "cs.merkur.start2", "cs.merkur.start3"],
    objectiveKeys: ["cs.merkur.obj1", "cs.merkur.obj2", "cs.merkur.obj3"],
    approachSections: [
      { titleKey: "cs.merkur.app1.title", itemKeys: ["cs.merkur.app1.i1", "cs.merkur.app1.i2"] },
      { titleKey: "cs.merkur.app2.title", itemKeys: ["cs.merkur.app2.i1", "cs.merkur.app2.i2"] },
      { titleKey: "cs.merkur.app3.title", itemKeys: ["cs.merkur.app3.i1", "cs.merkur.app3.i2"] },
    ],
    outcomeKeys: ["cs.merkur.out1", "cs.merkur.out2", "cs.merkur.out3"],
    color: "hsl(45, 85%, 50%)",
    icon: "gamepad",
  },
];

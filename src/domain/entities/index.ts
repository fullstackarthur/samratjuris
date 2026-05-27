export interface Pillar {
  id: string;
  title: string;
  description: string;
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
}

export interface PracticeArea {
  id: string;
  category: string;
  items: string[];
}

export interface AudienceProfile {
  id: string;
  title: string;
  description: string;
}

export interface FirmOverview {
  title: string;
  subtitle: string;
  description: string;
  pillars: Pillar[];
  advantages: Advantage[];
  practiceAreas: PracticeArea[];
  audiences: AudienceProfile[];
}

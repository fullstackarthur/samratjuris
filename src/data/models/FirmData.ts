export interface PillarDTO {
  id: string;
  title: string;
  description: string;
}

export interface AdvantageDTO {
  id: string;
  title: string;
  description: string;
}

export interface PracticeAreaDTO {
  id: string;
  category: string;
  items: string[];
}

export interface AudienceDTO {
  id: string;
  title: string;
  description: string;
}

export interface FirmProfileDTO {
  title: string;
  subtitle: string;
  description: string;
  pillars: PillarDTO[];
  advantages: AdvantageDTO[];
  practiceAreas: PracticeAreaDTO[];
  audiences: AudienceDTO[];
}

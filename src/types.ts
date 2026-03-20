export interface AgentAbility {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string | null;
}

export interface AgentRole {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface Agent {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags: string[] | null;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string | null;
  fullPortrait: string | null;
  fullPortraitV2: string | null;
  killfeedPortrait: string;
  background: string | null;
  backgroundGradientColors: string[];
  isPlayableCharacter: boolean;
  role: AgentRole;
  abilities: AgentAbility[];
}

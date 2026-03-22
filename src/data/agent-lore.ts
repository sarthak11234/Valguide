export const agentLore: Record<string, string> = {
  Jett:
    "Born in South Korea, Sunwoo Han (Jett) was a chef before becoming one of the most agile Radiants on Earth. Driven from her home after a storm incident tied to her wind-manipulating powers, she was recruited by the VALORANT Protocol as its 10th agent. Her speed and evasive combat style make her an unparalleled skirmisher, often clashing with her Omega Earth counterpart.",
  Phoenix:
    "Hailing from the UK, Spencer's star power is undeniable. Before joining VALORANT as its 9th agent, he attended a performing arts school but was suspended for accidentally burning down the building. Using his volatile fire-bending abilities, Phoenix operates on pure instinct and confidence, lighting up the battlefield and bringing explosive energy to every engagement.",
  Reyna:
    "Forged in the heart of Mexico, Zyanya Mondragón (Reyna) is a ruthless predator who thrives on single combat. She despises the use of Radianite technology, preferring her natural ability to absorb the life force of her enemies. Reyna's brutal methods and anti-human sentiments often put her at odds with Earth's governments, though she remains fiercely protective of her younger sister.",
  Viper:
    "Dr. Sabine Callas is the monstrous scientist known as Viper. Originally a brilliant American researcher, her obsession with chemical weapons and toxins led her to become the co-founder (Agent 2) of the VALORANT Protocol alongside Brimstone. She is a woman of dangerous secrets, using her poisonous gas to cripple enemy vision and slowly drain their life.",
  Omen:
    "A phantom of a memory, Omen is a shadow hunter of unknown origin. His physical form was torn apart in a catastrophic event (rumored to be tied to Viper), and he now exists in a constant state of agonizing flux between realities. He relies on the VALORANT Protocol to help piece together the fragments of his former human life, striking from the darkness in the meantime.",
  Chamber:
    "Vincent Fabron is a wealthy French weapons designer whose charming exterior hides a cunning intellect. Using his connections to orchestrate the destruction of the Everett-Linde facility (Fracture), Chamber secured his spot in the VALORANT Protocol to further his own mysterious agenda. He relies entirely on custom, high-tech weaponry crafted with pure Radianite.",
  Sage:
    "The bastion of China, Ling Ying Wei (Sage) was an ascetic monk before bringing her life-giving powers to the VALORANT Protocol. As an original founder, she ensures the survival of her team, reviving fallen agents and manipulating Radianite orbs to slow enemy advances. She carries heavily the burden of the lives she is forced to take in order to save others.",
  Brimstone:
    "Joining from the USA, Liam Byrne is the tactical commander and founding member (Agent 1) of the VALORANT Protocol. A grizzled veteran relying on orbital technology rather than innate Radiant powers, Brimstone calls in precision smokes and devastating strikes to control the battlefield. He operates closely with Viper, though their moral compasses rarely align.",
  Killjoy:
    "A German engineering prodigy, Klara Böhringer (Killjoy) is the genius behind most of the VALORANT Protocol's high-tech equipment, including the teleporters on Bind. Securing the perimeter with her arsenal of turrets and alarmbots, she prefers to let her deadly inventions do the heavy lifting while she analyzes the engagement from afar.",
  Cypher:
    "The Moroccan information broker known as Aamir (Cypher) trades in secrets and lies. Nobody knows his true face, hidden behind a high-tech mask. Using a network of hidden cameras and tripwires, Cypher gathers critical intelligence on enemy movements. He joined the Protocol to find answers about a devastating personal loss, trusting no one entirely.",
  Sova:
    "Born in the harsh winter of Severomorsk, Russia, Sasha Novikov (Sova) is a master tracker. Using his custom-built bow and recon drone, he ensures that no enemy can hide from the Protocol's sight. Sova lost his right eye on a mission and replaced it with a cybernetic implant, enhancing his already unparalleled scouting abilities in the field.",
  Fade:
    "Hailing from Turkey, Hazal Eyletmez (Fade) is a radiant bounty hunter who manipulates raw nightmare energy. She initially blackmailed the VALORANT Protocol, sending them horrifying visions to extort information. After they tracked her down, she was forcibly recruited, now using her terrifying powers to paralyze enemies with their deepest fears before securing the kill.",
  Clove:
    "Originating from Scotland, Clove is an immortal Radiant trickster who views combat as a game. Their unique ability allows them to resurrect themselves after death or aid their team from beyond the grave. Mischievous and chaotic, Clove uses their connection to life essence to disrupt enemy plans and create unpredictability in every firefight."
};

/**
 * Returns deep backstories based on agent name.
 * Falls back to a generic description if no deep lore is mapped.
 */
export function getAgentLore(agentName: string): string {
  const lore = agentLore[agentName];
  if (lore) return lore;

  return `Little is known about ${agentName}'s life prior to joining the VALORANT Protocol. Operative details are currently heavily redacted by command. Classified documents suggest a history involving extensive combat experience and significant Radianite exposure.`;
}

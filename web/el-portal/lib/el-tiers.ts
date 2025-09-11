import { ELTierRequirement } from '@/types';

// EL Tier definitions based on UGAHacks FAQ
export const EL_TIER_REQUIREMENTS: ELTierRequirement[] = [
  {
    tierLevel: 'tier1',
    tierName: 'Beginner',
    description: 'Basic projects that focus on learning fundamental skills',
    eligibility: 'Freshmen or those new to hackathons/coding',
    projectScope: ['Web apps', 'Data visualization', 'Simple games'],
    requiredClubHours: 3,
    requiredAdditionalHours: 9,
    totalRequiredHours: 12,
    documentationRequirements: 'Clear and detailed documentation of the learning process, including challenges faced and solutions',
    aiUsageGuidelines: 'Minimal AI assistance allowed, focused on learning coding basics'
  },
  {
    tierLevel: 'tier2',
    tierName: 'Intermediate',
    description: 'Projects with more complex functionalities',
    eligibility: 'Students with some experience in hackathons/coding',
    projectScope: ['APIs', 'Databases', 'Mobile apps', 'Authentication'],
    requiredClubHours: 3,
    requiredAdditionalHours: 6,
    totalRequiredHours: 9,
    documentationRequirements: 'Regular progress tracking, including challenges faced and how they were overcome',
    aiUsageGuidelines: 'AI can be used for inspiration or support, but critical components must be manually coded'
  },
  {
    tierLevel: 'tier3',
    tierName: 'Advanced',
    description: 'Advanced projects with significant technical depth or societal impact',
    eligibility: 'Experienced coders/those wanting a challenge',
    projectScope: ['Machine learning models', 'IoT solutions', 'Real-time collaboration', 'Unique software tools/languages'],
    requiredClubHours: 3,
    requiredAdditionalHours: 3,
    totalRequiredHours: 6,
    documentationRequirements: 'More detailed documentation. Includes same amount of challenges/solutions, but also includes a project roadmap, technical details, and analysis',
    aiUsageGuidelines: 'AI may be used as a tool, but the project must be original work and critical thinking needs to be shown/documented'
  }
];

export function getTierRequirement(tierLevel: 'tier1' | 'tier2' | 'tier3'): ELTierRequirement | undefined {
  return EL_TIER_REQUIREMENTS.find(tier => tier.tierLevel === tierLevel);
}

export function getAllTierRequirements(): ELTierRequirement[] {
  return EL_TIER_REQUIREMENTS;
}

export function calculateProgress(userTier: ELTierRequirement, completedClubHours: number, completedAdditionalHours: number) {
  const clubProgress = Math.min(completedClubHours / userTier.requiredClubHours, 1);
  const additionalProgress = Math.min(completedAdditionalHours / userTier.requiredAdditionalHours, 1);
  const totalProgress = (completedClubHours + completedAdditionalHours) / userTier.totalRequiredHours;
  
  return {
    clubProgress: Math.round(clubProgress * 100),
    additionalProgress: Math.round(additionalProgress * 100),
    totalProgress: Math.round(totalProgress * 100),
    isComplete: completedClubHours >= userTier.requiredClubHours && completedAdditionalHours >= userTier.requiredAdditionalHours,
    remainingClubHours: Math.max(0, userTier.requiredClubHours - completedClubHours),
    remainingAdditionalHours: Math.max(0, userTier.requiredAdditionalHours - completedAdditionalHours),
    totalRemainingHours: Math.max(0, userTier.totalRequiredHours - (completedClubHours + completedAdditionalHours))
  };
}

export function getTierDisplayName(tierLevel: 'tier1' | 'tier2' | 'tier3'): string {
  const tier = getTierRequirement(tierLevel);
  return tier ? tier.tierName : 'Unknown Tier';
}

export function getTierColor(tierLevel: 'tier1' | 'tier2' | 'tier3'): string {
  switch (tierLevel) {
    case 'tier1':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'tier2':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'tier3':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
}

export const moodActivityMap: Partial<Record<string, string>> = {
  'energetic->workingOut': 'highEnergy',
  'motivated->workingOut': 'powerSession',
  'angry->workingOut': 'rage',
  'tired->workingOut': 'lightEnergy',

  'calm->working': 'deepFocus',
  'calm->studying': 'deepFocus',
  'motivated->working': 'productive',
  'motivated->studying': 'productive',
  'anxious->studying': 'focusRecovery',
  'tired->working': 'lightFocus',

  'calm->relaxing': 'unwind',
  'sad->relaxing': 'healing',
  'anxious->relaxing': 'calmDown',

  'calm->walking': 'mindfulWalk',
  'sad->walking': 'clearMind',
  'anxious->walking': 'reset',

  'calm->driving': 'smoothRide',
  'energetic->driving': 'nightDrive',
  'sad->driving': 'lateNightDrive',

  'energetic->gaming': 'intense',
  'motivated->gaming': 'grindMode',
  'angry->gaming': 'rageMode',
  'calm->gaming': 'casualPlay',
};

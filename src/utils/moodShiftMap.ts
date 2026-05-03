export const moodShiftMap: Partial<Record<string, string>> = {
  // Happy
  'happy -> motivated': 'boost',
  'happy -> energetic': 'energizing',
  'happy -> sad': 'depressing',

  // Motivated
  'motivated -> energetic': 'energizing',
  'motivated -> angry': 'intense',

  // Energetic
  'energetic -> happy': 'uplifting',
  'energetic -> motivated': 'highMotivation',
  'energetic -> angry': 'intense',

  // Angry
  'angry -> happy': 'uplifting',
  'angry -> motivated': 'focus',
  'angry -> calm': 'cooling',

  // Calm
  'calm -> motivated': 'focus',
  'calm -> energetic': 'energizing',

  // Sad
  'sad -> happy': 'healing',
  'sad -> motivated': 'recovery',
  'sad -> energetic': 'energizing',
  'sad -> calm': 'soothing',

  // Anxious
  'anxious -> happy': 'uplifting',
  'anxious -> calm': 'relaxing',

  // Tired
  'tired -> motivated': 'focus',
  'tired -> energetic': 'energizing',
};

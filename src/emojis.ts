/**                                                             **
 *                          IMPORTANT                            *
 **                                                             **
 * Arrays of Emojis are versioned because they should NEVER change
 * once released. Changing them would compromise the integrity of
 * previously generated results. If new emojis are added, changed
 * or deleted, a new version of the new set should be created.
 */

import versions from '../versions.json';

const emojis = {
    v1: versions.v1.map((e) => e.emoji), // Not using descriptions yet
} as const;

export type Version = keyof typeof emojis;

export default emojis;

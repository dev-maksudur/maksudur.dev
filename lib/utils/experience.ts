/**
 * Utility functions for dynamically computing professional experience.
 * Career started on: November 20, 2020
 */

export const CAREER_START_DATE = "2020-11-20";

/**
 * Calculates the exact full years of experience from the starting career date.
 * Automatically increments with time without manual edits.
 */
export function getYearsOfExperience(startDateStr: string = CAREER_START_DATE): number {
  const start = new Date(startDateStr);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  const monthDiff = now.getMonth() - start.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) {
    years--;
  }

  return Math.max(1, years);
}

/**
 * Returns a human-friendly experience string, e.g. "5+ Years", "6+ Years".
 */
export function getExperienceText(startDateStr: string = CAREER_START_DATE): string {
  const years = getYearsOfExperience(startDateStr);
  return `${years}+ Years`;
}

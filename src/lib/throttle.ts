/**
 * Throttle a function so it only executes once within a given delay.
 *
 * @param func - The function to throttle
 * @param delay - Minimum time (ms) between calls
 * @returns A throttled version of the function
 */
export function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

/**
 * Creates a route matcher function based on array of path patterns
 * @param patterns - Array of path patterns to match against
 * @returns A function that tests if a path matches any of the patterns
 */
export function createRouteMatcher(patterns: string[]) {
  const regexPatterns = patterns.map((pattern) => new RegExp(`^${pattern}$`));

  return (path: string) => {
    return regexPatterns.some((regex) => regex.test(path));
  };
}

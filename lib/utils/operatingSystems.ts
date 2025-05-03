export function isIOS(): boolean {
  if (typeof window !== "undefined") {
    // condition needed for CI/CD
    return /iPhone|iPod|iPad/.test(window.navigator.userAgent) || isIpadOS();
  }
  return false;
}

export function isIpadOS(): boolean {
  if (typeof window !== "undefined") {
    // condition needed for CI/CD
    return (
      window.navigator.maxTouchPoints > 2 &&
      window.navigator.userAgent.toLowerCase().includes("mac")
    );
  }
  return false;
}

export function isAndroid(): boolean {
  if (typeof window !== "undefined") {
    return /Android/i.test(window.navigator.userAgent);
  }
  return false;
}

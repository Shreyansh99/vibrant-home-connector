
/**
 * Combines multiple class names into a single string
 */
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export { cn };

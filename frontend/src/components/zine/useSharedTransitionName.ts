import { useViewTransitionState } from 'react-router';

/**
 * Returns `name` only while a same-document view transition to `to` is active,
 * otherwise `undefined`. Apply the result to a `viewTransitionName` style so the
 * element (e.g. a card title) morphs into its counterpart on the destination
 * page. Names must be unique per page during a transition, so pass an id/slug.
 *
 * Must be called from a component rendered once per item (not inside `.map`),
 * since it's a hook.
 */
export function useSharedTransitionName(to: string, name: string): string | undefined {
  const isTransitioning = useViewTransitionState(to);
  return isTransitioning ? name : undefined;
}

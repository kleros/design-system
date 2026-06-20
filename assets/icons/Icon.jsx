import './icon-data.js'; // side-effect: sets window.__klerosIconData

function resolveIcons() {
  return (typeof window !== 'undefined' && window.__klerosIconData) || {};
}

export function Icon({ name, size = 16, ...rest }) {
  const d = resolveIcons()[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox={d.viewBox}
      fill="none"
      // body strings are emitter-controlled <path> markup — geometry,
      // numeric fills and transforms only; no .fig-authored text reaches them.
      dangerouslySetInnerHTML={{ __html: d.body }}
      {...rest}
    />
  );
}
export default Icon;

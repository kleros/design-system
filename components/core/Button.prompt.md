**Button** — pill-shaped primary action; use for any click target that triggers an action or navigation.

```jsx
<Button variant="primary">Enter Court</Button>
<Button variant="brand" size="lg">Get started</Button>
<Button variant="secondary" iconLeft={<Icon name="IconsGavel" />}>Resolve dispute</Button>
```

Variants: `primary` (cyan), `brand` (purple→blue gradient CTA), `secondary` (outline — flips white on `.k-dark`), `tertiary` (accent text), `ghost`. Sizes: `sm` 36 · `md` 48 · `lg` 56. Pass `as="a"` for links.

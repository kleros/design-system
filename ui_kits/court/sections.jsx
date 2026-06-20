/* Kleros Court dApp — juror dashboard sections. Loaded after the DS bundle.
   Reads primitives from window.KlerosDesignSystem_398995.
   A faithful re-skin of the Court v2 juror Dashboard, composed entirely from
   this design system's primitives + tokens. The whole app shell runs in the
   signature deep-purple `.k-dark` context. */
const K = window.KlerosDesignSystem_398995;
const { Button, IconButton, Tag, Card, Badge, Avatar, Icon, Logo, Input, Select } = K;

const CONTENT = 1184;
const container = { maxWidth: CONTENT, margin: '0 auto', padding: '0 32px' };
const muted = 'var(--text-tertiary)';

/* Dispute period → Badge variant + label. Mirrors Court's lifecycle:
   Evidence → Commit → Vote → Appeal → Execution. */
const PERIOD = {
  evidence:  { variant: 'info',    label: 'Evidence' },
  commit:    { variant: 'warning', label: 'Commit' },
  vote:      { variant: 'warning', label: 'Voting' },
  appeal:    { variant: 'error',   label: 'Appeal' },
  execution: { variant: 'neutral', label: 'Execution' },
  resolved:  { variant: 'success', label: 'Resolved' },
};

/* ---------- App top bar (chrome) ---------- */
const NAV = ['Cases', 'Courts', 'Dashboard', 'Get PNK'];
function CourtTopBar() {
  const [active, setActive] = React.useState('Dashboard');
  return (
    <header style={{ background: 'var(--k-bg-2)', borderBottom: '1px solid var(--color-border)', height: 72, display: 'flex', alignItems: 'center' }}>
      <div style={{ ...container, maxWidth: 1360, display: 'flex', alignItems: 'center', gap: 28, width: '100%' }}>
        {/* brand */}
        <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#fff', textDecoration: 'none', flex: 'none' }}>
          <Logo variant="symbol" height={26} />
          <span style={{ fontWeight: 600, fontSize: 18, letterSpacing: '-0.01em' }}>Court</span>
        </a>
        {/* primary nav */}
        <nav style={{ display: 'flex', gap: 4 }}>
          {NAV.map((n) => (
            <a key={n} href="#" onClick={(e) => { e.preventDefault(); setActive(n); }}
              style={{ padding: '8px 14px', borderRadius: 8, fontSize: 15, fontWeight: 500, textDecoration: 'none',
                color: n === active ? '#fff' : 'var(--text-tertiary)',
                background: n === active ? 'rgba(255,255,255,.08)' : 'transparent' }}>
              {n}
            </a>
          ))}
        </nav>
        {/* search */}
        <div style={{ marginLeft: 'auto', width: 260 }}>
          <Input placeholder="Search by dispute ID, court…" />
        </div>
        {/* chain pill */}
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 40, padding: '0 14px', borderRadius: 999, border: '1px solid var(--color-border)', color: 'var(--text-secondary)', fontSize: 14, fontWeight: 500, flex: 'none' }}>
          <Icon name="IconsGlobe" size={16} /> Ethereum
        </span>
        {/* theme toggle */}
        <IconButton label="Toggle theme" outline><Icon name="IconsSun" size={18} /></IconButton>
        {/* wallet */}
        <button style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 40, padding: '0 6px 0 14px', borderRadius: 999, border: '1px solid var(--color-border)', background: 'rgba(255,255,255,.04)', color: '#fff', fontSize: 14, fontWeight: 500, cursor: 'pointer', flex: 'none' }}>
          juror.eth
          <Avatar initials="JU" size={28} />
        </button>
      </div>
    </header>
  );
}

/* ---------- Dashboard header (who's connected) ---------- */
function DashboardHeader() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '40px 0 24px' }}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 120% at 18% 0%, rgba(39,205,254,.16), transparent 60%)' }} />
      <div style={{ ...container, position: 'relative', display: 'flex', alignItems: 'center', gap: 24 }}>
        <Avatar initials="JU" size={64} />
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 32, margin: 0, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>juror.eth</h1>
            <Tag>Level 4 · Veteran</Tag>
          </div>
          <p style={{ margin: '6px 0 0', color: 'var(--text-tertiary)', fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            0x9C1c…3f2A
            <span style={{ color: 'var(--color-border-strong)' }}>·</span>
            Staked in 3 courts
          </p>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 12 }}>
          <Button variant="secondary" iconLeft={<Icon name="IconsReward" size={18} />}>Claim rewards</Button>
          <Button variant="brand" iconLeft={<Icon name="IconsPNK" size={18} />}>Stake PNK</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Juror stats ---------- */
const STATS = [
  { icon: 'IconsPNK',             label: 'Total staked',     value: '24,500', unit: 'PNK',       accent: 'var(--k-purple-2)' },
  { icon: 'IconsCheckCircleFull', label: 'Coherent votes',   value: '92%',    unit: '46 / 50',   accent: 'var(--k-success)' },
  { icon: 'IconsReward',          label: 'Rewards earned',   value: '1.84',   unit: 'ETH + 3,200 PNK', accent: 'var(--k-blue)' },
  { icon: 'IconsGavel',          label: 'Resolved disputes', value: '50',     unit: 'cases',     accent: 'var(--k-blue-link)' },
];
function JurorStats() {
  return (
    <section style={{ ...container, padding: '8px 32px 16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
        {STATS.map((s) => (
          <Card key={s.label}>
            <div style={{ padding: 24 }}>
              <span style={{ display: 'inline-flex', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10, background: 'color-mix(in srgb, ' + s.accent + ' 16%, transparent)', color: s.accent, marginBottom: 16 }}>
                <Icon name={s.icon} size={22} />
              </span>
              <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 30, color: 'var(--text-primary)', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 6 }}>{s.unit}</div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---------- Courts staked in ---------- */
const COURTS = [
  { name: 'General Court',          stake: 12000, share: 1.00 },
  { name: 'Blockchain · Technical', stake: 8000,  share: 0.66 },
  { name: 'Curation',               stake: 4500,  share: 0.37 },
];
function MyCourts() {
  return (
    <section style={{ ...container, padding: '24px 32px 8px' }}>
      <Card>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center' }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, margin: 0, color: 'var(--text-primary)' }}>Courts you've staked in</h2>
          <a href="#" style={{ marginLeft: 'auto', color: 'var(--text-link)', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Manage stakes →</a>
        </div>
        <div>
          {COURTS.map((c, i) => (
            <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '18px 24px', borderTop: i ? '1px solid var(--color-border)' : 'none' }}>
              <span style={{ display: 'inline-flex', color: 'var(--k-blue-2)', flex: 'none' }}><Icon name="IconsGavel" size={20} /></span>
              <span style={{ fontWeight: 500, fontSize: 16, color: 'var(--text-primary)', width: 240, flex: 'none' }}>{c.name}</span>
              <div style={{ flex: 1, height: 6, borderRadius: 3, background: 'rgba(255,255,255,.08)', overflow: 'hidden' }}>
                <div style={{ width: (c.share * 100) + '%', height: '100%', background: 'var(--gradient-brand)' }} />
              </div>
              <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--text-primary)', width: 150, textAlign: 'right', flex: 'none' }}>{c.stake.toLocaleString()} PNK</span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

/* ---------- My cases ---------- */
const CASES = [
  { id: 1492, court: 'Humanity · Proof of Humanity', period: 'vote',      q: 'Is this submission a genuine, unique living human?', reward: '0.07 ETH', time: '1d 09h left' },
  { id: 1487, court: 'Curate · Tokens',              period: 'evidence',  q: 'Should the token “ARB” be listed on the registry?', reward: '0.06 ETH', time: '3d 02h left' },
  { id: 1483, court: 'General Court',                period: 'appeal',    q: 'Did the freelancer deliver the agreed milestone?',  reward: '0.04 ETH', time: '14h 22m left' },
  { id: 1471, court: 'Blockchain · Technical',       period: 'commit',    q: 'Was the oracle’s reported price within tolerance?', reward: '0.05 ETH', time: '2d 18h left' },
  { id: 1465, court: 'Escrow',                        period: 'execution', q: 'Release of escrowed funds for order #88121.',        reward: '0.05 ETH', time: 'Awaiting execution' },
  { id: 1460, court: 'Blockchain · Technical',       period: 'resolved',  q: 'Was the bug report a valid critical disclosure?',    reward: '+0.03 ETH', time: 'Coherent · won' },
];
const FILTERS = { 'All': () => true, 'In progress': (c) => c.period !== 'resolved' && c.period !== 'execution', 'Resolved': (c) => c.period === 'resolved' || c.period === 'execution' };
function ctaFor(period) {
  if (period === 'vote' || period === 'commit') return { label: 'Cast your vote', variant: 'primary' };
  if (period === 'evidence') return { label: 'Submit evidence', variant: 'secondary' };
  if (period === 'appeal') return { label: 'Fund appeal', variant: 'secondary' };
  return { label: 'View case', variant: 'ghost' };
}
function CaseCard({ c }) {
  const p = PERIOD[c.period];
  const cta = ctaFor(c.period);
  return (
    <Card interactive>
      <div style={{ padding: 22, display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 14 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--text-primary)' }}>#{c.id}</span>
          <span style={{ marginLeft: 'auto' }}><Badge variant={p.variant} dot>{p.label}</Badge></span>
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-link)', fontWeight: 500, marginBottom: 8 }}>{c.court}</div>
        <p style={{ fontSize: 15, color: 'var(--text-primary)', margin: '0 0 18px', lineHeight: 1.45, flex: 1 }}>{c.q}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 18 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="IconsReward" size={15} /> {c.reward}</span>
          <span style={{ color: 'var(--color-border-strong)' }}>·</span>
          <span>{c.time}</span>
        </div>
        <Button variant={cta.variant} size="sm" style={{ width: '100%' }}>{cta.label}</Button>
      </div>
    </Card>
  );
}
function MyCases() {
  const [tab, setTab] = React.useState('All');
  const keys = Object.keys(FILTERS);
  const shown = CASES.filter(FILTERS[tab]);
  return (
    <section style={{ ...container, padding: '32px 32px 64px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, margin: 0, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>My cases</h2>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 10 }}>
          {keys.map((k) => (
            <Tag key={k} selectable selected={k === tab} onClick={() => setTab(k)}>{k}</Tag>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {shown.map((c) => <CaseCard key={c.id} c={c} />)}
      </div>
    </section>
  );
}

/* ---------- Slim app footer ---------- */
function CourtFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--color-border)', background: 'var(--k-bg-2)' }}>
      <div style={{ ...container, maxWidth: 1360, height: 64, display: 'flex', alignItems: 'center', gap: 24, fontSize: 14 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#fff', fontWeight: 500 }}>
          <Logo variant="symbol" height={18} /> Kleros Court
        </span>
        <nav style={{ display: 'flex', gap: 20, color: muted }}>
          <a href="#" style={{ color: 'var(--text-tertiary)', textDecoration: 'none' }}>Docs</a>
          <a href="#" style={{ color: 'var(--text-tertiary)', textDecoration: 'none' }}>Governance</a>
          <a href="#" style={{ color: 'var(--text-tertiary)', textDecoration: 'none' }}>Telegram</a>
        </nav>
        <span style={{ marginLeft: 'auto', color: muted }}>Decentralized Justice · Secured by Kleros</span>
      </div>
    </footer>
  );
}

Object.assign(window, { CourtTopBar, DashboardHeader, JurorStats, MyCourts, MyCases, CourtFooter });

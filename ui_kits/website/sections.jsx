/* Kleros website — homepage sections. Loaded after the DS bundle.
   Reads primitives from window.KlerosDesignSystem_398995. */
const K = window.KlerosDesignSystem_398995;
const { Button, Tag, Card, Icon, Logo, Navbar, Footer } = K;

const CONTENT = 1184;
const container = { maxWidth: CONTENT, margin: '0 auto', padding: '0 32px' };

/* ---------- Promo bar ---------- */
function PromoBar() {
  return (
    <div style={{ background: 'var(--gradient-brand)', color: '#fff', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 14, fontWeight: 500 }}>
      <span>Buy PNK &amp; join the justice revolution</span>
      <Icon name="IconsArrowChevronDown" size={14} style={{ transform: 'rotate(-90deg)' }} />
    </div>
  );
}

/* ---------- Hero (dark) ---------- */
function Hero() {
  return (
    <section className="k-dark" style={{ position: 'relative', textAlign: 'center', padding: '72px 32px 112px', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(50% 70% at 50% 0%, rgba(39,205,254,.18), transparent 60%)' }} />
      <div aria-hidden style={{ position: 'absolute', left: '50%', top: 24, transform: 'translateX(-50%)', color: '#fff', opacity: .06 }}><Logo variant="symbol" height={360} /></div>
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'inline-flex', marginBottom: 28, color: '#fff' }}>
          <Logo variant="symbol" height={56} />
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 88, lineHeight: 1.04, margin: '0 0 20px', letterSpacing: '-0.02em', background: 'var(--gradient-brand-soft)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
          Decentralized Justice
        </h1>
        <p style={{ fontSize: 20, color: 'var(--k-on-dark-2)', maxWidth: 620, margin: '0 auto 36px', lineHeight: 1.5 }}>
          Kleros provides fast, secure and affordable dispute resolution for the onchain economy — arbitration you can build on.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          <Button variant="primary" size="lg">Enter Court</Button>
          <Button variant="secondary" size="lg">Read the whitepaper</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trusted by ---------- */
const PARTNERS = ['1inch', 'Gnosis', 'Curate', 'Reality.eth', 'Galxe', 'Uniswap', 'Shutter', 'Etherscan', 'MakerDAO'];
function TrustedBy() {
  return (
    <section style={{ padding: '8px 32px 72px' }}>
      <p style={{ textAlign: 'center', color: 'var(--k-ink-3)', fontSize: 14, marginBottom: 28 }}>Trusted by</p>
      <div style={{ ...container, display: 'flex', flexWrap: 'wrap', gap: '28px 48px', alignItems: 'center', justifyContent: 'center' }}>
        {PARTNERS.map((p) => (
          <span key={p} style={{ fontWeight: 600, fontSize: 18, color: 'var(--k-ink-3)', opacity: .7 }}>{p}</span>
        ))}
      </div>
    </section>
  );
}

/* ---------- Feature row (light) ---------- */
const FEATURES = [
  { icon: 'IconsTransparency', title: 'Decentralized Justice', body: 'Autonomous and transparent justice, secured by blockchain.', link: 'Read our Yellow Paper' },
  { icon: 'IconsCollective', title: 'Collective Intelligence', body: 'Disputes are resolved by randomly selected, incentivized jurors.', link: 'Learn how jurors are drawn' },
  { icon: 'IconsReward', title: 'Fairness', body: 'Jurors earn rewards for aligning with fair, honest outcomes.', link: '> $1.2M distributed' },
];
function Reimagining() {
  return (
    <section style={{ background: 'var(--k-surface-2)', padding: '88px 32px' }}>
      <div style={container}>
        <h2 style={{ fontSize: 40, fontWeight: 500, margin: '0 0 12px', color: 'var(--k-ink-1)' }}>Reimagining justice for the digital age</h2>
        <p style={{ fontSize: 18, color: 'var(--k-ink-2)', margin: '0 0 48px' }}>Kleros provides the infrastructure for fast, secure and efficient dispute resolution that scales.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {FEATURES.map((f) => (
            <Card key={f.title}>
              <div style={{ padding: 28 }}>
                <span style={{ display: 'inline-flex', width: 48, height: 48, color: 'var(--k-purple)', marginBottom: 20 }}><Icon name={f.icon} size={48} /></span>
                <h3 style={{ fontSize: 24, fontWeight: 500, margin: '0 0 10px', color: 'var(--k-ink-1)' }}>{f.title}</h3>
                <p style={{ fontSize: 16, color: 'var(--k-ink-2)', margin: '0 0 20px', lineHeight: 1.5 }}>{f.body}</p>
                <a className="k-link" href="#" style={{ fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 6 }}>{f.link} <Icon name="IconsArrowChevronDown" size={14} style={{ transform: 'rotate(-90deg)' }} /></a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Ecosystem (dark) with use-case tabs ---------- */
const USECASES = {
  'DeFi & Insurance': { icon: 'IconsReport', body: 'Guarantee fair and efficient claims resolution in decentralized protocols with specialized juries.' },
  'DAO Governance': { icon: 'IconsGovernance', body: 'Resolve disputes in DAOs through transparent, community-driven adjudication.' },
  'Escrow': { icon: 'IconsCoins', body: 'Enable secure transactions in decentralized marketplaces with Kleros as the trust layer.' },
  'Marketplaces': { icon: 'IconsCurator', body: 'Curate registries and settle listing disputes for onchain marketplaces.' },
};
function Ecosystem() {
  const [active, setActive] = React.useState('DeFi & Insurance');
  const keys = Object.keys(USECASES);
  return (
    <section className="k-dark" style={{ background: 'var(--gradient-dark)', color: '#fff', padding: '96px 32px' }}>
      <div style={container}>
        <h2 style={{ fontSize: 40, fontWeight: 500, margin: '0 0 12px' }}>Powering trust across the Web3 ecosystem</h2>
        <p style={{ fontSize: 18, color: 'var(--k-on-dark-2)', margin: '0 0 36px' }}>Explore how Kleros enables fair resolution for the decentralized economy.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
          {keys.map((k) => (
            <Tag key={k} selectable selected={k === active} onClick={() => setActive(k)}>{k}</Tag>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {keys.map((k) => (
            <div key={k} style={{ background: '#fff', borderRadius: 16, padding: 28, opacity: k === active ? 1 : .55, transition: 'opacity .2s', boxShadow: k === active ? '0 16px 48px rgba(8,0,24,.5)' : 'none' }}>
              <span style={{ display: 'inline-flex', width: 44, height: 44, color: 'var(--k-purple)', marginBottom: 16 }}><Icon name={USECASES[k].icon} size={44} /></span>
              <h3 style={{ fontSize: 22, fontWeight: 500, margin: '0 0 10px', color: 'var(--k-ink-1)' }}>{k}</h3>
              <p style={{ fontSize: 15, color: 'var(--k-ink-2)', margin: 0, lineHeight: 1.5 }}>{USECASES[k].body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Participate (light) ---------- */
const ROLES = [
  { icon: 'IconsJuror', title: 'Become a Juror', body: 'Earn rewards while solving cases in the Kleros Court.', cta: 'Join our Telegram' },
  { icon: 'IconsCurator', title: 'Become a Curator', body: 'Earn rewards helping curate the items submitted to Kleros lists.', cta: 'Join our Discord' },
];
function Participate() {
  return (
    <section style={{ padding: '88px 32px' }}>
      <div style={container}>
        <h2 style={{ fontSize: 40, fontWeight: 500, margin: '0 0 12px', color: 'var(--k-ink-1)' }}>Start participating</h2>
        <p style={{ fontSize: 18, color: 'var(--k-ink-2)', margin: '0 0 48px' }}>There are two ways to earn while contributing — serve as a juror or work as a curator.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {ROLES.map((r) => (
            <Card key={r.title} interactive>
              <div style={{ padding: 32, display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                <span style={{ display: 'inline-flex', width: 56, height: 56, color: 'var(--k-blue-link)', flex: 'none' }}><Icon name={r.icon} size={56} /></span>
                <div>
                  <h3 style={{ fontSize: 24, fontWeight: 500, margin: '0 0 8px', color: 'var(--k-ink-1)' }}>{r.title}</h3>
                  <p style={{ fontSize: 16, color: 'var(--k-ink-2)', margin: '0 0 16px', lineHeight: 1.5 }}>{r.body}</p>
                  <a className="k-link" href="#" style={{ fontWeight: 500 }}>{r.cta} →</a>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: 48, background: 'var(--gradient-hero)', borderRadius: 24, padding: '56px 32px', textAlign: 'center', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden style={{ position: 'absolute', left: 40, top: '50%', transform: 'translateY(-50%)', opacity: .18, color: '#fff' }}><Logo variant="symbol" height={140} /></div>
          <div aria-hidden style={{ position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%)', opacity: .18, color: '#fff' }}><Logo variant="symbol" height={140} /></div>
          <h3 style={{ fontSize: 28, fontWeight: 500, margin: '0 0 24px', position: 'relative' }}>Buy PNK to become a juror in the Kleros Court</h3>
          <div style={{ position: 'relative' }}><Button variant="primary" size="lg">Start now</Button></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Product portfolio (rows) ---------- */
const PRODUCTS = [
  { name: 'Court', desc: 'Resolve disputes quickly, securely and affordably across a variety of use cases.' },
  { name: 'Escrow', desc: 'Safeguard your online transactions with our blockchain-powered escrow.' },
  { name: 'Curate', desc: 'Create a curated registry and certifications to power transparency in Web3 and beyond.' },
  { name: 'Scout', desc: 'Get powerful smart-contract insights with Kleros Scout.' },
  { name: 'Proof of Humanity', desc: 'Your human-verified identity for the decentralized world.' },
  { name: 'Vea', desc: 'Cross-chain bridging with low fees and robust security.' },
  { name: 'SafeSnap', desc: 'Secure and transparent DAO governance with onchain enforcement.' },
];
function Portfolio() {
  return (
    <section style={{ padding: '88px 32px' }}>
      <div style={container}>
        <h2 style={{ fontSize: 40, fontWeight: 500, margin: '0 0 12px', color: 'var(--k-ink-1)' }}>Our product portfolio</h2>
        <p style={{ fontSize: 18, color: 'var(--k-ink-2)', margin: '0 0 40px' }}>A portfolio of products serving the diverse needs of decentralized organizations.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {PRODUCTS.map((p) => (
            <a key={p.name} href="#" style={{ display: 'flex', alignItems: 'center', gap: 20, background: 'var(--k-bg-1)', borderRadius: 12, padding: '20px 28px', textDecoration: 'none', border: '1px solid var(--k-on-dark-border)', transition: 'transform .15s, box-shadow .15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.style.boxShadow = 'var(--glow-purple)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              <span style={{ display: 'inline-flex', color: '#fff', flex: 'none' }}><Logo variant="symbol" height={28} /></span>
              <span style={{ fontWeight: 600, fontSize: 18, color: '#fff', width: 180, flex: 'none' }}>{p.name}</span>
              <span style={{ fontSize: 15, color: 'var(--k-on-dark-3)' }}>{p.desc}</span>
              <span style={{ marginLeft: 'auto', color: 'var(--k-blue-2)' }}><Icon name="IconsArrowChevronDown" size={18} style={{ transform: 'rotate(-90deg)' }} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PromoBar, Hero, TrustedBy, Reimagining, Ecosystem, Participate, Portfolio, KNav: Navbar, KFooter: Footer });

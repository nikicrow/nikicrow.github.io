import { Polaroid } from '../components/zine/Polaroid';
import { WashiTape } from '../components/zine/WashiTape';
import { Stamp } from '../components/zine/Stamp';

const SKILLS: Record<string, string[]> = {
  'machine learning': ['PyTorch', 'scikit-learn', 'XGBoost', 'MLflow', 'feature stores', 'model serving'],
  'data engineering': ['Python', 'SQL', 'dbt', 'PostgreSQL', 'BigQuery', 'Airflow', 'pandas'],
  'product & people': ['team leading', 'mentoring', 'roadmaps', 'writing', 'design partnerships'],
};

const SKILL_COLORS = ['var(--zine-terracotta)', 'var(--zine-sage)', 'var(--zine-ochre)'];
const SKILL_ROTS = [-0.6, 0, 0.6];

export function About() {
  return (
    <div>
      {/* Hero: two-column */}
      <section className="zine-grid-about" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 48, alignItems: 'flex-start', marginBottom: 48 }}>
        {/* Left: polaroid */}
        <div style={{ position: 'relative', paddingTop: 20 }}>
          <WashiTape x={40} y={8} w={100} rotate={-5} color="var(--zine-ochre)" pattern="stripes" zIndex={5} />
          <Polaroid caption="that's me" w={240} h={260} rotate={-3} color="var(--zine-blush)" label="self portrait" />
        </div>

        {/* Right: bio intro */}
        <div>
          <Stamp color="var(--zine-sage2)" rotate={-2}>about me</Stamp>
          <h1 className="zine-about-h1" style={{ fontFamily: 'var(--zine-display)', fontSize: 64, fontStyle: 'italic', lineHeight: 1.05, margin: '10px 0 0', fontWeight: 600 }}>
            Hi, I&apos;m
          </h1>
          <span className="zine-about-name" style={{ fontFamily: 'var(--zine-hand)', fontSize: 90, color: 'var(--zine-terracotta2)', lineHeight: 0.9, display: 'block', marginBottom: 14 }}>
            Niki
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 18 }}>
            <span style={{ fontFamily: 'var(--zine-mono)', fontSize: 13, color: 'var(--zine-ink2)', letterSpacing: 0.5 }}>📍 Sydney, Australia</span>
            <span style={{ fontFamily: 'var(--zine-mono)', fontSize: 13, color: 'var(--zine-ink2)', letterSpacing: 0.5 }}>💼 Lead Machine Learning Engineer</span>
          </div>
          <p style={{ fontSize: 17, color: 'var(--zine-ink2)', lineHeight: 1.6, maxWidth: 500 }}>
            Data scientist and ML engineer who also happens to be a mum to two daughters: an energetic toddler called Ember and a newborn called Imogen.
          </p>
        </div>
      </section>

      {/* My story */}
      <section style={{ background: '#fff', padding: 32, boxShadow: '0 4px 14px rgba(43,36,24,0.08)', transform: 'rotate(-0.3deg)', position: 'relative', marginBottom: 40 }}>
        <h2 style={{ fontFamily: 'var(--zine-display)', fontSize: 36, fontStyle: 'italic', margin: '0 0 18px' }}>my story</h2>
        <div className="zine-cols-2" style={{ columns: 2, columnGap: 36, fontFamily: 'var(--zine-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--zine-ink2)' }}>
          <p style={{ marginBottom: 14 }}>
            I studied Mechanical Engineering and Pure Mathematics at the University of Sydney, where I discovered my love for algorithms and problem-solving. After graduation, I transitioned into the world of finance at Goldman Sachs — trading swaps, swaptions and exotic bonds in AUD and JPY markets.
          </p>
          <p style={{ marginBottom: 14 }}>
            I spent three years as a trader, where I developed a deep appreciation for quantitative analysis and risk management, and taught myself to code to automate tedious tasks and build simple trading tools. This sparked my passion for data science and machine learning.
          </p>
          <p style={{ marginBottom: 14 }}>
            I pivoted to data analysis at a government agency, then landed a role as Data Scientist at a fintech scaleup, building ML models to predict customer behaviour and optimise revenue generation.
          </p>
          <p style={{ marginBottom: 0 }}>
            After three years there (and one baby), I joined a large telco as Senior Data Scientist. Within a year I was leading a team to deploy an end-to-end MLOps system. They recognised my work — despite getting pregnant again — and promoted me to Lead Machine Learning Engineer. My current role.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: 'var(--zine-display)', fontSize: 36, fontStyle: 'italic', marginBottom: 20 }}>skills</h2>
        <div className="zine-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {Object.entries(SKILLS).map(([group, skills], i) => (
            <div
              key={group}
              style={{
                background: '#fff',
                padding: 20,
                borderTop: `6px solid ${SKILL_COLORS[i]}`,
                boxShadow: '0 4px 14px rgba(43,36,24,0.08)',
                transform: `rotate(${SKILL_ROTS[i]}deg)`,
              }}
            >
              <div style={{ fontFamily: 'var(--zine-mono)', fontSize: 11, color: 'var(--zine-terracotta2)', letterSpacing: 1.5, marginBottom: 12 }}>
                {group.toUpperCase()}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {skills.map((skill) => (
                  <span key={skill} style={{
                    padding: '4px 10px',
                    background: 'var(--zine-cream)',
                    fontFamily: 'var(--zine-mono)',
                    fontSize: 11,
                    borderRadius: 999,
                    color: 'var(--zine-ink2)',
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={{ background: 'var(--zine-terracotta)', color: 'var(--zine-cream)', padding: '32px 36px', position: 'relative', borderRadius: 2 }}>
        <WashiTape x={50} y={-12} w={120} rotate={-3} color="var(--zine-ochre)" pattern="dots" />
        <h2 style={{ fontFamily: 'var(--zine-display)', fontSize: 32, fontStyle: 'italic', margin: '0 0 20px' }}>say hi</h2>
        <div className="zine-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { label: 'EMAIL', value: 'not.telling@isthissafetho.com', href: 'mailto:not.telling@isthissafetho.com' },
            { label: 'LINKEDIN', value: '/in/niki-crow-bb329313b', href: 'https://www.linkedin.com/in/niki-crow-bb329313b/' },
            { label: 'GITHUB', value: '@nikicrow', href: 'https://github.com/nikicrow' },
          ].map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div style={{ background: 'var(--zine-cream)', padding: '14px 16px', borderRadius: 2 }}>
                <div style={{ fontFamily: 'var(--zine-mono)', fontSize: 10, color: 'var(--zine-terracotta2)', letterSpacing: 1.5, marginBottom: 6 }}>
                  {label}
                </div>
                <div style={{ fontFamily: 'var(--zine-body)', fontSize: 14, color: 'var(--zine-ink2)' }}>
                  {value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

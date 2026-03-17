const joinSectionLink = '#join';
const whatsappLink = '#';

const heroBenefits = [
  {
    symbol: 'FP',
    title: 'Freshly prepared',
    text: 'Cooked with care in small, home-style batches.',
  },
  {
    symbol: 'LS',
    title: 'Low oil and spices',
    text: 'Balanced flavors that feel light, familiar, and comforting.',
  },
  {
    symbol: 'QO',
    title: 'Quality oils only',
    text: 'Prepared using desi ghee or olive oil only.',
  },
];

const foodImages = [
  {
    src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
    alt: 'Indian home-style thali with curries, roti, rice, and chutneys',
    title: 'Comfort on a plate',
    text: 'A wholesome Indian thali that immediately signals home, warmth, and proper nourishment.',
  },
  {
    src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fresh samosas and chutneys served on a wooden platter',
    title: 'Simple food done right',
    text: 'Soft rotis, rich curry, and the kind of presentation that feels homemade instead of commercial.',
  },
  {
    src: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Indian curry and rice plated like a homemade family meal',
    title: 'The taste of back home',
    text: 'Warm colors, familiar textures, and food that looks like someone cooked it with care.',
  },
];

const reasonsToCare = [
  'They want food that feels healthier and more balanced than takeaway.',
  'They miss authentic Indian home-style cooking.',
  'They value convenience without giving up quality.',
  'They prefer buying from a trusted local home business.',
];

const differenceCards = [
  {
    label: 'Made fresh',
    title: 'Cooked fresh, not reheated',
    text: 'Meals are freshly prepared instead of mass-produced or held like generic takeaway.',
  },
  {
    label: 'Everyday comfort',
    title: 'A lighter home-style profile',
    text: 'Lower oil and spice levels keep the food approachable for frequent weekday eating.',
  },
  {
    label: 'Trust signal',
    title: 'Thoughtful ingredients',
    text: 'Using desi ghee or olive oil only gives the offer a clear quality position.',
  },
  {
    label: 'Service model',
    title: 'For neighbors, not the masses',
    text: 'The business feels local, familiar, and personal rather than anonymous food delivery at scale.',
  },
];

const nextSteps = [
  'Weekly or daily sample menu',
  'Delivery suburbs or pickup details',
  'Order cut-off times',
  'Pricing or meal plan options',
  'Food photos and kitchen presentation',
  'Trust markers such as testimonials or hygiene details',
];

function App() {
  return (
    <div className="site-shell">
      <header className="hero">
        <div className="section-shell">
          <nav className="site-nav">
            <div className="brand">
              <div className="brand__name">Ghar Ka Khana</div>
              <div className="brand__tag">Indian home-style meals for your neighborhood</div>
            </div>

            <a className="button button--dark" href={joinSectionLink}>
              Join WhatsApp Group
            </a>
          </nav>

          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Goodbye Takeout, Hello Ghar Ka Khana</div>
              <h1>Fresh Indian home-cooked food, made with care.</h1>
              <p className="lead">
                Bringing the warmth of the Indian home kitchen to your local community
                with wholesome meals that feel familiar, comforting, and made just right.
              </p>

              <div className="hero-actions">
                <a className="button button--accent" href={joinSectionLink}>
                  Join the Group
                </a>
                <a className="button button--ghost" href="#about">
                  Learn More
                </a>
              </div>

              <div className="hero-benefits">
                {heroBenefits.map((item) => (
                  <article className="benefit-card" key={item.title}>
                    <div className="benefit-card__icon">{item.symbol}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="hero-panel">
              <img src={foodImages[0].src} alt={foodImages[0].alt} />
              <div className="hero-panel__body">
                <div className="hero-callout">
                  <div className="hero-callout__label">Today&apos;s feel</div>
                  <h2>Just like mom makes</h2>
                  <p>
                    Simple, nourishing Indian meals for busy weekdays, family dinners,
                    and anyone missing proper home food.
                  </p>
                </div>

                <div className="hero-panel__meta">
                  <div className="meta-card">
                    <div className="meta-card__label">Best for</div>
                    <h3>Professionals, students, families</h3>
                  </div>
                  <div className="meta-card">
                    <div className="meta-card__label">Service style</div>
                    <h3>Neighborhood pickup and delivery</h3>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </header>

      <main>
        <section className="section section--cream" id="about">
          <div className="section-shell split-grid">
            <div className="section-copy">
              <div className="eyebrow-text">About the kitchen</div>
              <h2>A home kitchen business built on trust, taste, and simplicity.</h2>
              <p>
                This business is for people who want Indian food that feels homemade
                rather than commercial. The positioning is clear: fresh meals, lighter
                cooking, familiar taste, and ingredients chosen with more care than
                typical takeaway.
              </p>
              <p>
                The strongest appeal here is not restaurant food. It is comfort,
                consistency, and the emotional value of ghar ka khana for busy
                households and individuals in the community.
              </p>
            </div>

            <div className="stack">
              <article className="list-card">
                <h3>Why people will care</h3>
                <ul>
                  {reasonsToCare.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="message-card">
                <h3>Core brand message</h3>
                <p>
                  Warm, honest, neighborhood-focused Indian home cooking made with
                  thoughtful ingredients and a homemade touch.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-shell">
            <div className="section-copy">
              <div className="eyebrow-text">Food that feels like home</div>
              <h2>Images that trigger memory, comfort, and appetite.</h2>
              <p>
                This business sells emotion as much as food. The visuals need to remind
                people of a meal served at home, not a generic takeaway container. That
                is what creates the pull.
              </p>
            </div>

            <div className="gallery-grid">
              {foodImages.map((image) => (
                <article className="image-card" key={image.title}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <div className="image-card__body">
                    <h3>{image.title}</h3>
                    <p>{image.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--mist">
          <div className="section-shell">
            <div className="section-copy">
              <div className="eyebrow-text">What makes it different</div>
              <h2>Not typical takeout. Proper home food.</h2>
              <p>
                The value here is not novelty. It is trust, daily comfort, and food
                that feels made for a real household rather than a delivery funnel.
              </p>
            </div>

            <div className="feature-grid">
              {differenceCards.map((item) => (
                <article className="feature-card" key={item.title}>
                  <div className="feature-card__label">{item.label}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-shell">
            <div className="cta-banner" id="join">
              <div className="cta-grid">
                <div>
                  <div className="eyebrow-text">How to order</div>
                  <h2>Join the WhatsApp group and stay updated on home-cooked meals.</h2>
                  <p>
                    This business currently runs through community engagement, so the
                    website should drive one main action: joining the WhatsApp group for
                    menu updates, availability, and orders.
                  </p>
                </div>

                <div className="cta-panel">
                  <h3>Primary action</h3>
                  <p>Replace the placeholder below with the actual WhatsApp invite link.</p>
                  <a className="button button--dark button--full" href={whatsappLink}>
                    Join WhatsApp Group
                  </a>
                  <div className="cta-note">
                    Tip: this should be the single most prominent CTA across the site.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--dark">
          <div className="section-shell next-grid">
            <div className="section-copy">
              <div className="eyebrow-text">Suggested next content</div>
              <h2>What this business still needs before the website is truly complete.</h2>
              <p>
                The launch page message is solid, but a higher-converting version still
                needs a clearer operating model and stronger trust details.
              </p>
            </div>

            <div className="next-list">
              {nextSteps.map((item) => (
                <div className="next-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell">
          <div>
            <div className="footer-brand">Ghar Ka Khana</div>
            <div className="footer-copy">Indian home-style meals for the local community.</div>
          </div>
          <div className="footer-copy">
            Built to drive WhatsApp joins, trust, and local orders.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

const primaryCtaLink = '#join';

const heroBenefits = [
  {
    symbol: 'FD',
    title: 'Fresh daily',
    text: 'Home-style Indian meals prepared in small batches for fresh, balanced eating.',
  },
  {
    symbol: 'RH',
    title: 'Rouse Hill local',
    text: 'Pickup and local delivery available within 5 km of Rouse Hill, NSW.',
  },
  {
    symbol: 'FR',
    title: 'Free delivery $40+',
    text: 'Order from $20, with free local delivery on orders of $40 or more.',
  },
];

const menuItems = [
  {
    name: 'Veg Thali',
    price: '$12',
    tag: 'Best seller',
    description: 'Dal, seasonal sabzi, jeera rice, 3 rotis, salad, and pickle.',
  },
  {
    name: 'Dal + Sabzi + Roti Pack',
    price: '$14',
    tag: 'Weekday favorite',
    description: 'Comfort meal box with dal, sabzi, and 4 soft rotis for lunch or dinner.',
  },
  {
    name: 'Family Dinner Pack',
    price: '$28',
    tag: 'Serves 2 to 3',
    description: 'Two curries, jeera rice, 8 rotis, salad, and achar for an easy family meal.',
  },
  {
    name: 'Snack Add-On Box',
    price: '$8',
    tag: 'Add to any order',
    description: 'Fresh snack add-on such as samosas or a simple dessert, depending on the menu drop.',
  },
];

const orderingSteps = [
  {
    number: '01',
    title: 'Choose your meals',
    text: 'Pick from the weekly menu and decide whether you want pickup or delivery.',
  },
  {
    number: '02',
    title: 'Order on WhatsApp',
    text: 'Send your order with your suburb and preferred time in one quick message.',
  },
  {
    number: '03',
    title: 'Confirm delivery or pickup',
    text: 'You will get confirmation for delivery eligibility, pickup, and your final order total.',
  },
  {
    number: '04',
    title: 'Enjoy fresh home-style food',
    text: 'Your food is packed fresh for local pickup or delivery around Rouse Hill.',
  },
];

const serviceCards = [
  {
    title: 'Delivery zone',
    text: 'Within 5 km of Rouse Hill, NSW for local neighborhood orders.',
  },
  {
    title: 'Minimum order',
    text: '$20 minimum order for all deliveries and pickups.',
  },
  {
    title: 'Delivery fees',
    text: 'Free delivery on orders above $40 within the service radius.',
  },
  {
    title: 'Menu timing',
    text: 'Fresh menu updates are shared through WhatsApp so you can order what is available that week.',
  },
];

const trustPoints = [
  {
    title: 'Prepared fresh daily',
    text: 'Meals are cooked in small batches so they stay fresh, comforting, and home-style.',
  },
  {
    title: 'Low oil and balanced spice',
    text: 'The cooking style is lighter and more balanced, making it easy to enjoy through the week.',
  },
  {
    title: 'Desi ghee or olive oil only',
    text: 'Only desi ghee or olive oil is used for a cleaner, more thoughtful home-cooking style.',
  },
  {
    title: 'Clean home-kitchen handling',
    text: 'Every order is prepared with careful handling and clean packing for pickup or delivery.',
  },
  {
    title: 'Packed for reliability',
    text: 'Meals are portioned properly and packed well so they travel comfortably for local orders.',
  },
  {
    title: 'Allergen questions welcomed',
    text: 'You can ask about ingredients, spice level, and dietary preferences before placing your order.',
  },
];

const choiceCards = [
  {
    tag: 'Everyday comfort',
    title: 'Made for weekday lunches and family dinners',
    text: 'The menu is built around meals people actually want to eat regularly, not just once in a while.',
  },
  {
    tag: 'Simple ordering',
    title: 'Clear pricing and local delivery',
    text: 'You can see the menu, understand the minimum order, and know the delivery area before you order.',
  },
  {
    tag: 'Homemade feel',
    title: 'Familiar Indian food without takeaway heaviness',
    text: 'The offer is designed for people who miss the warmth and simplicity of proper ghar ka khana.',
  },
];

const foodImages = [
  {
    src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
    alt: 'Indian home-style thali with curries, roti, rice, and chutneys',
    title: 'A plate that feels like home',
    text: 'Comforting combinations of dal, sabzi, rice, roti, and accompaniments that feel familiar and satisfying.',
  },
  {
    src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fresh samosas and chutneys served on a wooden platter',
    title: 'Warm snacks and weekday add-ons',
    text: 'Snack add-ons and small extras make it easy to build a complete meal for one person or the whole family.',
  },
  {
    src: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Indian curry and rice plated like a homemade family meal',
    title: 'Familiar, reliable, local',
    text: 'Food that looks warm, homemade, and ready for the kind of repeat ordering people want from a local kitchen.',
  },
];

const faqs = [
  {
    question: 'Where do you deliver?',
    answer: 'Orders are served within 5 km of Rouse Hill, NSW, with local pickup and delivery options.',
  },
  {
    question: 'What is the minimum order?',
    answer: 'The minimum order is $20. Delivery is free once the order total reaches $40 or more.',
  },
  {
    question: 'What kind of meals can I expect?',
    answer: 'Home-style Indian comfort food such as dal, sabzi, rice, rotis, snack add-ons, and family meal packs.',
  },
  {
    question: 'How are order timings shared?',
    answer: 'Menu drops and ordering updates are shared on WhatsApp so you can check the latest availability before ordering.',
  },
  {
    question: 'Can I ask about ingredients or spice level?',
    answer: 'Yes. Ingredient questions, allergen checks, and spice preferences can be confirmed before the order is finalized.',
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="hero">
        <div className="section-shell">
          <nav className="site-nav">
            <div className="brand">
              <div className="brand__name">Ghar Ka Khana</div>
              <div className="brand__tag">Indian home-style meals around Rouse Hill, NSW</div>
            </div>

            <a className="button button--dark" href={primaryCtaLink}>
              Start Your Order
            </a>
          </nav>

          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Home-style Indian meals for busy local households</div>
              <h1>Fresh Indian comfort food for pickup and local delivery in Rouse Hill.</h1>
              <p className="lead">
                Enjoy wholesome Indian meals made with a homemade touch, lighter cooking,
                and pricing that makes weekday ordering simple.
              </p>

              <div className="hero-actions">
                <a className="button button--accent" href="#menu">
                  View This Week&apos;s Menu
                </a>
                <a className="button button--ghost" href="#delivery">
                  Delivery &amp; Order Rules
                </a>
              </div>

              <div className="hero-price-strip">
                <div className="price-pill">
                  <span>Starting from</span>
                  <strong>$12</strong>
                </div>
                <div className="price-pill">
                  <span>Minimum order</span>
                  <strong>$20</strong>
                </div>
                <div className="price-pill">
                  <span>Free delivery</span>
                  <strong>$40+</strong>
                </div>
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
                  <div className="hero-callout__label">Fresh this week</div>
                  <h2>Simple meals, clear pricing, local delivery.</h2>
                  <p>
                    From quick weekday dinners to family meal packs, Ghar Ka Khana is
                    designed to make ordering fresh Indian food feel easy and familiar.
                  </p>
                </div>

                <div className="hero-panel__meta">
                  <div className="meta-card">
                    <div className="meta-card__label">Service area</div>
                    <h3>5 km around Rouse Hill, NSW</h3>
                  </div>
                  <div className="meta-card">
                    <div className="meta-card__label">Ordering rule</div>
                    <h3>$20 minimum, free delivery above $40</h3>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </header>

      <main>
        <section className="section section--cream" id="menu">
          <div className="section-shell">
            <div className="section-copy section-copy--wide">
              <div className="eyebrow-text">This week&apos;s menu</div>
              <h2>Choose from comforting meals made for everyday eating.</h2>
              <p>
                From individual thalis to family dinner packs, the menu is built to make
                lunch and dinner simple for busy homes around Rouse Hill.
              </p>
            </div>

            <div className="menu-grid">
              {menuItems.map((item) => (
                <article className="menu-card" key={item.name}>
                  <div className="menu-card__header">
                    <div>
                      <div className="menu-card__tag">{item.tag}</div>
                      <h3>{item.name}</h3>
                    </div>
                    <div className="menu-card__price">{item.price}</div>
                  </div>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            <div className="section-note">
              Menu selections may change through the week based on availability. Check
              WhatsApp for the latest dishes and ordering updates.
            </div>
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="section-shell">
            <div className="section-copy section-copy--wide">
              <div className="eyebrow-text">How ordering works</div>
              <h2>Ordering is simple from the very first message.</h2>
              <p>
                Pick your meals, send your order, and get a quick confirmation for pickup
                or delivery. Everything is designed to keep ordering easy.
              </p>
            </div>

            <div className="steps-grid">
              {orderingSteps.map((step) => (
                <article className="step-card" key={step.number}>
                  <div className="step-card__number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--mist" id="delivery">
          <div className="section-shell">
            <div className="section-copy section-copy--wide">
              <div className="eyebrow-text">Delivery &amp; order rules</div>
              <h2>Know the delivery details before you place your order.</h2>
              <p>
                Ghar Ka Khana serves nearby homes around Rouse Hill with straightforward
                order minimums, clear delivery rules, and pickup options.
              </p>
            </div>

            <div className="service-grid">
              {serviceCards.map((item) => (
                <article className="service-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="trust">
          <div className="section-shell split-grid">
            <div className="section-copy">
              <div className="eyebrow-text">Why people will trust this kitchen</div>
              <h2>Fresh cooking, thoughtful ingredients, and the comfort of home-style food.</h2>
              <p>
                Every part of the offer is built around food that feels familiar, balanced,
                and dependable enough to order again.
              </p>
            </div>

            <div className="trust-grid">
              {trustPoints.map((item) => (
                <article className="trust-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--cream" id="gallery">
          <div className="section-shell">
            <div className="section-copy section-copy--wide">
              <div className="eyebrow-text">Food gallery</div>
              <h2>Warm, familiar meals made for real weekday cravings.</h2>
              <p>
                The menu is shaped around the kind of Indian food people reach for when
                they want comfort, convenience, and a meal that feels homemade.
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

        <section className="section section--mist" id="reviews">
          <div className="section-shell">
            <div className="section-copy section-copy--wide">
              <div className="eyebrow-text">Why locals choose Ghar Ka Khana</div>
              <h2>Good food is only part of the reason people order again.</h2>
              <p>
                People come back for food that feels reliable, approachable, and easy to
                fit into everyday life.
              </p>
            </div>

            <div className="reviews-grid">
              {choiceCards.map((item) => (
                <article className="review-card" key={item.title}>
                  <div className="review-card__tag">{item.tag}</div>
                  <h3 className="review-card__title">{item.title}</h3>
                  <p className="review-card__text">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-shell split-grid split-grid--faq">
            <div className="section-copy">
              <div className="eyebrow-text">Frequently asked questions</div>
              <h2>Everything you may want to know before ordering.</h2>
              <p>
                Here are the quick answers to the most common questions about delivery,
                minimum order, menu style, and ordering.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark" id="join">
          <div className="section-shell">
            <div className="cta-banner">
              <div className="cta-grid">
                <div>
                  <div className="eyebrow-text">Ready to order?</div>
                  <h2>Choose your meals and send your order for pickup or local delivery.</h2>
                  <p>
                    Whether you are ordering for yourself, your family, or a busy weekday,
                    Ghar Ka Khana makes it easy to enjoy fresh Indian food close to home.
                  </p>
                </div>

                <div className="cta-panel">
                  <h3>Quick order checklist</h3>
                  <ul className="cta-list">
                    <li>Pick your meals from the weekly menu.</li>
                    <li>Make sure your order is at least $20.</li>
                    <li>Delivery is free for orders above $40 within 5 km of Rouse Hill.</li>
                  </ul>
                  <a className="button button--dark button--full" href="#menu">
                    View This Week&apos;s Menu
                  </a>
                  <div className="cta-note">Fresh menu updates are shared on WhatsApp.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell">
          <div>
            <div className="footer-brand">Ghar Ka Khana</div>
            <div className="footer-copy">
              Indian home-style meals for families, students, and professionals around
              Rouse Hill, NSW.
            </div>
          </div>
          <div className="footer-copy">
            Delivery within 5 km of Rouse Hill. Minimum order $20. Free delivery above $40.
          </div>
        </div>
      </footer>

      <a className="mobile-cta" href={primaryCtaLink}>
        Start Your Order
      </a>
    </div>
  );
}

export default App;

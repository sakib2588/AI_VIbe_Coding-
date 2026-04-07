// Shared nav + footer injected into every page.
// Active link is highlighted via data-page on <body>.

const NAV_HTML = `
<header class="nav">
  <div class="nav-inner">
    <a href="index.html" class="logo">LUMEN<span>CAREERS</span></a>

    <nav class="nav-menu">
      <div class="nav-item"><a href="index.html" data-nav="home">Home</a></div>
      <div class="nav-item mega">
        <a href="jobs.html" data-nav="jobs">Products <i>▾</i></a>
        <div class="dropdown mega-menu">
          <div class="mega-col">
            <h5>Platform</h5>
            <a href="jobs.html"><strong>Job Board Platform</strong><span>Curated IT roles, beautifully presented</span></a>
            <a href="jobs.html"><strong>Talent CRM</strong><span>Manage candidates end-to-end</span></a>
            <a href="jobs.html"><strong>AI Skill Matching</strong><span>Smart role recommendations</span></a>
          </div>
          <div class="mega-col">
            <h5>For Candidates</h5>
            <a href="resources.html"><strong>Resume Builder</strong><span>ATS-optimized templates</span></a>
            <a href="resources.html"><strong>Interview Prep</strong><span>Mock interviews & coaching</span></a>
            <a href="resources.html"><strong>Salary Insights</strong><span>Real-time market data</span></a>
          </div>
          <div class="mega-col">
            <h5>For Employers</h5>
            <a href="contact.html"><strong>Job Posting</strong><span>Reach 25K+ vetted engineers</span></a>
            <a href="contact.html"><strong>Employer Branding</strong><span>Tell your company story</span></a>
            <a href="contact.html"><strong>Analytics Suite</strong><span>Track hiring performance</span></a>
          </div>
          <div class="mega-col mega-feature">
            <div class="mega-card">
              <h6>Featured</h6>
              <h4>Now Hiring: 2026 Tech Trends Report</h4>
              <p>See which skills, salaries, and roles are dominating the IT market this year.</p>
              <a href="resources.html" class="mega-link">Read the report →</a>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-item"><a href="how-it-works.html" data-nav="how">How It Works</a></div>

      <div class="nav-item mega">
        <a href="solutions.html" data-nav="solutions">Solutions <i>▾</i></a>
        <div class="dropdown mega-menu">
          <div class="mega-col">
            <h5>By Role</h5>
            <a href="solutions.html"><strong>Software Engineers</strong><span>Backend, frontend, full-stack</span></a>
            <a href="solutions.html"><strong>DevOps & SRE</strong><span>Cloud, CI/CD, infrastructure</span></a>
            <a href="solutions.html"><strong>Data & AI</strong><span>ML, data engineering, analytics</span></a>
          </div>
          <div class="mega-col">
            <h5>By Seniority</h5>
            <a href="solutions.html"><strong>Junior Developers</strong><span>Entry-level & bootcamp grads</span></a>
            <a href="solutions.html"><strong>Senior Engineers</strong><span>5+ years of experience</span></a>
            <a href="solutions.html"><strong>Tech Leadership</strong><span>Staff, principal & VP roles</span></a>
          </div>
          <div class="mega-col">
            <h5>By Company</h5>
            <a href="solutions.html"><strong>Tech Startups</strong><span>Early & growth stage</span></a>
            <a href="solutions.html"><strong>Scale-Ups</strong><span>Series B and beyond</span></a>
            <a href="solutions.html"><strong>Enterprise</strong><span>Fortune 500 hiring</span></a>
          </div>
          <div class="mega-col mega-feature">
            <div class="mega-card">
              <h6>Spotlight</h6>
              <h4>Remote Work Pulse 2026</h4>
              <p>How top engineers are negotiating remote, hybrid, and async-first roles.</p>
              <a href="resources.html" class="mega-link">Explore the data →</a>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-item"><a href="case-studies.html" data-nav="cases">Case Studies</a></div>
      <div class="nav-item"><a href="portfolio.html" data-nav="portfolio">Portfolio</a></div>

      <div class="nav-item mega">
        <a href="company.html" data-nav="company">Company <i>▾</i></a>
        <div class="dropdown mega-menu">
          <div class="mega-col">
            <h5>About</h5>
            <a href="company.html"><strong>Our Story</strong><span>Why we built Lumen Careers</span></a>
            <a href="company.html"><strong>Team</strong><span>Meet the people behind the platform</span></a>
            <a href="company.html"><strong>Press</strong><span>News & media coverage</span></a>
          </div>
          <div class="mega-col">
            <h5>Trust</h5>
            <a href="case-studies.html"><strong>Reviews</strong><span>What our users say</span></a>
            <a href="company.html"><strong>Security</strong><span>How we protect your data</span></a>
            <a href="company.html"><strong>Privacy</strong><span>Our commitment to you</span></a>
          </div>
          <div class="mega-col">
            <h5>Get Involved</h5>
            <a href="company.html"><strong>Careers at Lumen</strong><span>Join our growing team</span></a>
            <a href="company.html"><strong>Referral Program</strong><span>Earn rewards for invites</span></a>
            <a href="contact.html"><strong>Partners</strong><span>Integrate with Lumen</span></a>
          </div>
          <div class="mega-col mega-feature">
            <div class="mega-card">
              <h6>We're Hiring</h6>
              <h4>Join the Lumen Team</h4>
              <p>We're growing fast and looking for engineers, designers, and operators.</p>
              <a href="company.html" class="mega-link">See open roles →</a>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-item mega">
        <a href="resources.html" data-nav="resources">Resources <i>▾</i></a>
        <div class="dropdown mega-menu">
          <div class="mega-col">
            <h5>Learn</h5>
            <a href="resources.html"><strong>Blog</strong><span>Career advice & tech trends</span></a>
            <a href="resources.html"><strong>Guides</strong><span>In-depth career playbooks</span></a>
            <a href="resources.html"><strong>Webinars</strong><span>Live & on-demand sessions</span></a>
          </div>
          <div class="mega-col">
            <h5>Tools</h5>
            <a href="resources.html"><strong>Salary Calculator</strong><span>Benchmark your comp</span></a>
            <a href="resources.html"><strong>Resume Reviewer</strong><span>Free AI-powered feedback</span></a>
            <a href="resources.html"><strong>Skill Quiz</strong><span>Find your strengths</span></a>
          </div>
          <div class="mega-col">
            <h5>Community</h5>
            <a href="resources.html"><strong>Tech Community</strong><span>Connect with peers</span></a>
            <a href="resources.html"><strong>Help Center</strong><span>FAQs & support</span></a>
            <a href="resources.html"><strong>Events</strong><span>Meetups & conferences</span></a>
          </div>
          <div class="mega-col mega-feature">
            <div class="mega-card">
              <h6>New</h6>
              <h4>The IT Salary Report 2026</h4>
              <p>The most comprehensive look at tech compensation across 40+ countries.</p>
              <a href="resources.html" class="mega-link">Download free →</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="nav-right">
      <a href="tel:+13109551077" class="nav-phone">(310) 955-1077</a>
      <a href="contact.html" class="nav-login">Log in</a>
      <a href="contact.html" class="btn btn-primary">Get Started</a>
    </div>
  </div>
</header>
`;

const FOOTER_HTML = `
<footer>
  <div class="container foot-grid">
    <div class="foot-brand">
      <div class="logo">LUMEN<span>CAREERS</span></div>
      <p>Connecting the world's best IT talent with the companies that need them most.</p>
    </div>
    <div>
      <h6>Platform</h6>
      <a href="jobs.html">Browse Jobs</a>
      <a href="how-it-works.html">How It Works</a>
      <a href="solutions.html">Solutions</a>
      <a href="contact.html">Post a Job</a>
    </div>
    <div>
      <h6>Company</h6>
      <a href="company.html">About</a>
      <a href="case-studies.html">Case Studies</a>
      <a href="portfolio.html">Portfolio</a>
      <a href="contact.html">Contact</a>
    </div>
    <div>
      <h6>Resources</h6>
      <a href="resources.html">Blog</a>
      <a href="resources.html">Salary Calculator</a>
      <a href="resources.html">Help Center</a>
      <a href="resources.html">Community</a>
    </div>
  </div>
  <div class="container foot-bottom">
    <p>© 2026 Lumen Careers. All rights reserved.</p>
    <p>Crafted for the world's finest IT professionals.</p>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  const navMount = document.getElementById('site-nav');
  const footMount = document.getElementById('site-footer');
  if (navMount) navMount.innerHTML = NAV_HTML;
  if (footMount) footMount.innerHTML = FOOTER_HTML;

  // Highlight active page
  const page = document.body.dataset.page;
  if (page) {
    const active = document.querySelector(`[data-nav="${page}"]`);
    if (active) active.classList.add('active');
  }

  // Scroll-reveal: any element with .reveal fades in when visible
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});


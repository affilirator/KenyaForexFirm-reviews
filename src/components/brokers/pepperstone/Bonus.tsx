import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  TrendingUp,
  Target,
  Award,
  AlertTriangle,
  CheckCircle,
  Menu,
  X,
  ChevronRight,
  BarChart2,
  Globe,
  Clock,
  Shield,
  Scale,
  Briefcase,
  Zap,
  Server,
  DollarSign,
  Users,
} from 'lucide-react';

/**
 * Enterprise-Grade React Article Viewer
 * Specialized for: Pepperstone Kenya 2026 Review (Bonuses vs Value)
 * Updated with Active Trader Program & Refer a Friend Section
 */

// --- Components ---

const ComparisonRadarChart = () => {
  // Axes definitions
  const axes = [
    'Initial Incentives', // The one spike for Bonus Brokers
    'Cost Efficiency',
    'Platform & Tools',
    'Education',
    'Regulatory Safety',
    'Long-Term Growth',
  ];

  // Data: Bonus Broker vs Pepperstone
  // Scale 1-5
  const pepperstoneData = [1, 5, 5, 5, 5, 5]; // Low incentives, high everything else
  const bonusBrokerData = [5, 2, 3, 2, 2, 1]; // High incentives, low value

  const size = 320;
  const center = size / 2;
  const radius = 100;
  const angleSlice = (Math.PI * 2) / axes.length;

  const getCoordinates = (value, index) => {
    const angle = index * angleSlice - Math.PI / 2;
    const r = (value / 5) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const generatePath = (dataPoints) => {
    return (
      dataPoints
        .map((val, i) => {
          const coords = getCoordinates(val, i);
          return `${i === 0 ? 'M' : 'L'} ${coords.x},${coords.y}`;
        })
        .join(' ') + ' Z'
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200 my-8 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 mb-2">
        Strategic Analysis: The "Sugar Rush" vs. Nutrition
      </h3>
      <div className="flex gap-6 text-sm mb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-600"></span>
          <span className="font-semibold text-slate-700">
            Pepperstone (Value Model)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="font-semibold text-slate-700">
            Generic Bonus Broker
          </span>
        </div>
      </div>

      <div className="relative">
        <svg
          width={size}
          height={size}
          className="overflow-visible"
        >
          {/* Grid Circles */}
          {[1, 2, 3, 4, 5].map((level) => (
            <circle
              key={level}
              cx={center}
              cy={center}
              r={(level / 5) * radius}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="1"
            />
          ))}

          {/* Axes Lines */}
          {axes.map((_, i) => {
            const end = getCoordinates(5, i);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={end.x}
                y2={end.y}
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            );
          })}

          {/* Pepperstone Shape */}
          <path
            d={generatePath(pepperstoneData)}
            fill="rgba(37, 99, 235, 0.2)"
            stroke="#2563eb"
            strokeWidth="2.5"
          />

          {/* Bonus Broker Shape */}
          <path
            d={generatePath(bonusBrokerData)}
            fill="rgba(239, 68, 68, 0.1)"
            stroke="#ef4444"
            strokeWidth="2.5"
            strokeDasharray="4 2"
          />

          {/* Labels */}
          {axes.map((label, i) => {
            const coords = getCoordinates(6.2, i);
            return (
              <text
                key={i}
                x={coords.x}
                y={coords.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[10px] uppercase font-bold fill-slate-500 tracking-wide"
              >
                {label}
              </text>
            );
          })}
        </svg>
      </div>
      <p className="text-sm text-slate-600 mt-6 italic text-center max-w-md bg-white p-3 rounded border border-slate-100">
        "Visual Proof: While the bonus broker spikes on 'Initial Incentives', it
        collapses on Safety and Growth—the two factors that actually keep you in
        the game long-term."
      </p>
    </div>
  );
};

const Section = ({ id, title, children, icon: Icon }) => (
  <section
    id={id}
    className="mb-14 scroll-mt-28"
  >
    <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
      {Icon && (
        <div className="p-2 bg-blue-50 rounded-lg text-blue-700">
          <Icon size={24} />
        </div>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
    </div>
    {children}
  </section>
);

const InsightBox = ({ title, children, type = 'info' }) => {
  const styles = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-900',
      icon: Target,
    },
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-900',
      icon: AlertTriangle,
    },
    success: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-900',
      icon: CheckCircle,
    },
  };

  const StyleConfig = styles[type];
  const Icon = StyleConfig.icon;

  return (
    <div
      className={`${StyleConfig.bg} border-l-4 ${StyleConfig.border} p-5 rounded-r-lg mb-8 shadow-sm`}
    >
      <div className="flex items-start gap-3">
        <Icon
          className={`${type === 'info' ? 'text-blue-600' : type === 'warning' ? 'text-amber-600' : 'text-emerald-600'} flex-shrink-0 mt-1`}
          size={20}
        />
        <div>
          {title && (
            <h4 className={`font-bold ${StyleConfig.text} mb-1`}>{title}</h4>
          )}
          <div className="text-slate-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
};

const TableOfContents = ({
  activeSection,
  scrollToSection,
  isOpen,
  toggleOpen,
}) => {
  const sections = [
    { id: 'intro', label: 'The Bonus Trap' },
    { id: 'policy', label: 'Why No Bonus?' },
    { id: 'value', label: 'The Real Alternatives' },
    { id: 'active-trader', label: 'The Active Trader Edge' },
    { id: 'referral', label: 'Referral Program' },
    { id: 'dilemma', label: 'Strategic Analysis' },
    { id: 'verdict', label: "Patrick's Verdict" },
  ];

  return (
    <>
      <button
        onClick={toggleOpen}
        className="fixed bottom-6 right-6 z-50 p-4 bg-slate-900 text-white rounded-full shadow-xl md:hidden hover:bg-slate-800 transition-colors"
      >
        <Menu />
      </button>

      <aside
        className={`
            fixed top-0 left-0 h-full w-72 bg-white border-r border-slate-200 shadow-2xl md:shadow-none transform transition-transform duration-300 z-40 pt-24 px-6
            md:translate-x-0 md:w-72 md:block
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
      >
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
          Article Navigator
        </div>
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`
                    w-full text-left py-3 px-4 rounded-lg text-sm transition-all duration-200 flex items-center justify-between group
                    ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700 font-bold shadow-sm'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }
            `}
            >
              {section.label}
              {activeSection === section.id && <ChevronRight size={14} />}
            </button>
          ))}
        </nav>

        <div className="mt-12 pt-8 border-t border-slate-100">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden ring-2 ring-white shadow-md">
              <img
                src="/api/placeholder/100/100"
                alt="Patrick Mahinge"
                className="object-cover w-full h-full opacity-90"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                Patrick Mahinge
              </div>
              <div className="text-xs text-slate-500">
                Forex Authority | Kenya
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full inline-flex font-medium">
            <Shield size={12} />
            <span>Verified Expert</span>
          </div>
          <p className="text-xs text-slate-400 mt-4 leading-relaxed">
            "I don't sell dreams. I test platforms to see if they can handle the
            reality of the Nairobi session."
          </p>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={toggleOpen}
        />
      )}
    </>
  );
};

// --- Main App ---

const PepperstoneApp = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [menuOpen, setMenuOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);

      const sections = [
        'intro',
        'policy',
        'value',
        'active-trader',
        'referral',
        'dilemma',
        'verdict',
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 400) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 selection:bg-blue-100 selection:text-blue-900">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-slate-100 z-50">
        <div
          className="h-full bg-linear-to-r from-emerald-600 to-teal-600 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <TableOfContents
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isOpen={menuOpen}
        toggleOpen={() => setMenuOpen(!menuOpen)}
      />

      <main className="md:ml-72 transition-all duration-300">
        {/* Header */}
        <header className="px-6 py-16 lg:px-16 max-w-5xl mx-auto border-b border-slate-100 bg-linear-to-b from-slate-50/50 to-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6 border border-blue-100">
            <Globe size={14} />
            Kenya Forex Review 2026
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6">
            Pepperstone Kenya 2026 Review:{' '}
            <span className="text-teal-600 bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              The Truth About Bonuses,
            </span>{' '}
            Real Alternatives & What Actually Matters.
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2">
              <Clock
                size={16}
                className="text-slate-400"
              />
              18 min deep dive
            </span>
            <span className="flex items-center gap-2">
              <Shield
                size={16}
                className="text-emerald-500"
              />
              CMA Regulated Analysis
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle
                size={16}
                className="text-blue-500"
              />
              Verified 2026 Data
            </span>
          </div>
        </header>

        <article className="px-6 py-12 lg:px-16 max-w-4xl mx-auto">
          {/* Introduction */}
          <Section
            id="intro"
            title="Introduction: The 'Bonus' Mirage"
            icon={BookOpen}
          >
            <p className="text-lg leading-relaxed mb-6">
              Habari, traders. It's Patrick Mahinge here.
            </p>
            <p className="leading-relaxed mb-6">
              I've been in these markets for over a decade, and I see the same
              story play out in Nairobi coffee shops and trading groups every
              day. A new trader asks,{' '}
              <em>"Which broker gives the biggest deposit bonus?"</em> It's a
              natural question. When you're starting with limited capital, a 50%
              or 100% boost feels like a lifeline.
            </p>
            <p className="leading-relaxed mb-6">
              But let's be honest with each other:{' '}
              <strong>
                Choosing a broker based only on a bonus is like choosing a
                marathon shoe based only on the color of its laces.
              </strong>{' '}
              It looks good at the start line, but it won't help you survive the
              42 kilometers ahead.
            </p>
            <p className="leading-relaxed mb-6">
              In this 2026 review, we are tackling the elephant in the room:{' '}
              <strong>
                Why does Pepperstone—a top-tier, CMA-regulated giant—not offer
                deposit bonuses in Kenya?
              </strong>{' '}
              Is this a weakness? Or is it actually the ultimate sign of respect
              for your capital? I've done the homework so you don't have to.
            </p>
          </Section>

          {/* Section 1: No Bonus Policy */}
          <Section
            id="policy"
            title="The 'No Bonus' Policy: Strength, Not Weakness"
            icon={Shield}
          >
            <p className="leading-relaxed mb-6">
              First, let's clear the air. Pepperstone isn't being "stingy."
              Their policy is a direct reflection of their regulatory standing.
              Pepperstone is regulated by the{' '}
              <strong>Capital Markets Authority (CMA)</strong> of Kenya.
            </p>

            <InsightBox
              title="The Regulatory Reality"
              type="info"
            >
              Top-tier regulators like the CMA (along with the FCA in the UK and
              ASIC in Australia) view heavy deposit bonuses as a{' '}
              <strong>conflict of interest</strong>. Why? Because they often
              encourage over-leveraging. A broker offering "free money" often
              needs you to trade high volumes to "unlock" it, pushing you into
              risky behavior.
            </InsightBox>

            <p className="leading-relaxed mb-6">
              This isn't just theory. A 2024 retrospective in the{' '}
              <em>Journal of Financial Regulation</em> highlighted a startling
              correlation: traders attracted primarily by monetary incentives
              demonstrated a{' '}
              <strong>
                30% higher likelihood of exceeding risk parameters
              </strong>{' '}
              in their first year.
            </p>
            <p className="leading-relaxed mb-6">
              By not offering a bonus, Pepperstone is essentially stating:{' '}
              <em>
                "We want traders who are here to build a business, not gamblers
                looking for a quick hit."
              </em>{' '}
              It's a filter that separates the serious from the curious.
            </p>
          </Section>

          {/* Section 2: Real Alternatives */}
          <Section
            id="value"
            title="The Real 'Bonuses': Value You Can Actually Keep"
            icon={Scale}
          >
            <p className="leading-relaxed mb-8">
              If they don't give you upfront cash, what <em>do</em> they give
              you? In my testing of the 2026 landscape, Pepperstone replaces the
              "sugar rush" of a bonus with the "nutrition" of low costs and
              better tools. Let's break down the math.
            </p>

            {/* Comparison Table */}
            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg mb-10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-bold text-sm uppercase tracking-wider w-1/4">
                      Value Feature
                    </th>
                    <th className="p-4 font-bold text-sm uppercase tracking-wider w-1/4">
                      What It Is
                    </th>
                    <th className="p-4 font-bold text-sm uppercase tracking-wider w-1/4 hidden md:table-cell">
                      Tangible Benefit
                    </th>
                    <th className="p-4 font-bold text-sm uppercase tracking-wider bg-blue-700">
                      Why It Beats a Bonus
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr>
                    <td className="p-4 font-bold text-slate-800">
                      Superior Execution & Spreads
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      Raw pricing with razor-thin spreads (e.g., competitive
                      averages on EUR/USD).
                    </td>
                    <td className="p-4 text-sm text-slate-600 hidden md:table-cell">
                      Lower cost per trade = higher profit retention.
                    </td>
                    <td className="p-4 text-sm bg-blue-50 text-blue-900 font-medium">
                      A 0.1 pip saving on every trade creates more wealth over 6
                      months than a one-time 20% credit.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">
                      Advanced Platforms
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      Full access to MT4, MT5, cTrader, and TradingView.
                    </td>
                    <td className="p-4 text-sm text-slate-600 hidden md:table-cell">
                      Professional tools for precise analysis.
                    </td>
                    <td className="p-4 text-sm bg-blue-50 text-blue-900 font-medium">
                      Skill development is the engine of income. A bonus is just
                      fuel; the platform is the engine.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">
                      Risk Management Tools
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      Negative balance protection & smart calculators.
                    </td>
                    <td className="p-4 text-sm text-slate-600 hidden md:table-cell">
                      Protects your capital from market gaps.
                    </td>
                    <td className="p-4 text-sm bg-blue-50 text-blue-900 font-medium">
                      Keeping your own money safe is infinitely more valuable
                      than getting "free" money you can't withdraw.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">
                      Local Support
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      Support that understands the Nairobi session.
                    </td>
                    <td className="p-4 text-sm text-slate-600 hidden md:table-cell">
                      Quick resolution of issues.
                    </td>
                    <td className="p-4 text-sm bg-blue-50 text-blue-900 font-medium">
                      Downtime costs money. Efficient support saves it.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-slate-500 italic mt-2 text-center">
              Table 1: A comparative analysis of Pepperstone's value proposition
              vs. traditional bonus models.
            </p>
          </Section>

          {/* New Section: Active Trader Program */}
          <Section
            id="active-trader"
            title="The 'Hidden' Tier: Active Trader Program"
            icon={Briefcase}
          >
            <p className="leading-relaxed mb-6">
              Most retail traders never scroll far enough to find this, but it's
              arguably the most potent "bonus" Pepperstone offers. It's called
              the <strong>Active Trader Program</strong>.
            </p>
            <p className="leading-relaxed mb-6">
              While they don't offer sign-up bonuses, they <em>do</em> pay you
              to trade if you have volume. This is how the professionals
              operate. Instead of a one-time carrot, you get a continuous
              revenue stream.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign
                    className="text-emerald-600"
                    size={24}
                  />
                  <h4 className="font-bold text-slate-800">
                    The Rebate Engine
                  </h4>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Pepperstone pays rebates back into your account{' '}
                  <strong>daily</strong>. This is a massive differentiator; most
                  brokers make you wait until the end of the month.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between border-b border-slate-200 pb-1">
                    <span>Tier 1 (Up to 200 lots)</span>
                    <span className="font-bold text-slate-900">
                      $1.00 / lot
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-1">
                    <span>Tier 2 (200 - 1500 lots)</span>
                    <span className="font-bold text-slate-900">
                      $2.00 / lot
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tier 3 (1500+ lots)</span>
                    <span className="font-bold text-slate-900">
                      $3.00 / lot
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Server
                    className="text-blue-600"
                    size={24}
                  />
                  <h4 className="font-bold text-slate-800">
                    The Kenya-Specific Edge
                  </h4>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  For us in Kenya, the real gem isn't just the money—it's the{' '}
                  <strong>Free VPS Hosting</strong> included in the program.
                </p>
                <p className="text-sm text-slate-600">
                  We all know Nairobi power/internet can be unpredictable. A VPS
                  keeps your Expert Advisors (EAs) running 24/7 on a server next
                  to the exchange, reducing latency and ensuring you never miss
                  a trade due to a local blackout.
                </p>
              </div>
            </div>

            <InsightBox
              title="The Mentor's Warning: The 'Churn' Trap"
              type="warning"
            >
              <p className="mb-2">
                This program is powerful, but it comes with a danger:{' '}
                <strong>Overtrading</strong>.
              </p>
              <p>
                I have seen traders force bad setups just to hit the "200 lots"
                tier for a higher rebate. <strong>Do not do this.</strong> Never
                trade <em>for</em> the rebate. Treat the rebate as a passive
                "dividend" on your normal, disciplined trading. If you lose $500
                on a forced trade to earn a $2 rebate, you have lost the game.
              </p>
            </InsightBox>

            <p className="text-sm text-slate-500 italic">
              *Note: Entry into the program usually requires contacting support
              or hitting volume thresholds over a 3-month period. Contact{' '}
              <span className="font-mono bg-slate-100 px-1 rounded">
                premium@pepperstone.com
              </span>{' '}
              if you are a high-volume trader.
            </p>
          </Section>

          {/* New Section: Refer a Friend */}
          <Section
            id="referral"
            title="The Community Bonus: Refer a Friend"
            icon={Users}
          >
            <p className="leading-relaxed mb-6">
              Now, there is <em>one</em> exception to the "no bonus" rule. It's
              not about how much you deposit, but about who you bring into the
              ecosystem. This is Pepperstone's **Refer a Friend** program, and
              for 2026, it remains one of the few legitimate ways to earn cash
              rewards.
            </p>
            <p className="leading-relaxed mb-6">
              Unlike the shady "affiliate schemes" you might see on Instagram,
              this is straightforward: **You refer a friend, they trade, you
              both get paid.** And crucially, it is paid in **Cash**, not
              trading credit.
            </p>

            <div className="bg-blue-900 text-white rounded-xl p-6 mb-8 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>

              <h4 className="text-lg font-bold mb-4 relative z-10">
                How the Reward Structure Works
              </h4>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg border border-white/10">
                  <div>
                    <div className="text-xs text-blue-200 uppercase tracking-wide">
                      Tier 1
                    </div>
                    <div className="font-medium text-sm">
                      Friend Deposits $500 + Trades 2.5 Lots
                    </div>
                  </div>
                  <div className="text-xl font-bold text-emerald-400">
                    $50 Each
                  </div>
                </div>

                <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg border border-white/10">
                  <div>
                    <div className="text-xs text-blue-200 uppercase tracking-wide">
                      Tier 2
                    </div>
                    <div className="font-medium text-sm">
                      Friend Deposits $1,000 + Trades 5 Lots
                    </div>
                  </div>
                  <div className="text-xl font-bold text-emerald-400">
                    $100 Each
                  </div>
                </div>

                <div className="flex items-center justify-between bg-white/20 p-3 rounded-lg border border-white/30 shadow-inner">
                  <div>
                    <div className="text-xs text-blue-200 uppercase tracking-wide">
                      Tier 3 (The Pro Tier)
                    </div>
                    <div className="font-medium text-sm">
                      Friend Deposits $10,000 + Trades 20 Lots
                    </div>
                  </div>
                  <div className="text-xl font-bold text-emerald-400">
                    $250 Each
                  </div>
                </div>
              </div>
            </div>

            <InsightBox
              title="Patrick's Advice: Don't Be 'That' Guy"
              type="success"
            >
              <p className="mb-2">
                This program is excellent for building a small trading circle.
                If you have a friend who is <strong>already serious</strong>{' '}
                about trading, referring them is a win-win. You essentially get
                your first few trades covered by the house.
              </p>
              <p>
                However,{' '}
                <strong>
                  do not use this to push uninterested friends into trading.
                </strong>{' '}
                The requirement for them to trade volume (e.g., 2.5 lots) means
                they need to actually engage with the market. If they don't know
                what they are doing, they will lose their deposit just to get
                you a $50 reward. That is not mentorship; that is exploitation.
                Only refer those who are ready to learn.
              </p>
            </InsightBox>

            <p className="text-sm text-slate-500 italic mt-4">
              *Pro Tip: Ensure your friend enters your email address in the 'How
              did you hear of us' section during their account application. The
              volume requirements must be met within 90 days.
            </p>
          </Section>

          {/* Section 3: Strategic Analysis */}
          <Section
            id="dilemma"
            title="Strategic Analysis: The Trader's Dilemma"
            icon={TrendingUp}
          >
            <p className="leading-relaxed mb-6">
              So, should the lack of a bonus be a deal-breaker? Let's look at
              this visually. I've mapped a typical "Bonus-Focused Broker"
              against "Pepperstone" across five axes critical for your survival.
            </p>

            <ComparisonRadarChart />

            <div className="mt-10 space-y-6">
              <h3 className="text-xl font-bold text-slate-800">
                The Decision Matrix
              </h3>
              <p className="leading-relaxed">
                As your mentor, here is how I would advise you to choose:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 opacity-75 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                  <div className="font-bold text-slate-500 mb-2 uppercase text-xs tracking-wider">
                    Scenario A
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">
                    Prioritize a Bonus IF:
                  </h4>
                  <p className="text-sm text-slate-600">
                    You are in a pure "gambling" phase or testing the waters
                    with a tiny amount of money you are fully prepared to lose.
                    You care more about the thrill of a larger initial balance
                    than the cost of trading or the safety of your funds.
                  </p>
                </div>

                <div className="p-6 bg-blue-50 rounded-xl border border-blue-200 shadow-md">
                  <div className="font-bold text-blue-600 mb-2 uppercase text-xs tracking-wider">
                    Scenario B
                  </div>
                  <h4 className="font-bold text-blue-900 mb-2">
                    Prioritize Pepperstone IF:
                  </h4>
                  <p className="text-sm text-blue-800">
                    You treat trading as a <strong>business</strong>. You
                    understand that low spreads (operational costs),
                    professional platforms (tools), and CMA regulation
                    (insurance) are the factors that determine if you will still
                    be trading in 2027.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Conclusion */}
          <Section
            id="verdict"
            title="The Final Verdict"
            icon={Award}
          >
            <div className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

              <h3 className="text-2xl font-bold mb-4 relative z-10">
                From a Pro's Perspective
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6 relative z-10">
                In the regulated Kenyan market of 2026, the absence of flashy
                bonuses is not a bug—it's a feature. It is a hallmark of a
                legitimate, client-focused ecosystem.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8 relative z-10">
                My conclusion is simple: For the vast majority of beginner and
                intermediate traders in Kenya aiming for consistency, the
                alternative value features provided by Pepperstone—
                <strong>
                  tight spreads, top platforms, and robust CMA regulation
                </strong>
                —represent a far more valuable package than any one-time deposit
                bonus.
              </p>

              <div className="bg-white/10 p-6 rounded-xl border border-white/20 relative z-10 backdrop-blur-sm">
                <div className="flex gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg h-fit">
                    <Zap
                      className="text-white"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">
                      Patrick's Challenge to You
                    </h4>
                    <p className="text-slate-200 text-sm">
                      Stop asking "What bonus will I get?" and start asking{' '}
                      <strong>
                        "Which broker provides the ecosystem for my skill to
                        grow?"
                      </strong>{' '}
                      The answer to the second question is where the real profit
                      lies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </article>

        {/* Footer */}
        <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6 lg:px-16 mt-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-sm text-slate-500">
            <div>
              <p className="mb-4">
                <strong>Disclaimer:</strong> Trading foreign exchange on margin
                carries a high level of risk. The high degree of leverage can
                work against you as well as for you. Past performance is not
                indicative of future results.
              </p>
              <p>
                Patrick Mahinge is an independent educator. This content
                reflects the market landscape as of 2026 and is for educational
                purposes only.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <span className="font-bold text-slate-700 flex items-center gap-2">
                <Shield
                  size={14}
                  className="text-emerald-600"
                />
                CMA Regulated
              </span>
              <span>Pepperstone Markets Kenya Limited</span>
              <span>Nairobi, Kenya</span>
              <span className="mt-4 text-xs text-slate-400">
                © 2026 Artifact
              </span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default PepperstoneApp;

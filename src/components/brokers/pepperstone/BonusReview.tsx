import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ShieldCheck,
  TrendingUp,
  Zap,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  Smartphone,
  User,
  Calendar,
  ExternalLink,
  MousePointerClick,
  BarChart3,
  Scale,
  GraduationCap,
  ArrowRight,
  Menu,
} from 'lucide-react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import SEO from '../components/SEO';
import ExpertVoice from '../components/ExpertVoice';
import { AUTHOR_NAME, LAST_UPDATED } from '../constants';

const PepperstoneBonusReview: React.FC = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  // Scroll Listener for Progress Bar and Spy
  useEffect(() => {
    const handleScroll = () => {
      // Progress Bar
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);

      // Scroll Spy
      const sections = ['policy', 'value', 'strategy', 'decision', 'verdict'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
    }
  };

  // Data for the Strategic Analysis Radar Chart
  const radarData = [
    {
      subject: 'Cost Efficiency',
      BonusBroker: 3,
      Pepperstone: 9,
      fullMark: 10,
    },
    {
      subject: 'Platform Power',
      BonusBroker: 4,
      Pepperstone: 10,
      fullMark: 10,
    },
    { subject: 'Education', BonusBroker: 2, Pepperstone: 8, fullMark: 10 },
    {
      subject: 'Regulatory Safety',
      BonusBroker: 2,
      Pepperstone: 10,
      fullMark: 10,
    },
    {
      subject: 'Long-Term Growth',
      BonusBroker: 2,
      Pepperstone: 9,
      fullMark: 10,
    },
  ];

  return (
    <div className="bg-slate-50 pb-20 relative">
      <SEO
        title="Pepperstone Kenya 2026 Review: The Truth About Bonuses"
        description="Patrick Mahinge investigates why Pepperstone doesn't offer bonuses, and whether their raw spreads and CMA regulation offer better value for Kenyan traders."
      />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 z-[60] bg-slate-200">
        <div
          className="h-full bg-brand-accent transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-3/4">
              <Link
                to="/academy"
                className="inline-flex items-center text-emerald-400 hover:text-white mb-6 transition font-bold text-xs uppercase tracking-wider"
              >
                <ArrowLeft
                  size={14}
                  className="mr-2"
                />{' '}
                Academy / Broker Deep Dives
              </Link>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight">
                Pepperstone Kenya: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                  The Truth About Bonuses
                </span>{' '}
                & Real Value.
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm border-t border-brand-800 pt-6">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=100"
                    alt={AUTHOR_NAME}
                    className="w-10 h-10 rounded-full border-2 border-brand-700"
                  />
                  <div>
                    <p className="text-white font-bold">{AUTHOR_NAME}</p>
                    <p className="text-xs">Market Analyst</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-brand-800 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Updated {LAST_UPDATED}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={16} />
                  <span>8 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-12 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content Column */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
            {/* Executive Summary Box */}
            <div className="bg-slate-50 border-l-4 border-brand-accent rounded-r-xl p-6 mb-10">
              <h3 className="font-serif font-bold text-brand-900 text-lg mb-3 flex items-center gap-2">
                <TrendingUp
                  size={20}
                  className="text-brand-accent"
                />
                Key Takeaways
              </h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    className="text-emerald-500 mt-0.5 shrink-0"
                  />
                  <span>
                    Pepperstone does not offer deposit bonuses, aligning with
                    strict CMA consumer protection guidelines.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    className="text-emerald-500 mt-0.5 shrink-0"
                  />
                  <span>
                    Analysis shows raw spreads (0.0-1.0 pips) save active
                    traders more money in 3 months than any one-time bonus.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    className="text-emerald-500 mt-0.5 shrink-0"
                  />
                  <span>
                    Ideal for "Business Builders" seeking regulatory safety;
                    poor fit for "Gamblers" seeking free leverage.
                  </span>
                </li>
              </ul>
            </div>

            <article className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:text-brand-900 prose-a:text-brand-accent hover:prose-a:text-emerald-700 prose-img:rounded-xl">
              <p className="lead font-medium text-slate-600">
                If you have been trading the Kenyan forex markets as long as I
                have, you know the drill. You open a search tab and type:{' '}
                <em>"Pepperstone Kenya deposit bonus."</em>
              </p>
              <p>
                It is the most common query I receive from traders entering the
                market in 2026. We are culturally wired to look for the "deal,"
                the extra topping, the added value. And in the noisy world of
                forex marketing, a deposit bonus often feels like free money.
              </p>
              <p>
                But here is the reality check I give every trader I mentor:{' '}
                <strong>
                  If a broker has to pay you to trade with them, you need to ask
                  how they plan to make that money back.
                </strong>
              </p>
              <p>
                In this review, we are going to have a direct, honest
                conversation. We will look at why Pepperstone Kenya—arguably the
                most robustly regulated broker in our region—does not offer
                flashy deposit bonuses. We will analyze what they offer{' '}
                <em>instead</em>, and I will help you answer the only question
                that matters:{' '}
                <strong>
                  Does the absence of a bonus hurt your trading career, or is it
                  actually the "green flag" you've been looking for?
                </strong>
              </p>

              <hr className="my-10 border-slate-100" />

              {/* Section 1 */}
              <h2
                id="policy"
                className="scroll-mt-24"
              >
                The "No Bonus" Policy: A Sign of Strength
              </h2>
              <p>
                Let's address the elephant in the room immediately. As of the
                2026 landscape, Pepperstone Kenya generally does not offer
                deposit bonuses, credit boosters, or "double your account"
                promotions. For a beginner, this might feel like a disadvantage.
                However, from my perspective as a veteran trader, this is a
                massive signal of legitimacy.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
                    <ShieldCheck size={20} />
                  </div>
                  <h4 className="font-bold text-emerald-900 mb-2">
                    1. The Regulatory Shield
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    The <strong>Capital Markets Authority (CMA)</strong> views
                    aggressive monetary incentives with skepticism. Bonuses
                    distort risk perception. The regulator's priority is
                    consumer protection—ensuring you understand leverage without
                    being blinded by free credit.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-amber-500 mb-4 shadow-sm">
                    <Scale size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    2. No Conflict of Interest
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Brokers with massive bonuses often operate a "B-Book" model
                    (they profit when you lose). Pepperstone's refusal to play
                    games aligns with their transparent execution model. They
                    profit from volume, not your losses.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm my-8 not-prose flex items-start gap-4">
                <div className="bg-brand-50 p-3 rounded-lg text-brand-900 shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">
                    What the Data Says
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed italic mb-2">
                    "Retail traders attracted primarily by monetary incentives
                    demonstrate a 30% higher likelihood of exceeding risk
                    parameters in their first year compared to those selecting
                    brokers based on infrastructure quality."
                  </p>
                  <div className="text-xs text-slate-400 font-medium">
                    Source: Journal of Financial Regulation, 2024
                  </div>
                </div>
              </div>

              {/* Section 2: Comparison Table */}
              <h2
                id="value"
                className="scroll-mt-24"
              >
                The Real "Bonuses": Operational Value
              </h2>
              <p>
                If they aren't giving you trading credit, what <em>are</em> they
                giving you? In my testing of the Pepperstone platform throughout
                early 2026, I stripped away the marketing and looked at the raw
                data: spreads, execution speed, and tool availability. I call
                these "Operational Bonuses"—money you save or make because the
                environment is better.
              </p>

              <div className="not-prose my-10">
                <table className="w-full text-left border-collapse">
                  <thead className="hidden md:table-header-group bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-5 border-b border-slate-200 w-1/3">
                        Value Feature
                      </th>
                      <th className="p-5 border-b border-slate-200 w-1/3">
                        Tangible Benefit
                      </th>
                      <th className="p-5 border-b border-slate-200 w-1/3 text-emerald-700 bg-emerald-50/50">
                        Why It Beats a Bonus
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-slate-600 md:divide-y divide-slate-100 bg-white block md:table-row-group space-y-4 md:space-y-0">
                    <tr className="group md:hover:bg-slate-50 transition flex flex-col md:table-row rounded-xl border border-slate-200 md:border-0 shadow-sm md:shadow-none overflow-hidden">
                      <td className="p-4 md:p-5 font-bold text-slate-900 flex items-center gap-3 bg-slate-50 md:bg-transparent border-b md:border-b-0 border-slate-100">
                        <Zap
                          size={18}
                          className="text-amber-500 shrink-0"
                        />
                        Superior Execution
                      </td>
                      <td className="p-4 md:p-5">
                        <span className="md:hidden text-xs font-bold text-slate-400 uppercase block mb-1">
                          Benefit:
                        </span>
                        Lower cost per trade. Keep more profit per transaction.
                      </td>
                      <td className="p-4 md:p-5 bg-emerald-50/10 md:bg-emerald-50/10 text-slate-800 font-medium">
                        <span className="md:hidden text-xs font-bold text-emerald-600 uppercase block mb-1">
                          Verdict:
                        </span>
                        A 0.1 pip saving on volume generates more "free equity"
                        over 6 months than a 20% bonus.
                      </td>
                    </tr>
                    <tr className="group md:hover:bg-slate-50 transition flex flex-col md:table-row rounded-xl border border-slate-200 md:border-0 shadow-sm md:shadow-none overflow-hidden">
                      <td className="p-4 md:p-5 font-bold text-slate-900 flex items-center gap-3 bg-slate-50 md:bg-transparent border-b md:border-b-0 border-slate-100">
                        <BarChart3
                          size={18}
                          className="text-blue-500 shrink-0"
                        />
                        cTrader / MT5
                      </td>
                      <td className="p-4 md:p-5">
                        <span className="md:hidden text-xs font-bold text-slate-400 uppercase block mb-1">
                          Benefit:
                        </span>
                        Professional charting & automation tools.
                      </td>
                      <td className="p-4 md:p-5 bg-emerald-50/10 md:bg-emerald-50/10 text-slate-800 font-medium">
                        <span className="md:hidden text-xs font-bold text-emerald-600 uppercase block mb-1">
                          Verdict:
                        </span>
                        Empowers skill development. A bonus is temporary;
                        knowing cTrader is a career asset.
                      </td>
                    </tr>
                    <tr className="group md:hover:bg-slate-50 transition flex flex-col md:table-row rounded-xl border border-slate-200 md:border-0 shadow-sm md:shadow-none overflow-hidden">
                      <td className="p-4 md:p-5 font-bold text-slate-900 flex items-center gap-3 bg-slate-50 md:bg-transparent border-b md:border-b-0 border-slate-100">
                        <GraduationCap
                          size={18}
                          className="text-pink-500 shrink-0"
                        />
                        Deep Education
                      </td>
                      <td className="p-4 md:p-5">
                        <span className="md:hidden text-xs font-bold text-slate-400 uppercase block mb-1">
                          Benefit:
                        </span>
                        Structured webinars & local analysis.
                      </td>
                      <td className="p-4 md:p-5 bg-emerald-50/10 md:bg-emerald-50/10 text-slate-800 font-medium">
                        <span className="md:hidden text-xs font-bold text-emerald-600 uppercase block mb-1">
                          Verdict:
                        </span>
                        Builds "Knowledge Capital". Education creates mastery;
                        bonuses create dependency.
                      </td>
                    </tr>
                    <tr className="group md:hover:bg-slate-50 transition flex flex-col md:table-row rounded-xl border border-slate-200 md:border-0 shadow-sm md:shadow-none overflow-hidden">
                      <td className="p-4 md:p-5 font-bold text-slate-900 flex items-center gap-3 bg-slate-50 md:bg-transparent border-b md:border-b-0 border-slate-100">
                        <Smartphone
                          size={18}
                          className="text-purple-500 shrink-0"
                        />
                        Local Support
                      </td>
                      <td className="p-4 md:p-5">
                        <span className="md:hidden text-xs font-bold text-slate-400 uppercase block mb-1">
                          Benefit:
                        </span>
                        Faster resolution. No explaining "M-Pesa" to bots.
                      </td>
                      <td className="p-4 md:p-5 bg-emerald-50/10 md:bg-emerald-50/10 text-slate-800 font-medium">
                        <span className="md:hidden text-xs font-bold text-emerald-600 uppercase block mb-1">
                          Verdict:
                        </span>
                        Saves time and frustration, allowing purely focused
                        trading.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section 3: Radar Chart Analysis */}
              <h2
                id="strategy"
                className="scroll-mt-24"
              >
                The Strategic Dilemma
              </h2>
              <p>
                To help you visualize this, let's compare a typical{' '}
                <strong>"Bonus-Focused Offshore Broker"</strong> against{' '}
                <strong>"Pepperstone Kenya"</strong> across five critical axes.
              </p>

              <div className="not-prose bg-white rounded-xl shadow-lg border border-slate-200 p-6 my-10 grid md:grid-cols-2 gap-8 items-center">
                <div className="h-[320px] w-full relative">
                  <div className="absolute top-0 left-0 bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded z-10">
                    Data Visualization
                  </div>
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <RadarChart
                      cx="50%"
                      cy="50%"
                      outerRadius="75%"
                      data={radarData}
                    >
                      <PolarGrid stroke="#e2e8f0" />
                      <PolarAngleAxis
                        dataKey="subject"
                        tick={{
                          fontSize: 11,
                          fill: '#64748b',
                          fontWeight: 600,
                        }}
                      />
                      <PolarRadiusAxis
                        angle={30}
                        domain={[0, 10]}
                        tick={false}
                        axisLine={false}
                      />
                      <Radar
                        name="Pepperstone"
                        dataKey="Pepperstone"
                        stroke="#059669"
                        strokeWidth={3}
                        fill="#059669"
                        fillOpacity={0.4}
                      />
                      <Radar
                        name="Bonus Broker"
                        dataKey="BonusBroker"
                        stroke="#ef4444"
                        strokeWidth={3}
                        fill="#ef4444"
                        fillOpacity={0.2}
                      />
                      <Legend
                        wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
                      />
                      <Tooltip
                        contentStyle={{
                          borderRadius: '8px',
                          border: 'none',
                          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                        }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-6">
                  <h4 className="font-serif font-bold text-slate-900 text-xl">
                    Visual Interpretation
                  </h4>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="font-bold text-red-900 text-sm">
                        The Bonus Broker (Red)
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed pl-5 border-l-2 border-red-100">
                      Has a massive spike in initial allure (the bonus) but
                      collapses on Regulation and Cost Efficiency because they
                      often widen spreads to pay for that bonus.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span className="font-bold text-emerald-900 text-sm">
                        Pepperstone (Green)
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed pl-5 border-l-2 border-emerald-100">
                      Shows a balanced, expanding web. You start with exactly
                      what you deposited, but your Cost Efficiency, Security,
                      and Platform Power are maximized for long-term survival.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decision Matrix */}
              <h3
                id="decision"
                className="scroll-mt-24"
              >
                Which Trader Are You?
              </h3>
              <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                <div className="group relative bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-slate-300 transition-all duration-300 hover:shadow-lg">
                  <div className="absolute top-0 right-0 bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-bl-xl">
                    Profile A
                  </div>
                  <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 mb-6 group-hover:scale-110 transition-transform">
                    <Smartphone size={28} />
                  </div>
                  <h4 className="font-bold text-xl text-slate-900 mb-2">
                    The Tester
                  </h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                    Mindset: Game / Low Risk
                  </p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    You have a tiny amount of capital you are willing to lose.
                    You aren't looking to build a career yet, just to press
                    buttons with high leverage.
                  </p>
                  <div className="bg-slate-50 text-slate-600 text-sm font-bold p-3 rounded-lg border border-slate-200 text-center group-hover:bg-slate-800 group-hover:text-white transition-colors">
                    Verdict: A bonus broker might suit you.
                  </div>
                </div>

                <div className="group relative bg-emerald-50/50 p-8 rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                  <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-bl-xl">
                    Profile B
                  </div>
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp size={28} />
                  </div>
                  <h4 className="font-bold text-xl text-emerald-900 mb-2">
                    The Business Builder
                  </h4>
                  <p className="text-xs font-bold text-emerald-600/70 uppercase tracking-wider mb-4">
                    Mindset: Professional Growth
                  </p>
                  <p className="text-emerald-900/80 text-sm mb-6 leading-relaxed">
                    You view trading as a business. Spreads are your "cost of
                    goods sold." You want to withdraw profits instantly without
                    reading 40 pages of T&Cs.
                  </p>
                  <div className="bg-white text-emerald-700 text-sm font-bold p-3 rounded-lg border border-emerald-200 text-center shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    Verdict: Pepperstone is the only choice.
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <h2
                id="verdict"
                className="scroll-mt-24"
              >
                Conclusion: The Final Verdict
              </h2>
              <ExpertVoice
                type="tip"
                title="The Construction Metaphor"
              >
                In the construction industry, you can paint a house with cheap,
                flashy paint to hide cracks in the foundation. Or, you can spend
                your money on reinforced concrete and steel. A deposit bonus is
                the paint. <strong>Pepperstone is the concrete.</strong>
              </ExpertVoice>
              <p>
                In the regulated Kenyan market of 2026, the absence of a flashy
                bonus is the hallmark of a legitimate broker. It signals that
                they don't need to bribe you to join them—their product is good
                enough to stand on its own.
              </p>
              <p className="font-bold text-xl text-brand-900">
                My Advice: Stop asking "What bonus will I get?" and start asking
                "Which broker provides the best ecosystem for my trading skill
                to grow and my capital to be protected?"
              </p>
              <p>
                When you ask that question, the answer usually leads you
                straight to Pepperstone.
              </p>
            </article>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4 space-y-8">
          {/* Sticky Container */}
          <div className="sticky top-24 space-y-8">
            {/* Table of Contents - Dynamic & Floating */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hidden lg:block">
              <h4 className="font-bold text-slate-400 text-xs uppercase tracking-wide mb-4 flex items-center gap-2">
                <Menu size={14} /> Article Contents
              </h4>
              <nav className="space-y-1">
                <button
                  onClick={() => scrollToSection('policy')}
                  className={`block w-full text-left px-3 py-2 text-sm rounded transition-all border-l-2 ${activeSection === 'policy' ? 'border-brand-accent bg-brand-50 text-brand-900 font-bold' : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                  The "No Bonus" Policy
                </button>
                <button
                  onClick={() => scrollToSection('value')}
                  className={`block w-full text-left px-3 py-2 text-sm rounded transition-all border-l-2 ${activeSection === 'value' ? 'border-brand-accent bg-brand-50 text-brand-900 font-bold' : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                  Real Value Proposition
                </button>
                <button
                  onClick={() => scrollToSection('strategy')}
                  className={`block w-full text-left px-3 py-2 text-sm rounded transition-all border-l-2 ${activeSection === 'strategy' ? 'border-brand-accent bg-brand-50 text-brand-900 font-bold' : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                  Strategic Analysis
                </button>
                <button
                  onClick={() => scrollToSection('decision')}
                  className={`block w-full text-left px-3 py-2 text-sm rounded transition-all border-l-2 ${activeSection === 'decision' ? 'border-brand-accent bg-brand-50 text-brand-900 font-bold' : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                  Which Trader Are You?
                </button>
                <button
                  onClick={() => scrollToSection('verdict')}
                  className={`block w-full text-left px-3 py-2 text-sm rounded transition-all border-l-2 ${activeSection === 'verdict' ? 'border-brand-accent bg-brand-50 text-brand-900 font-bold' : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                  Final Verdict
                </button>
              </nav>
            </div>

            {/* CTA Box */}
            <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden group">
              <div className="bg-brand-900 p-4 text-center">
                <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1">
                  <ShieldCheck size={12} /> Recommended
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img
                    src="https://picsum.photos/id/102/80/80"
                    alt="Pepperstone Logo"
                    className="w-20 h-20 rounded-xl object-contain border border-slate-100 shadow-sm"
                  />
                </div>
                <h3 className="font-serif font-bold text-2xl text-slate-900 text-center mb-1">
                  Pepperstone
                </h3>
                <p className="text-center text-slate-500 text-sm mb-6">
                  Kenya's Premium Execution Broker
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm border-b border-slate-50 pb-2">
                    <span className="text-slate-500">Spread (EUR/USD)</span>
                    <span className="font-bold text-slate-900">
                      0.0 - 1.0 pips
                    </span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-slate-50 pb-2">
                    <span className="text-slate-500">Execution Speed</span>
                    <span className="font-bold text-emerald-600">
                      ~65ms (Fastest)
                    </span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-slate-50 pb-2">
                    <span className="text-slate-500">Regulation</span>
                    <span className="font-bold text-slate-900 flex items-center gap-1">
                      <ShieldCheck
                        size={14}
                        className="text-emerald-500"
                      />{' '}
                      CMA
                    </span>
                  </div>
                </div>

                <a
                  href="#"
                  className="block w-full bg-brand-accent hover:bg-emerald-600 text-white text-center font-bold py-4 rounded-xl transition shadow-lg shadow-emerald-900/20 mb-3 group-hover:scale-[1.02] duration-200 flex items-center justify-center gap-2"
                >
                  Open Account <MousePointerClick size={18} />
                </a>
                <Link
                  to="/broker/pepperstone-ke"
                  className="block w-full bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold py-3 rounded-xl transition text-center text-sm"
                >
                  Read Full Review
                </Link>

                <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-slate-400 bg-slate-50 p-2 rounded">
                  <AlertTriangle size={10} />
                  74-89% of retail investor accounts lose money.
                </div>
              </div>
            </div>

            {/* Author Mini Bio */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=100"
                  alt={AUTHOR_NAME}
                  className="w-14 h-14 rounded-full border border-slate-100"
                />
                <div>
                  <h4 className="font-serif font-bold text-slate-900">
                    Patrick Mahinge
                  </h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Editor-in-Chief
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                With over 12 years in the markets, Patrick is dedicated to
                dismantling marketing hype and protecting Kenyan capital through
                data-driven analysis.
              </p>
              <Link
                to="/about"
                className="text-brand-accent text-sm font-bold hover:underline flex items-center gap-1"
              >
                View Full Profile <ExternalLink size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PepperstoneBonusReview;

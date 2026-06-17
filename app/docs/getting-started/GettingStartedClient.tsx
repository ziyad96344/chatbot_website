'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles, Zap, Palette, Brain, Code, BarChart3, ChevronRight, UserCircle, Building2, CreditCard, Mic, MessageSquare, Bot } from 'lucide-react';
import Footer from '@/components/Footer';

/* ─── Animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Steps Data ─── */
const steps = [
  {
    id: 'step-1',
    number: '01',
    title: 'Create Your Account',
    subtitle: 'Sign up in seconds',
    description: 'Head to app.xotbot.com and create your account. Enter your name, email address, and a secure password to get started.',
    image: '/onboarding/create-account.png',
    icon: UserCircle,
    tips: [
      'Use a work email address if possible',
      'You will receive a verification code',
      'Setting up takes less than 5 minutes',
    ],
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Company Details',
    subtitle: 'Tell us about your business',
    description: 'Next, enter your company name and phone number. This helps us tailor the experience and provide better support for your business needs.',
    image: '/onboarding/company-details.png',
    icon: Building2,
    tips: [
      'Use your official company name',
      'Your workspace will be named after your company',
      'You can invite team members later',
    ],
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Choose Your Plan',
    subtitle: 'Pick the best fit',
    description: 'Select a plan that works best for you. The Free plan is a great way to test out the platform before committing to a paid tier.',
    image: '/onboarding/choose-plan.png',
    icon: CreditCard,
    tips: [
      'The Starter plan is great for small businesses',
      'Pro plan includes voice agents and advanced analytics',
      'You can always upgrade or downgrade later',
    ],
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Name Your Chatbot',
    subtitle: 'Give it an identity',
    description: 'Click "Create New" in the sidebar to launch the chatbot wizard. Give your bot a name and a short description — this helps you manage multiple bots later.',
    image: '/onboarding/create-bot1.png',
    icon: Zap,
    tips: [
      'Use a descriptive name like "Sales Assistant" or "Support Bot"',
      'The description is internal — your visitors won\'t see it',
    ],
  },
  {
    id: 'step-5',
    number: '05',
    title: 'Set Bot Personality',
    subtitle: 'Define how it talks',
    description: 'Configure your bot\'s persona: choose the default language (50+ supported), set a custom greeting message, define the business type, and give it a display name your visitors will see.',
    image: '/onboarding/create-bot2.png',
    icon: Brain,
    tips: [
      'The bot auto-detects visitor language even if you set a default',
      'A warm greeting like "Hi! How can I help you today?" works best',
      'Business type helps the AI understand context',
    ],
  },
  {
    id: 'step-6',
    number: '06',
    title: 'Customize Look & Feel',
    subtitle: 'Match your brand',
    description: 'Use the powerful visual customizer to style your chatbot widget. Set primary colors, font styles, upload a custom avatar, choose widget position, and configure bubble styles — all with a live preview.',
    image: '/onboarding/create-bot3.png',
    icon: Palette,
    tips: [
      'Upload your company logo for brand consistency',
      'Match the primary color to your website theme',
      'Write a welcoming initial message for your visitors',
    ],
  },
  {
    id: 'step-7',
    number: '07',
    title: 'Configure Voice AI',
    subtitle: 'Make it speak',
    description: 'Enable voice capabilities for your chatbot. Choose from realistic AI voices, adjust the speaking rate and pitch, and let your users interact using both text and voice for a truly engaging experience.',
    image: '/onboarding/create-bot4.png',
    icon: Mic,
    tips: [
      'Try out different voice samples in the preview player',
      'Select a voice that represents your company demographic',
      'Choose a voice that matches your brand persona',
    ],
  },
  {
    id: 'step-8',
    number: '08',
    title: 'Train with Your Data',
    subtitle: 'Make it smart',
    description: 'This is where the magic happens. Paste your website URL and our AI crawler will automatically scrape every page — products, pricing, FAQs, policies — and build a knowledge base. You can also upload PDFs or add custom Q&A pairs.',
    image: '/onboarding/step-knowledge.png',
    icon: Brain,
    tips: [
      'URL scraping handles entire websites including subpages',
      'Upload PDFs for product manuals or training documents',
      'Add custom Q&A for very specific questions',
      'The knowledge base auto-updates when your site changes',
    ],
  },
  {
    id: 'step-9',
    number: '09',
    title: 'Test Your Bot',
    subtitle: 'Ensure perfect responses',
    description: 'Before going live, use the built-in testing interface to chat with your bot. Verify that it answers correctly based on the knowledge base you provided.',
    image: '/onboarding/create-bot5.png',
    icon: MessageSquare,
    tips: [
      'Ask common customer queries',
      'Check if it handles edge cases gracefully',
      'Adjust prompts if the tone needs tweaking',
    ],
  },
  {
    id: 'step-10',
    number: '10',
    title: 'Deploy & Go Live',
    subtitle: 'Launch in 10 seconds',
    description: 'Copy your installation script from the Embed Integration section and paste it into your website\'s HTML just before the closing </body> tag. Your AI chatbot is now live!',
    image: '/onboarding/integration.png',
    icon: Code,
    tips: [
      'Works on any website: Shopify, WordPress, Wix, Webflow, custom HTML',
      'The script is async, so it won\'t block your page loading',
      'WhatsApp integration also available for multi-channel support',
    ],
  },
];

/* ─── Step Card Component ─── */
const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const { ref, visible } = useScrollReveal(0.1);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} id={step.id} className="scroll-mt-24">
      <motion.div
        initial="hidden"
        animate={visible ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
      >
        {/* Text Side */}
        <motion.div variants={fadeUp} className={`w-full ${step.id === 'step-10' ? 'lg:w-5/12' : 'flex-1'}`}>
          {/* Step Badge */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <step.icon size={20} className="text-emerald-400" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-500/60 font-mono font-bold block">
                Step {step.number}
              </span>
              <span className="text-[11px] text-white/30 font-light">{step.subtitle}</span>
            </div>
          </div>

          {/* Title */}
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {step.title}
          </h2>

          {/* Description */}
          <p className="text-white/45 text-[15px] leading-relaxed font-light mb-6">
            {step.description}
          </p>

          {/* Tips */}
          <div className="space-y-2.5">
            {step.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={14} className="text-emerald-500/60 mt-0.5 shrink-0" />
                <span className="text-white/35 text-[13px] font-light leading-relaxed">{tip}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div variants={fadeUp} className={`w-full ${step.id === 'step-10' ? 'lg:w-7/12 lg:scale-105 z-10' : 'flex-1'}`}>
          {step.image ? (
            <div className="relative group">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-emerald-500/[0.03] rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02]">
                <img
                  src={step.image}
                  alt={`${step.title} — XotBot chatbot setup step ${step.number}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          ) : (
            /* Placeholder for steps without image */
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] p-12 flex flex-col items-center justify-center min-h-[280px]">
              <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <step.icon size={32} className="text-emerald-400/60" />
              </div>
              <p className="text-white/20 text-sm font-light text-center">
                Screenshot coming soon
              </p>
              <p className="text-white/10 text-xs font-light text-center mt-1">
                Configure personality, language & greeting
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Connector Line */}
      {index < steps.length - 1 && (
        <div className="flex justify-center py-8 lg:py-12">
          <div className="w-[1px] h-16 bg-gradient-to-b from-emerald-500/20 via-emerald-500/10 to-transparent" />
        </div>
      )}
    </div>
  );
};

/* ─── Main Component ─── */
const GettingStartedClient: React.FC = () => {
  const heroReveal = useScrollReveal(0.1);
  const bonusReveal = useScrollReveal(0.1);
  const ctaReveal = useScrollReveal(0.1);

  return (
    <div className="min-h-screen bg-[#0a0a0c] overflow-x-hidden">
      {/* Background ambient */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `radial-gradient(circle at 30% 20%, rgba(16,185,129,0.15) 0%, transparent 50%)` }}
      />

      {/* ─── Breadcrumb ─── */}
      <div className="pt-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-[11px] text-white/25 font-mono">
            <a href="/docs" className="hover:text-emerald-400/60 transition-colors">Docs</a>
            <ChevronRight size={10} />
            <span className="text-emerald-400/60">Getting Started</span>
          </nav>
        </div>
      </div>

      {/* ─── Hero ─── */}
      <section ref={heroReveal.ref} className="relative pt-8 pb-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate={heroReveal.visible ? 'visible' : 'hidden'}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/15 mb-6">
              <Zap size={12} className="text-emerald-400" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-400/80 font-bold">5-Minute Setup</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Set Up Your AI Chatbot{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                in 5 Minutes
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base md:text-lg text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              Follow this step-by-step guide to create, customize, train, and deploy your AI chatbot.
              No coding required — just paste your website URL and you&apos;re live.
            </motion.p>

            {/* Quick stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 mt-10">
              {[
                { label: 'Steps', value: '10' },
                { label: 'Time', value: '~5 min' },
                { label: 'Code Required', value: 'Zero' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <span className="text-xl font-bold text-white">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-mono">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Steps ─── */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </section>

      {/* ─── Bonus: Dashboard Overview ─── */}
      <section ref={bonusReveal.ref} className="px-6 md:px-12 pb-20">
        <motion.div
          initial="hidden"
          animate={bonusReveal.visible ? 'visible' : 'hidden'}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/15 mb-4">
              <BarChart3 size={12} className="text-emerald-400" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-400/80 font-bold">Bonus</span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Your{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Command Center
              </span>
            </h2>
            <p className="text-white/40 text-base font-light max-w-xl mx-auto">
              Once deployed, monitor everything from your dashboard — conversations, leads, analytics, voice calls, and more.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="relative group">
            <div className="absolute -inset-4 bg-emerald-500/[0.03] rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02]">
              <img
                src="/onboarding/dashboard.png"
                alt="XotBot Dashboard — Real-time chatbot analytics and performance monitoring"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── CTA ─── */}
      <section ref={ctaReveal.ref} className="px-6 md:px-12 pb-24">
        <motion.div
          initial="hidden"
          animate={ctaReveal.visible ? 'visible' : 'hidden'}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            variants={fadeUp}
            className="relative p-10 md:p-14 rounded-3xl border border-emerald-500/10 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.04) 0%, rgba(0,0,0,0) 60%)' }}
          >
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/[0.04] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <h3
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight relative z-10"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Ready to Build?
            </h3>
            <p className="text-white/40 text-base font-light mb-8 relative z-10 max-w-md mx-auto">
              Join thousands of businesses using XotBot to automate customer support and generate leads 24/7.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a
                href="https://app.xotbot.com/"
                className="group inline-flex items-center gap-3 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm rounded-full transition-all duration-300 shadow-[0_8px_30px_rgba(16,185,129,0.3)]"
              >
                Start Building Free
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/demo"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-white/50 hover:text-white text-sm font-medium rounded-full border border-white/[0.08] hover:border-white/20 transition-all duration-300"
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default GettingStartedClient;

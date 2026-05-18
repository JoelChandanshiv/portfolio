'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { motion, useInView } from 'framer-motion';

const PROMPT = 'joel@portfolio:~$';

interface Line {
  type: 'command' | 'output' | 'blank';
  text: string;
}

const SCRIPT: Line[] = [
  { type: 'command', text: 'whoami' },
  { type: 'output', text: 'Joel Chandanshiv' },
  { type: 'blank', text: '' },
  { type: 'command', text: 'expertise' },
  { type: 'output', text: 'DevOps | Cloud | AI/ML | MLOps' },
  { type: 'blank', text: '' },
  { type: 'command', text: 'current_focus' },
  { type: 'output', text: 'Kubernetes · AWS · MLOps · AI Systems' },
  { type: 'blank', text: '' },
  { type: 'command', text: 'open_to' },
  { type: 'output', text: 'DevOps · Cloud · AI Engineering roles' },
  { type: 'blank', text: '' },
  { type: 'command', text: 'contact' },
  { type: 'output', text: 'joelchandanshiv@gmail.com' },
];

const COMMANDS: Record<string, string[]> = {
  help: [
    'Available commands:',
    '  whoami       — print user',
    '  expertise    — list specialties',
    '  skills       — show stack categories',
    '  projects     — list flagship projects',
    '  contact      — show contact info',
    '  clear        — reset terminal',
  ],
  whoami: ['Joel Chandanshiv'],
  expertise: ['DevOps | Cloud | AI/ML | MLOps'],
  skills: [
    '• DevOps & Cloud Infrastructure',
    '• AI / ML & MLOps',
    '• Streaming & Backend Systems',
    '• IoT & Embedded Systems',
  ],
  projects: [
    '• Grape Disease Detection (Flagship MLOps)',
    '• MarketPulse — Real-Time Risk Monitoring',
    '• EcoNova — Smart Biogas Plant [Patent]',
    '• SynapseMind — AI Messaging Intelligence',
    '• Cloud-Native Two-Tier Deployment Platform',
  ],
  contact: ['joelchandanshiv@gmail.com', 'github.com/JoelChandanshiv'],
};

function CommandLine({ cmd }: { cmd: string }) {
  return (
    <div className="flex flex-wrap">
      <span className="mr-2 select-none text-[color:#10b981]">{PROMPT}</span>
      <span className="text-[#e6edf3]">{cmd}</span>
    </div>
  );
}

function OutputLine({ text }: { text: string }) {
  return <div className="whitespace-pre-wrap pl-1 text-[#9ca3af]">{text}</div>;
}

export function Terminal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inView = useInView(containerRef, { once: true, margin: '-100px' });

  const [displayed, setDisplayed] = useState<Line[]>([]);
  const [typing, setTyping] = useState('');
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Line[]>([]);

  useEffect(() => {
    if (!inView || done) return;

    if (step >= SCRIPT.length) {
      setDone(true);
      return;
    }

    const line = SCRIPT[step];
    if (line.type === 'blank') {
      const t = setTimeout(() => {
        setDisplayed((d) => [...d, line]);
        setStep((s) => s + 1);
      }, 80);
      return () => clearTimeout(t);
    }

    if (line.type === 'output') {
      const t = setTimeout(() => {
        setDisplayed((d) => [...d, line]);
        setStep((s) => s + 1);
      }, 220);
      return () => clearTimeout(t);
    }

    // command — type out character by character
    if (typing.length < line.text.length) {
      const t = setTimeout(() => {
        setTyping(line.text.slice(0, typing.length + 1));
      }, 55);
      return () => clearTimeout(t);
    }
    // command finished typing
    const t = setTimeout(() => {
      setDisplayed((d) => [...d, line]);
      setTyping('');
      setStep((s) => s + 1);
    }, 280);
    return () => clearTimeout(t);
  }, [inView, step, typing, done]);

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    const cmd = input.trim();
    setInput('');
    if (!cmd) {
      setHistory((h) => [...h, { type: 'blank', text: '' }]);
      return;
    }
    if (cmd === 'clear') {
      setHistory([]);
      return;
    }
    const outputs = COMMANDS[cmd] ?? [
      `command not found: ${cmd} — try 'help'`,
    ];
    setHistory((h) => [
      ...h,
      { type: 'command', text: cmd },
      ...outputs.map((o) => ({ type: 'output' as const, text: o })),
    ]);
  };

  const focusInput = () => inputRef.current?.focus();

  return (
    <section
      id="terminal"
      ref={containerRef}
      className="relative py-20"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          onClick={focusInput}
          className="terminal-window mx-auto max-w-3xl overflow-hidden font-mono text-sm"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-xs text-white/40">joel@portfolio: ~</span>
            <span className="w-12" />
          </div>

          <div className="space-y-1 px-5 py-5 text-[13px] leading-relaxed">
            {displayed.map((line, i) => {
              if (line.type === 'command') return <CommandLine key={i} cmd={line.text} />;
              if (line.type === 'output') return <OutputLine key={i} text={line.text} />;
              return <div key={i} className="h-3" />;
            })}

            {!done && (
              <div className="flex flex-wrap">
                <span className="mr-2 select-none text-[color:#10b981]">{PROMPT}</span>
                <span className="text-[#e6edf3]">{typing}</span>
                <span className="ml-0.5 inline-block h-4 w-[8px] animate-blink bg-[#e6edf3]" />
              </div>
            )}

            {done && (
              <>
                <div className="my-3 h-px bg-white/5" />
                <div className="text-[11px] text-white/40">
                  Try: <span className="text-[#10b981]">help</span>,{' '}
                  <span className="text-[#10b981]">projects</span>,{' '}
                  <span className="text-[#10b981]">skills</span>,{' '}
                  <span className="text-[#10b981]">clear</span>
                </div>

                {history.map((line, i) =>
                  line.type === 'command' ? (
                    <CommandLine key={i} cmd={line.text} />
                  ) : line.type === 'output' ? (
                    <OutputLine key={i} text={line.text} />
                  ) : (
                    <div key={i} className="h-3" />
                  ),
                )}

                <div className="flex">
                  <span className="mr-2 select-none text-[color:#10b981]">{PROMPT}</span>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    className="flex-1 bg-transparent text-[#e6edf3] caret-[color:var(--accent-primary)] outline-none"
                    aria-label="Terminal command input"
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

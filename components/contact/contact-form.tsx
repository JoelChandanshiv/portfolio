'use client';

import { useState, type FormEvent } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'success' | 'error';

function FloatingField({
  id,
  label,
  type = 'text',
  required = false,
  value,
  onChange,
  textarea = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  const hasValue = value.length > 0;
  const baseClasses =
    'peer w-full rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)]/60 px-4 pt-6 pb-2 text-sm text-fg outline-none transition-all focus:border-[color:var(--accent-primary)] focus:shadow-[0_0_0_3px_var(--accent-primary)1a]';

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          className={cn(baseClasses, 'resize-none')}
          placeholder=" "
        />
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseClasses}
          placeholder=" "
          autoComplete={type === 'email' ? 'email' : 'off'}
        />
      )}
      <label
        htmlFor={id}
        className={cn(
          'pointer-events-none absolute left-4 origin-left text-fg-muted transition-all',
          hasValue
            ? 'top-2 scale-[0.78] text-[color:var(--accent-primary)]'
            : 'top-4 text-sm peer-focus:top-2 peer-focus:scale-[0.78] peer-focus:text-[color:var(--accent-primary)]',
        )}
      >
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
    </div>
  );
}

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const endpoint = siteConfig.formspreeEndpoint;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    if (!endpoint) {
      // Fallback to mailto if endpoint is not configured
      const body = encodeURIComponent(
        `From: ${name} <${email}>\n\n${message}`,
      );
      const subj = encodeURIComponent(subject || 'Portfolio enquiry');
      window.location.href = `mailto:${siteConfig.email}?subject=${subj}&body=${body}`;
      setStatus('success');
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || 'Submission failed');
      }
      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl glass p-8 text-center">
        <CheckCircle2
          size={48}
          className="mx-auto text-[color:var(--accent-tertiary)]"
        />
        <h3 className="mt-4 font-display text-xl font-semibold">
          Message sent.
        </h3>
        <p className="mt-2 text-sm text-fg-muted">
          Thanks for reaching out — I'll respond within a couple of days.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-[color:var(--accent-primary)] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FloatingField id="name" label="Name" required value={name} onChange={setName} />
        <FloatingField
          id="email"
          label="Email"
          type="email"
          required
          value={email}
          onChange={setEmail}
        />
      </div>
      <FloatingField
        id="subject"
        label="Subject"
        value={subject}
        onChange={setSubject}
      />
      <FloatingField
        id="message"
        label="Message"
        required
        value={message}
        onChange={setMessage}
        textarea
      />

      {status === 'error' && (
        <div className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {!endpoint && (
        <p className="text-xs text-fg-muted">
          Form will open your email client. (Configure{' '}
          <code className="font-mono text-[color:var(--accent-primary)]">
            NEXT_PUBLIC_FORMSPREE_ENDPOINT
          </code>{' '}
          to enable direct submission.)
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-signature px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

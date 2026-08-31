'use client';

import { useState, type FormEvent } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { site } from '@/config/site';

const destinations = ['UAE', 'KSA', 'Oman', 'Qatar', 'Kuwait'];

export default function QuoteForm() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [contact, setContact] = useState('');
  const [destination, setDestination] = useState(destinations[0]);
  const [bom, setBom] = useState('');

  function buildSummary() {
    return [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email/Phone: ${contact}`,
      `Destination: ${destination}`,
      '',
      'Bill of Materials:',
      bom,
    ].join('\n');
  }

  function handleEmailSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`RFQ — ${company || name} → ${destination}`);
    const body = encodeURIComponent(buildSummary());

    window.location.href = `mailto:${site.rfqEmail}?subject=${subject}&body=${body}`;
  }

  function handleWhatsAppSubmit() {
    const text = encodeURIComponent(`RFQ Request\n\n${buildSummary()}`);

    window.open(`${site.whatsappHref}?text=${text}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={handleEmailSubmit} className="space-y-4" aria-label="Request for quotation form">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="quote-name">Name</Label>
          <Input
            id="quote-name"
            aria-label="Your name"
            placeholder="John Doe"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quote-company">Company</Label>
          <Input
            id="quote-company"
            aria-label="Company name"
            placeholder="Acme Energy LLC"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="quote-contact">Email / Phone</Label>
          <Input
            id="quote-contact"
            aria-label="Email address or phone number"
            type="text"
            inputMode="email"
            placeholder="you@company.com / +971 50 000 0000"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quote-destination">Destination</Label>
          <select
            id="quote-destination"
            aria-label="Destination country"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            className="flex h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-500"
          >
            {destinations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="quote-bom">Bill of Materials (BOM)</Label>
        <Textarea
          id="quote-bom"
          aria-label="Bill of materials details"
          placeholder={'e.g. API 5L GR.B SCH80 6" x 120m\nA105 WN Flange CL300 4"\nBall Valve CL600 2" x 20 pcs'}
          value={bom}
          onChange={(event) => setBom(event.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" variant="accent" size="lg" className="w-full sm:flex-1" aria-label="Submit request for quotation by email">
          <Send className="h-4 w-4" aria-hidden="true" />
          Send RFQ by Email
        </Button>
        <Button
          type="button"
          onClick={handleWhatsAppSubmit}
          variant="outline"
          size="lg"
          className="w-full border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700 hover:text-white sm:flex-1"
          aria-label="Send request for quotation via WhatsApp"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Send via WhatsApp
        </Button>
      </div>

      <p className="text-center text-xs text-slate-500">
        Typical response time: under 4 business hours (Sun–Thu, GST).
      </p>
    </form>
  );
}

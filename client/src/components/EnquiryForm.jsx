import React, { useState, useEffect } from 'react';
import { useAttribution } from '../context/AttributionContext';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const SERVICE_OPTIONS = [
  { value: 'branding', label: 'Branding & Visual Identity' },
  { value: 'website-development', label: 'Custom Website Development' },
  { value: 'custom-art', label: 'Custom Art Commission' },
  { value: 'art-products', label: 'Art Prints & Products' },
  { value: 'digital-content', label: 'Digital Content Creation' },
  { value: 'murals', label: 'Murals & Commercial Art' },
  { value: 'creative-products', label: 'Curated Creative Products' },
  { value: 'art-classes', label: 'Art Classes (Waitlist)' },
  { value: 'general', label: 'General Studio Inquiry' },
];

export default function EnquiryForm({
  defaultService = 'general',
  formId = 'form_service_enquiry',
  title = 'Initiate a Studio Commission',
  subtitle = 'Share your vision, project scope, and timelines with our creative directors.',
}) {
  const { getAttributionPayload } = useAttribution();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    serviceCategory: defaultService,
    estimatedBudget: '',
    preferredTimeline: '',
    projectDescription: '',
    consentToContact: true,
  });

  // Anti-spam states
  const [honeypot, setHoneypot] = useState('');
  const [renderTime] = useState(Date.now());

  // UI status
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [responseMessage, setResponseMessage] = useState('');
  const [leadNumber, setLeadNumber] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, serviceCategory: defaultService }));
    }
  }, [defaultService]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error on edit
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!formData.projectDescription.trim()) {
      errors.projectDescription = 'Please describe your project or requirements.';
    } else if (formData.projectDescription.trim().length < 10) {
      errors.projectDescription = 'Please provide at least 10 characters describing your project.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setResponseMessage('');

    try {
      // Gather attribution data
      const attributionData = getAttributionPayload();
      const clientElapsedMs = Date.now() - renderTime;

      const payload = {
        ...formData,
        formId,
        submittedFromPage: window.location.pathname,
        clientElapsedMs,
        hp_studio_verify: honeypot, // Honeypot field
        visitor: attributionData.visitor,
        firstTouch: attributionData.firstTouch,
        lastTouch: attributionData.lastTouch,
        consent: {
          ...attributionData.consent,
          consentToContact: formData.consentToContact,
        },
      };

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || (data.errors ? data.errors.join(' ') : 'Unable to submit enquiry.'));
      }

      setStatus('success');
      setLeadNumber(data.leadNumber || '');
      setResponseMessage(data.message || 'Your inquiry has been received. Our studio will connect with you shortly.');
    } catch (err) {
      setStatus('error');
      setResponseMessage(err.message || 'A network error occurred. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-cream-light border border-beige rounded-lg p-8 sm:p-12 text-center max-w-xl mx-auto shadow-card">
        <div className="inline-flex p-3 rounded-full bg-emerald/10 text-emerald mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-3xl text-emerald font-medium">Inquiry Received</h3>
        {leadNumber && (
          <p className="mt-2 text-xs uppercase tracking-widest text-charcoal/70 font-mono font-semibold">
            Reference Code: <span className="text-emerald font-bold">{leadNumber}</span>
          </p>
        )}
        <p className="mt-4 text-charcoal/80 leading-relaxed text-sm">
          {responseMessage}
        </p>
        <div className="editorial-divider my-6" />
        <p className="text-xs text-charcoal/60">
          A confirmation email has been logged. Our studio leads review project briefs every weekday morning.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              organization: '',
              serviceCategory: defaultService,
              estimatedBudget: '',
              preferredTimeline: '',
              projectDescription: '',
              consentToContact: true,
            });
          }}
          className="mt-6 inline-block text-xs uppercase tracking-widest font-semibold text-emerald hover:text-olive border-b border-emerald hover:border-olive pb-1 transition"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-beige/70 rounded-lg p-6 sm:p-10 shadow-card">
      <div className="mb-8">
        <span className="editorial-eyebrow">Studio Consultation</span>
        <h3 className="font-serif text-2xl sm:text-3xl text-emerald font-medium mt-1">{title}</h3>
        <p className="text-sm text-charcoal/70 mt-2 leading-relaxed">{subtitle}</p>
      </div>

      {status === 'error' && (
        <div className="mb-6 p-4 rounded bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
          <p>{responseMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Anti-spam honeypot - hidden visually & from screen-readers */}
        <div className="opacity-0 absolute -left-[9999px] -top-[9999px]" aria-hidden="true">
          <label htmlFor={`hp_${formId}`}>Leave this field empty</label>
          <input
            id={`hp_${formId}`}
            type="text"
            name="hp_studio_verify"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
              Full Name <span className="text-olive font-bold">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="e.g. Eleanor Vance"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 text-sm bg-cream/30 text-charcoal border rounded transition placeholder:text-charcoal/40 focus:border-emerald focus:bg-white focus:ring-1 focus:ring-emerald focus:outline-none ${
                fieldErrors.fullName ? 'border-red-500 bg-red-50/40' : 'border-beige'
              }`}
            />
            {fieldErrors.fullName && <p className="mt-1 text-xs text-red-600">{fieldErrors.fullName}</p>}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
              Email Address <span className="text-olive font-bold">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="eleanor@atelier.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 text-sm bg-cream/30 text-charcoal border rounded transition placeholder:text-charcoal/40 focus:border-emerald focus:bg-white focus:ring-1 focus:ring-emerald focus:outline-none ${
                fieldErrors.email ? 'border-red-500 bg-red-50/40' : 'border-beige'
              }`}
            />
            {fieldErrors.email && <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Telephone / WhatsApp */}
          <div>
            <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
              Phone / WhatsApp <span className="text-charcoal/50 font-normal lowercase">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm bg-cream/30 text-charcoal border border-beige rounded transition placeholder:text-charcoal/40 focus:border-emerald focus:bg-white focus:ring-1 focus:ring-emerald focus:outline-none"
            />
          </div>

          {/* Organization / Brand */}
          <div>
            <label htmlFor="organization" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
              Company / Brand <span className="text-charcoal/50 font-normal lowercase">(optional)</span>
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              placeholder="Vance Gallery & Co."
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm bg-cream/30 text-charcoal border border-beige rounded transition placeholder:text-charcoal/40 focus:border-emerald focus:bg-white focus:ring-1 focus:ring-emerald focus:outline-none"
            />
          </div>
        </div>

        {/* Service Category */}
        <div>
          <label htmlFor="serviceCategory" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
            Service Discipline <span className="text-olive font-bold">*</span>
          </label>
          <select
            id="serviceCategory"
            name="serviceCategory"
            value={formData.serviceCategory}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm bg-cream/30 text-charcoal border border-beige rounded transition focus:border-emerald focus:bg-white focus:ring-1 focus:ring-emerald focus:outline-none cursor-pointer"
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-white text-charcoal">
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Budget Range */}
          <div>
            <label htmlFor="estimatedBudget" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
              Estimated Investment
            </label>
            <select
              id="estimatedBudget"
              name="estimatedBudget"
              value={formData.estimatedBudget}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm bg-cream/30 text-charcoal border border-beige rounded transition focus:border-emerald focus:bg-white focus:ring-1 focus:ring-emerald focus:outline-none cursor-pointer"
            >
              <option value="" className="bg-white text-charcoal/60">Select an investment tier...</option>
              <option value="Under ₹50,000" className="bg-white text-charcoal">Under ₹50,000 ($600)</option>
              <option value="₹50,000 - ₹1,50,000" className="bg-white text-charcoal">₹50,000 - ₹1,50,000 ($600 - $1,800)</option>
              <option value="₹1,50,000 - ₹5,00,000" className="bg-white text-charcoal">₹1,50,000 - ₹5,00,000 ($1,800 - $6,000)</option>
              <option value="₹5,00,000+" className="bg-white text-charcoal">₹5,00,000+ ($6,000+)</option>
              <option value="To Be Discussed" className="bg-white text-charcoal">Undisclosed / In Consultation</option>
            </select>
          </div>

          {/* Timeline */}
          <div>
            <label htmlFor="preferredTimeline" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
              Target Completion
            </label>
            <select
              id="preferredTimeline"
              name="preferredTimeline"
              value={formData.preferredTimeline}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm bg-cream/30 text-charcoal border border-beige rounded transition focus:border-emerald focus:bg-white focus:ring-1 focus:ring-emerald focus:outline-none cursor-pointer"
            >
              <option value="" className="bg-white text-charcoal/60">Select timeline...</option>
              <option value="Urgent (Under 2 weeks)" className="bg-white text-charcoal">Urgent (Within 2 weeks)</option>
              <option value="Standard (2 - 6 weeks)" className="bg-white text-charcoal">Standard (2 to 6 weeks)</option>
              <option value="Flexible (1 - 3 months)" className="bg-white text-charcoal">Flexible (1 to 3 months)</option>
              <option value="Quarterly / Long-Term" className="bg-white text-charcoal">Ongoing / Long-Term Project</option>
            </select>
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="projectDescription" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
            Project Brief & Vision <span className="text-olive font-bold">*</span>
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            rows={4}
            required
            placeholder="Tell us about the space, artwork preferences, branding objectives, or custom web requirements..."
            value={formData.projectDescription}
            onChange={handleChange}
            className={`w-full px-3.5 py-2.5 text-sm bg-cream/30 text-charcoal border rounded transition placeholder:text-charcoal/40 focus:border-emerald focus:bg-white focus:ring-1 focus:ring-emerald focus:outline-none ${
              fieldErrors.projectDescription ? 'border-red-500 bg-red-50/40' : 'border-beige'
            }`}
          />
          {fieldErrors.projectDescription && (
            <p className="mt-1 text-xs text-red-600">{fieldErrors.projectDescription}</p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-2.5 text-xs text-charcoal/80">
          <input
            id="consentToContact"
            name="consentToContact"
            type="checkbox"
            checked={formData.consentToContact}
            onChange={handleChange}
            className="mt-0.5 accent-[#174D3A] w-4 h-4 rounded cursor-pointer"
          />
          <label htmlFor="consentToContact" className="cursor-pointer leading-relaxed">
            I agree to receive communications regarding this project inquiry from HUNAR Creative Studio in accordance with the{' '}
            <a href="/privacy" className="text-emerald underline hover:text-olive">
              Privacy Policy
            </a>
            .
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded shadow-sm hover:shadow-emerald transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting Brief...</span>
              </>
            ) : (
              <>
                <span>Submit Studio Brief</span>
                <Send className="w-3.5 h-3.5 text-beige" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

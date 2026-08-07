import React from 'react';
import { FaLinkedinIn, FaCompass, FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../data/constants';

const promoPlans = [
  {
    id: 'career-new-3m',
    title: 'LinkedIn Premium Career (New User)',
    plan: '3 Months',
    price: 'PKR 2,500',
    type: 'career',
    description: 'Boost your profile visibility and job search prospects.',
  },
  {
    id: 'business-new-2m',
    title: 'LinkedIn Premium Business (New User)',
    plan: '2 Months',
    price: 'PKR 2,200',
    type: 'business',
    description: 'Expand your professional network and explore business insights.',
  },
  {
    id: 'career-exist-2m',
    title: 'LinkedIn Premium Career (Existing User)',
    plan: '2 Months',
    price: 'PKR 4,700',
    type: 'career',
    description: 'Upgrade your existing account with Career Premium features.',
  },
  {
    id: 'career-12m',
    title: 'LinkedIn Premium Career',
    plan: '12 Months',
    price: 'PKR 18,000',
    type: 'career',
    description: 'A full year of Career Premium benefits for your existing account.',
  },
  {
    id: 'business-exist-2m',
    title: 'LinkedIn Premium Business (Existing User)',
    plan: '2 Months',
    price: 'PKR 4,800',
    type: 'business',
    description: 'Enhance your existing account with Premium Business insights.',
  },
  {
    id: 'business-12m',
    title: 'LinkedIn Premium Business',
    plan: '12 Months',
    price: 'PKR 19,000',
    type: 'business',
    description: 'A full year of Premium Business for your existing account.',
  },
  {
    id: 'sales-new-2m',
    title: 'LinkedIn Sales Navigator (New User)',
    plan: '2 Months',
    price: 'PKR 4,000',
    type: 'sales',
    description: 'Advanced lead search and outreach tools for new accounts.',
  },
  {
    id: 'sales-exist-1m',
    title: 'LinkedIn Sales Navigator (Existing User)',
    plan: '1 Month',
    price: 'PKR 5,000',
    type: 'sales',
    description: 'Add Sales Navigator features directly to your existing account.',
  }
];

const getPlanIcon = (type) =>
  type === 'sales' ? (
    <FaCompass size={40} color="#0a66c2" />
  ) : (
    <FaLinkedinIn size={40} color="#0a66c2" />
  );

export const LinkedInPromoSection = () => {
  return (
    <section className="linkedin-section" style={{ borderTop: '1px solid var(--border)', marginTop: '2rem', paddingTop: '4rem' }}>
      <div className="linkedin-container">
        <div className="linkedin-header">
          <p className="linkedin-eyebrow">🚀 Boost Your Career & Business with LinkedIn Premium!</p>
          <h2 className="linkedin-heading">Plans & Pricing</h2>
          <p className="linkedin-subtitle">
            Unlock InMail credits, advanced search, and profile boosts to land clients and jobs faster.<br /><br />
            <strong>⚡ 100% Safe • Instant Activation via Voucher</strong><br />
            📩 DM now to get started instantly!
          </p>
        </div>

        <div className="linkedin-grid">
          {promoPlans.map((plan) => (
            <article key={plan.id} className="linkedin-card">
              <div className="linkedin-card-accent"></div>

              <div className="linkedin-card-content">
                <div className="linkedin-icon-box">{getPlanIcon(plan.type)}</div>

                <h3 className="linkedin-card-title">{plan.title}</h3>

                <div className="linkedin-badge-row">
                  <div className="linkedin-status-badge">
                    <span className="linkedin-live-dot"></span>
                    {plan.plan}
                  </div>
                  <div className="linkedin-price-badge">{plan.price}</div>
                </div>

                <p className="linkedin-card-desc">{plan.description}</p>
              </div>

              <div className="linkedin-actions">
                <a
                  href={whatsappLink(
                    `Hello, I am interested in ${plan.title} — ${plan.plan} for ${plan.price}. Please share more details.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid-whatsapp"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <FaWhatsapp size={18} /> Chat with Live Agent
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

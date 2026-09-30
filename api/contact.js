import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Escapes user-supplied values before they are interpolated into the HTML
 * email body. Without this, markup in a form field is rendered as HTML by
 * the recipient's mail client.
 */
const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, message, formType, service } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required.' });
    }

    // Bound field lengths so a single submission cannot generate an
    // unbounded email.
    const field = (v) => escapeHtml(String(v ?? '').slice(0, 2000));
    const safeName = field(name);
    const safeEmail = escapeHtml(String(email).slice(0, 320));
    const safeFormType = escapeHtml(String(formType || 'contact').slice(0, 64));

    // Determine recipient based on form type
    const getRecipient = (type) => {
      switch (type) {
        case 'demo': return 'info@syncspherellc.com';
        case 'sales': return 'sales@syncspherellc.com';
        case 'finance': return 'finance@syncspherellc.com';
        case 'compliance': return 'compliance@syncspherellc.com';
        case 'security': return 'security@syncspherellc.com';
        case 'website-grader': return 'info@syncspherellc.com';
        default: return 'info@syncspherellc.com';
      }
    };

    // Determine sender based on form type
    const getSender = (type) => {
      switch (type) {
        case 'demo': return 'SyncSphere Demo Team <info@syncspherellc.com>';
        case 'sales': return 'SyncSphere Sales <sales@syncspherellc.com>';
        case 'finance': return 'SyncSphere Finance <finance@syncspherellc.com>';
        case 'compliance': return 'SyncSphere Compliance <compliance@syncspherellc.com>';
        case 'security': return 'SyncSphere Security <security@syncspherellc.com>';
        default: return 'SyncSphere LLC <info@syncspherellc.com>';
      }
    };

    // Create email content
    const emailContent = `
      <h2>New ${safeFormType} inquiry from the SyncSphere LLC website</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      ${phone ? `<p><strong>Phone:</strong> ${field(phone)}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${field(company)}</p>` : ''}
      ${service ? `<p><strong>Service:</strong> ${field(service)}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${field(message)}</p>
      <hr>
      <p><small>Sent from the SyncSphere LLC website contact form.</small></p>
    `;

    // Send email
    await resend.emails.send({
      from: getSender(formType),
      to: getRecipient(formType),
      replyTo: String(email).slice(0, 320),
      subject: `New ${String(formType || 'website')} inquiry from ${String(name).slice(0, 120)}`,
      html: emailContent,
    });

    // Send auto-reply to user with matching department signature
    await resend.emails.send({
      from: getSender(formType),
      to: String(email).slice(0, 320),
      subject: 'Thank you for contacting SyncSphere LLC',
      html: `
        <h2>Thank you for your inquiry</h2>
        <p>Hi ${safeName},</p>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>If your enquiry is time-sensitive, call us on +256 757 727 965.</p>
        <p>Best regards,<br>The SyncSphere LLC Team</p>
        <hr>
        <p><small>SyncSphere LLC — a domestic limited liability company registered in Montana, USA
        (File No. 16835344, EIN 35-2932039).<br>
        Registered office: 127 N Higgins Ave, Ste 307D #2082, Missoula, MT 59802, United States.</small></p>
      `,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
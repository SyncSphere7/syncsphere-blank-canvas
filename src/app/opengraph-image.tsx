import { ImageResponse } from 'next/og';

export const alt = 'SyncSphere — Websites, WhatsApp automation and marketing for Ugandan businesses';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: 'linear-gradient(135deg, #003366 0%, #0055A4 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 36, fontWeight: 800 }}>
          <div style={{ width: 20, height: 20, borderRadius: 999, background: '#F5B000' }} />
          SyncSphere
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1, maxWidth: 980 }}>Websites that win you customers.</div>
          <div style={{ fontSize: 32, marginTop: 24, color: 'rgba(255,255,255,0.85)' }}>
            Websites · WhatsApp automation · Social media — Kampala, Uganda
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#F5B000', fontWeight: 700 }}>syncspherellc.com</div>
      </div>
    ),
    size,
  );
}

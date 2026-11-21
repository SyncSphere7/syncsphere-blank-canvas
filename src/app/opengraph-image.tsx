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
          background: '#1D130D',
          color: '#F2E7D3',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 36, fontWeight: 800 }}>
          <div style={{ width: 20, height: 20, borderRadius: 999, background: '#D4582B' }} />
          SyncSphere
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1, maxWidth: 980 }}>WEBSITES THAT SELL FOR UGANDAN BUSINESSES.</div>
          <div style={{ fontSize: 32, marginTop: 24, color: 'rgba(242,231,211,0.8)' }}>
            Websites · WhatsApp automation · Social media — Kampala, Uganda
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#D4582B', fontWeight: 700 }}>syncspherellc.com</div>
      </div>
    ),
    size,
  );
}

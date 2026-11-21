import { ImageResponse } from 'next/og';
import { S_PATH, TILE_PATH } from '@/components/Logo';

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
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 38, fontWeight: 800, letterSpacing: 1 }}>
          <svg width="56" height="56" viewBox="6 6 52 52">
            <path d={TILE_PATH} fill="#D4582B" />
            <path d={S_PATH} fill="none" stroke="#1D130D" strokeWidth="7.4" strokeLinejoin="round" />
          </svg>
          SYNCSPHERE
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1, maxWidth: 980 }}>WEBSITES, APPS &amp; AI FOR UGANDAN BUSINESSES.</div>
          <div style={{ fontSize: 32, marginTop: 24, color: 'rgba(242,231,211,0.8)' }}>
            Websites · Web &amp; mobile apps · AI chatbots — Kampala, Uganda
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#D4582B', fontWeight: 700 }}>syncspherellc.com</div>
      </div>
    ),
    size,
  );
}

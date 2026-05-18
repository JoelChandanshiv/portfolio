import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Joel Chandanshiv — DevOps & AI Systems Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(circle at 20% 30%, #00F0FF22, transparent 50%), radial-gradient(circle at 80% 70%, #8B5CF622, transparent 50%), #0A0A0F',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          fontFamily: 'system-ui',
          color: '#F4F4F6',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #00F0FF 0%, #8B5CF6 100%)',
              color: '#0A0A0F',
              fontSize: 26,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              letterSpacing: -2,
            }}
          >
            J.C.
          </div>
          <div
            style={{
              fontSize: 18,
              fontFamily: 'monospace',
              color: '#9CA3AF',
              letterSpacing: 4,
              textTransform: 'uppercase',
            }}
          >
            // Portfolio
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: -3,
            }}
          >
            Joel{' '}
            <span
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #00F0FF 0%, #8B5CF6 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Chandanshiv
            </span>
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 36,
              color: '#9CA3AF',
              maxWidth: 980,
              lineHeight: 1.2,
            }}
          >
            DevOps Engineer · Cloud & AI Systems Engineer
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            fontSize: 18,
            color: '#9CA3AF',
          }}
        >
          <div style={{ display: 'flex', gap: 24 }}>
            <span>DevOps</span>
            <span style={{ color: '#3a3a4a' }}>·</span>
            <span>Cloud</span>
            <span style={{ color: '#3a3a4a' }}>·</span>
            <span>AI/ML</span>
            <span style={{ color: '#3a3a4a' }}>·</span>
            <span>MLOps</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: '#10B981',
              }}
            />
            Open to opportunities
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

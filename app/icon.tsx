import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #00F0FF 0%, #8B5CF6 100%)',
          color: '#0A0A0F',
          fontSize: 14,
          fontWeight: 700,
          fontFamily: 'system-ui',
          letterSpacing: -1,
          borderRadius: 6,
        }}
      >
        JC
      </div>
    ),
    { ...size },
  );
}

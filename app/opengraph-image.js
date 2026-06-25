import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0d0f12 0%, #1a1b2e 50%, #2d1b2e 100%)',
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          padding: '80px 100px',
        }}
      >
        <div
          style={{
            width: 80,
            height: 4,
            borderRadius: 2,
            background: '#c91b68',
            marginBottom: 40,
          }}
        />

        <h1
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#f0f1f2',
            letterSpacing: '-0.03em',
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Sagar Karmoker
        </h1>

        <p
          style={{
            fontSize: 28,
            color: '#c7cacc',
            marginTop: 16,
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          Researcher &amp; Blockchain Engineer
        </p>

        <div
          style={{
            display: 'flex',
            gap: 20,
            marginTop: 40,
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: 18, color: '#809fff' }}>Distributed Systems</span>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: '#c91b68' }} />
          <span style={{ fontSize: 18, color: '#809fff' }}>Blockchain Scalability</span>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: '#c91b68' }} />
          <span style={{ fontSize: 18, color: '#809fff' }}>DeFi Infrastructure</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

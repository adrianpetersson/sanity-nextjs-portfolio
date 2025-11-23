import '../styles/globals.css';
import { Layout } from '../layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adrian Petersson portfolio',
  description: 'Frontend and UX portfolio of Adrian Petersson',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

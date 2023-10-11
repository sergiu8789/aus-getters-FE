import './globals.css';
import favicon from '../../public/assets/images/favicon.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

export const metadata = {
  title: 'Aus Getters Employer',
  description: 'Job Seeking and Learing Platform'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href={favicon} sizes="any" />
      </Head>
      <body>{children}</body>
    </html>
  );
}

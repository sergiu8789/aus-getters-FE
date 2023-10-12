import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'Aus Getters Employer',
  description: 'Job Seeking and Learing Platform'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

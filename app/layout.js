import './globals.css';
import './page.module.css';

export const metadata = {
  title: 'TOTU Hair Salon',
  description: 'Zweisprachiger Salon in Wien',
  icons: {
    icon: './favicon.ico', // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

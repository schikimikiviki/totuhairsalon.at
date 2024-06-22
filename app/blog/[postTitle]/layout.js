import '../../globals.css';

export const metadata = {
  title: 'TOTU Hair Salon',
  description: 'Zweisprachiger Salon in Wien',
  icons: {
    icon: './favicon.ico',
  },
};

export default function BlogLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

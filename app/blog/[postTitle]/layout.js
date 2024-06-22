import HeaderMinimal from '@/app/components/HeaderMinimal';
import postsData from './posts.json';
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
      <body>
        <HeaderMinimal />
        {children}
      </body>
    </html>
  );
}

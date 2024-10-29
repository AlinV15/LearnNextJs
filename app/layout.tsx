import '@/app/ui/global.css';
import { aladin } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${aladin.className} antialiased`}>{children}</body>
    </html>
  );
}

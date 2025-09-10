import "./globals.css";

export const metadata = {
  title: "My Aryavarta",
  description: "Next.js version",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

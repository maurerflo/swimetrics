import '@swimetrics/utils/global.css';

export const metadata = {
  title: 'Welcome to video-analyzer',
  description: 'Generated by create-nx-workspace',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}

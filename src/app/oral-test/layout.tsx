// src/app/oral-test/layout.tsx
import { Metadata } from 'next';
import ClientOralTestLayout from './ClientOralTestLayout';

export const metadata: Metadata = {
  title: '口試系統 - 豪神教師管理系統',
  description: '口試題目管理與紀錄',
};

export default function OralTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientOralTestLayout>{children}</ClientOralTestLayout>;
}
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hire Skill Gap Analyzer – Spot Missing Skills Instantly",
  description: "AI-powered skill gap analysis for HR managers and technical recruiters. Compare resumes against job requirements automatically."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="19e50d52-ca85-41a4-b343-fbdd662d2b8d"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}

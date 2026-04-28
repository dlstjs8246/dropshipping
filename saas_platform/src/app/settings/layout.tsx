import Link from "next/link";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tabs = [
    { href: "/settings/account", label: "Account" },
    { href: "/settings/api-keys", label: "API Keys" },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-1 text-2xl font-bold tracking-tight">Settings</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        계정과 API 키를 관리합니다.
      </p>

      <nav className="mb-8 flex gap-1 border-b" aria-label="Settings tabs">
        {tabs.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="rounded-t-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground aria-[current=page]:border-b-2 aria-[current=page]:border-primary aria-[current=page]:text-foreground"
          >
            {label}
          </Link>
        ))}
      </nav>

      {children}
    </div>
  );
}

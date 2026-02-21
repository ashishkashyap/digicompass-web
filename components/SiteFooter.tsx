import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-background mt-auto" role="contentinfo">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-10">
        <nav className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground mb-4" aria-label="Footer">
          <Link href="#" className="hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">
            Privacy
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">
            Contact
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">
            Updates
          </Link>
        </nav>
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
          Pre-launch site — features and availability may change during beta.
        </p>
      </div>
    </footer>
  );
}

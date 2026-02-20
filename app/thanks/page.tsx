import Link from "next/link";

type Props = {
  searchParams: Promise<{ email?: string }> | { email?: string };
};

export default async function ThanksPage({ searchParams }: Props) {
  const params = await Promise.resolve(searchParams);
  const emailParam = params?.email;
  let email: string | null = null;
  if (typeof emailParam === "string" && emailParam.trim() !== "") {
    try {
      email = decodeURIComponent(emailParam.trim());
    } catch {
      email = emailParam.trim();
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center flex-1 py-10 sm:py-14">
      <div className="max-w-md text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-3 prose-heading">
          You&apos;re on the list.
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          We&apos;ll email you when early access opens. First month free for early families.
        </p>
        {email && (
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Confirmation sent to: <span className="text-foreground font-medium">{email}</span>
          </p>
        )}
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-accent text-white px-5 py-2.5 text-sm font-medium hover:bg-accent/90 active:bg-accent/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Back to DigiCompass
        </Link>
      </div>
    </main>
  );
}

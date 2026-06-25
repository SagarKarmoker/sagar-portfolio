export default function KeystaticDisabled() {
  return (
    <div className="min-h-screen flex items-center justify-center text-muted-foreground font-mono text-sm">
      CMS not available — set KEYSTATIC_GITHUB_CLIENT_ID, KEYSTATIC_GITHUB_CLIENT_SECRET, and KEYSTATIC_SECRET env vars.
    </div>
  )
}

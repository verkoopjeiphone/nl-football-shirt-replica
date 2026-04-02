const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-10 px-4">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-sm font-semibold tracking-tight">
          voetbalshirts<span className="text-primary">.nl</span>
        </p>
        <p className="text-[11px] text-muted-foreground">
          © 2026 VoetbalshirtsNL — Geen officieel Nike- of KNVB-product.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

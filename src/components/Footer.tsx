const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-sm tracking-wider">
          VOETBALSHIRTS<span className="text-primary">NL</span>
        </p>
        <p className="text-xs text-muted-foreground">
          © 2026 VoetbalshirtsNL — Geen officieel Nike- of KNVB-product.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

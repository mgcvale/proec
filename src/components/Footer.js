export default function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-fg-muted">&copy; 2024 PROEC. Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-4">
            <a href="/about" className="text-fg-muted hover:text-fg">Sobre</a>
            <a href="/contact" className="text-fg-muted hover:text-fg">Contato</a>
            <a href="/privacy" className="text-fg-muted hover:text-fg">Privacidade</a>
            <a href="/terms" className="text-fg-muted hover:text-fg">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
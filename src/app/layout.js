import './globals.css';

export const metadata = {
  title: "Lotus",
  description: "**Lotus** é um projeto de frontend que coleta e exibe dados de um **Arduino** conectado a um **biodigestor**, oferecendo uma interface simples e intuitiva para monitoramento e controle dos parâmetros do processo de biodigestão.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

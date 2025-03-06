import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <div className="transition-colors duration-200 dark:bg-neutral-900">
      <Header />
      <Component />
      <Footer />
    </div>
  );
}

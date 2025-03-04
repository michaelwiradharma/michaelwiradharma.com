import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="container mx-auto">
      <Header />
      <Component />
      <div style="position: fixed; bottom: 0; width: 100%">
        <Footer />
      </div>
    </div>
  );
}

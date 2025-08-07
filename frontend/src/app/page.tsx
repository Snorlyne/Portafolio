import Header from "@/core/components/layout/header";
import LocaleSwitcher from "@/core/components/localeSwitcher";
import Hero from "@/core/components/layout/hero";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <LocaleSwitcher />
        <Hero />
      </main>
    </>
  );
}

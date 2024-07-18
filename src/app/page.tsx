import { Articles, HeroSection } from "./components/home";


export default function Home() {

  return (
    <div>
      {/* Use the fetched data here */}
      <HeroSection />
      <Articles />
    </div>
  );
}

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <div className="flex flex-col">
      <Header/>
      <Main/>
      <Footer></Footer>
    </div>
    </>
  );
}

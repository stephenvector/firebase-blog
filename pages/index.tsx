import Posts from "../components/Posts";
import SiteTitle from "../components/SiteTitle";

export default function HomePage(props) {
  console.log(props);
  return (
    <div>
      <header>
        <SiteTitle siteTitle="stephen" />
      </header>
      <section>
        <Posts />
      </section>
      <footer></footer>
    </div>
  );
}

import FooterText from "~/components/FooterText";
import Links from "~/components/Links";

export default function Home() {
  return (
    <main class="bg-gradient">
      <div class="w-full h-auto md:h-auto xl:h-auto 2xl:h-auto full:h-auto p-5">
          <figure>
            <img src="https://res.cloudinary.com/dynrld3nm/image/upload/w_175,q_50/v1665681568/tree/thumb.webp" class="drop-shadow-xl rounded-full w-[175px] ml-auto mr-auto" alt="GuntxJakka's portrait" />
          </figure>
          <h1 class="font-mali text-sky-900 text-center my-3 text-[2.9rem] drop-shadow-xl">GuntxJakka</h1>
          <Links />
          <FooterText />
      </div>
    </main>
  );
}

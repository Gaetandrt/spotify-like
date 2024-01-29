import HomeList from "@/components/homeList/HomeList";
import Modal from "@/components/modal/CreatePlaylist";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home() {



  return (
    <div className="flex min-h-screen flex-col gap-16">
      <div>
        <HomeList
          title="Dernières écoutes"
        >
        </HomeList>
      </div>
      {/* <div>
        <HomeList title="Playlists" description="Vos playlists">
        </HomeList>
      </div> */}
    </div>
  );
}

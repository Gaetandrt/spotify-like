import HomeList from "@/components/homeList/HomeList";

export default function Home() {
  return (
      <div className="flex flex-col gap-14">
        <HomeList title="Dernières écoutes"></HomeList>
        <HomeList title="Playlists"></HomeList>
        <HomeList title="Albums"></HomeList>
      </div>
  );
}

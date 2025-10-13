import NavBar from "@/components/navbar/NavBar";

export default async function Home() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      <div className="justify-center">
        <div className="text-5xl">Start the project @dev-o-los</div>
        <div>Wish you best of luck for the SAAS</div>
      </div>
    </div>
  );
}

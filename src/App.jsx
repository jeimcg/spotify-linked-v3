import MiniHeader from "./components/MiniHeader";
import SequenceBuilder from "./components/SequenceBuilder";
import SequenceList from "./components/SequenceList";

export default function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen p-4 font-sans">
      <MiniHeader />
      <main className="mt-4 space-y-6">
        <SequenceBuilder />
        <SequenceList />
      </main>
    </div>
  );
}

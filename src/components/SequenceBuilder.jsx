import { useState } from "react";
import TrackSearch from "./TrackSearch";
import TrackItem from "./TrackItem";

export default function SequenceBuilder() {
  const [sequenceName, setSequenceName] = useState("");
  const [tracks, setTracks] = useState([]);

  const addTrack = (track) => {
    setTracks([...tracks, track]);
  };

  const removeTrack = (id) => {
    setTracks(tracks.filter((t) => t.id !== id));
  };

  const saveSequence = () => {
    if (!sequenceName.trim()) return alert("Name your sequence!");
    console.log("Saving sequence:", sequenceName, tracks);
    // Later: Send to Firebase or backend
    setSequenceName("");
    setTracks([]);
  };

  return (
    <section className="bg-gray-900 p-4 rounded">
      <h2 className="text-lg font-semibold mb-2">Create a New Sequence</h2>
      <input
        type="text"
        placeholder="Sequence name..."
        className="w-full mb-2 p-2 rounded bg-gray-800 border border-gray-600 text-white"
        value={sequenceName}
        onChange={(e) => setSequenceName(e.target.value)}
      />
      <TrackSearch onSelectTrack={addTrack} />
      <div>
        {tracks.map((track) => (
          <TrackItem key={track.id} track={track} onRemove={removeTrack} />
        ))}
      </div>
      <button
        onClick={saveSequence}
        className="mt-4 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
      >
        Save Sequence
      </button>
    </section>
  );
}

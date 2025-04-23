export default function TrackSearch({ onSelectTrack }) {
    return (
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for a track..."
          className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white"
          onChange={(e) => {
            // Later: Call Spotify API here
            console.log("Search:", e.target.value);
          }}
        />
        {/* Mocked Result */}
        <button
          onClick={() => onSelectTrack({ id: "123", name: "Mock Song", artist: "Artist" })}
          className="mt-2 block text-left w-full bg-gray-700 p-2 rounded hover:bg-gray-600"
        >
          🎧 Mock Song — Artist
        </button>
      </div>
    );
  }
  
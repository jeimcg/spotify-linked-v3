export default function TrackItem({ track, onRemove }) {
    return (
      <div className="flex justify-between items-center bg-gray-800 p-2 rounded mb-2">
        <div>
          <div className="font-medium">{track.name}</div>
          <div className="text-sm text-gray-400">{track.artist}</div>
        </div>
        <button onClick={() => onRemove(track.id)} className="text-red-400 hover:text-red-200">
          ✖
        </button>
      </div>
    );
  }
  
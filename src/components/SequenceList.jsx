export default function SequenceList() {
    // Later: Replace with real sequence list
    const mockSequences = [
      { name: "Morning Vibes", tracks: 3 },
      { name: "Workout Set", tracks: 5 },
    ];
  
    return (
      <section className="bg-gray-900 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Saved Sequences</h2>
        {mockSequences.map((seq, idx) => (
          <div key={idx} className="mb-2 p-2 bg-gray-800 rounded">
            <div className="font-medium">{seq.name}</div>
            <div className="text-sm text-gray-400">{seq.tracks} tracks</div>
          </div>
        ))}
      </section>
    );
  }
  
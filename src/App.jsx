import { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Statistics from './components/Statistics';
import EntryForm from './components/EntryForm';
import EntryList from './components/EntryList';

const vibeLabels = {
  loved: 'Loved it',
  okay: 'It was okay',
  dnf: 'DNF',
};

function App() {
  const [counts, setCounts] = useState({
    loved: 0,
    okay: 0,
    dnf: 0,
  });
  const [selectedVibeKey, setSelectedVibeKey] = useState('');
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [entries, setEntries] = useState([]);
  const [selectedStars, setSelectedStars] = useState(0);

  const vibeButtons = [
    { key: 'loved', label: 'Loved it', tone: 'warm' },
    { key: 'okay', label: 'It was okay', tone: 'gold' },
    { key: 'dnf', label: 'DNF', tone: 'storm' },
  ];

  function incrementLoved() {
    setCounts((previousCounts) => ({
      ...previousCounts,
      loved: previousCounts.loved + 1,
    }));
    setSelectedVibeKey('loved');
  }

  function incrementOkay() {
    setCounts((previousCounts) => ({
      ...previousCounts,
      okay: previousCounts.okay + 1,
    }));
    setSelectedVibeKey('okay');
  }

  function incrementDnf() {
    setCounts((previousCounts) => ({
      ...previousCounts,
      dnf: previousCounts.dnf + 1,
    }));
    setSelectedVibeKey('dnf');
  }

  function handleVote(vibeKey) {
    if (vibeKey === 'loved') {
      incrementLoved();
      return;
    }

    if (vibeKey === 'okay') {
      incrementOkay();
      return;
    }

    incrementDnf();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedReview = review.trim();

    if (!trimmedTitle || !trimmedReview) {
      return;
    }

    if (!selectedVibeKey) {
      return;
    }

    setEntries((previousEntries) => [
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: trimmedTitle,
        review: trimmedReview,
        vibe: selectedVibeKey,
        vibeLabel: vibeLabels[selectedVibeKey],
        stars: selectedStars,
        createdAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      },
      ...previousEntries,
    ]);

    setTitle('');
    setReview('');
    setSelectedStars(0);
  }

  return (
    <main className="app-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />

      <div className="app-card">
        <Header />

        <section className="panel">
          <div className="panel-heading">
            <h2>Rate the finish</h2>
            <p className="helper-text">Click the vibe that matches how the book landed.</p>
          </div>
          <div className="button-row">
            {vibeButtons.map((button) => (
              <Button
                key={button.key}
                handleClick={() => handleVote(button.key)}
                text={button.label}
                tone={button.tone}
                active={selectedVibeKey === button.key}
              />
            ))}
          </div>
        </section>

        <div className="dashboard">
          <Statistics loved={counts.loved} okay={counts.okay} dnf={counts.dnf} />
          <EntryForm
            title={title}
            review={review}
            currentVibe={selectedVibeKey ? vibeLabels[selectedVibeKey] : 'Choose a vibe'}
            selectedStars={selectedStars}
            canSave={Boolean(selectedVibeKey)}
            onTitleChange={setTitle}
            onReviewChange={setReview}
            onStarSelect={setSelectedStars}
            onSubmit={handleSubmit}
          />
        </div>

        <EntryList entries={entries} />
      </div>
    </main>
  );
}

export default App;

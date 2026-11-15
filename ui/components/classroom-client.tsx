'use client';

import { useState } from 'react';
import { Whiteboard } from './whiteboard';

const initialMessages = [
  { speaker: 'Teacher', text: 'Today we are exploring quadratic equations.', origin: 'voice' },
  { speaker: 'Student (Mia)', text: 'How is a quadratic different from a linear equation?', origin: 'student' },
];

export function ClassroomClient() {
  const [mode, setMode] = useState<'voice' | 'text'>('voice');
  const [recording, setRecording] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [questionWaiting, setQuestionWaiting] = useState(true);

  const submit = () => {
    if (!input.trim()) return;
    setMessages((items) => [...items, { speaker: 'Teacher', text: input.trim(), origin: 'text' }]);
    setInput('');
  };

  const acceptQuestion = () => {
    setMessages((items) => [...items, { speaker: 'Student (Noah)', text: 'Can you show us what happens when a equals zero?', origin: 'student' }]);
    setQuestionWaiting(false);
  };

  const endClass = () => {
    if (!window.confirm('End this class? The current session will be saved.')) return;
    setRecording(false); setMessages(initialMessages); setQuestionWaiting(true);
  };

  return (
    <div className="classroom-page">
      <div className="scene">
        <div className="sun-window"><span>☁</span><span>☀</span></div>
        <Whiteboard />
        <div className="teacher-desk">▰ <span>▱▱</span></div>
        <div className="students" aria-label="Four AI students">
          {['Mia', 'Noah', 'Ava', 'Leo'].map((name, index) => (
            <button key={name} className={`student s${index + 1}`} onClick={questionWaiting && index === 1 ? acceptQuestion : undefined} aria-label={`${name}, ${questionWaiting && index === 1 ? 'hand raised' : 'listening'}`}>
              {questionWaiting && index === 1 && <span className="hand">✋</span>}<span className="head">{index % 2 ? '👦🏻' : '👧🏻'}</span><span className="desk" />
            </button>
          ))}
        </div>
      </div>
      <aside className="class-sidebar">
        <section className="teaching card">
          <h2>Teaching Mode</h2>
          <div className="mode-switch">
            <button className={mode === 'voice' ? 'active' : ''} onClick={() => setMode('voice')}>♩ Voice</button>
            <button className={mode === 'text' ? 'active' : ''} onClick={() => setMode('text')}>Aa Text</button>
          </div>
          {mode === 'voice' ? (
            <div className="voice-control"><button className={recording ? 'mic recording' : 'mic'} onClick={() => setRecording((value) => !value)}>●</button><strong>{recording ? 'Listening… tap to stop' : 'Tap to start teaching'}</strong></div>
          ) : (
            <div className="text-entry"><textarea value={input} onChange={(event) => setInput(event.target.value)} placeholder="Explain the idea…" /><button className="primary" onClick={submit}>Send</button></div>
          )}
          {questionWaiting && <button className="question-alert" onClick={acceptQuestion}>✋ Noah has a question</button>}
          <button className="danger end" onClick={endClass}>■ End Class</button>
        </section>
        <section className="discussion card">
          <h2>◌ Discussion</h2>
          <div className="message-list">
            {messages.map((message, index) => <article key={`${message.speaker}-${index}`}><span className={message.origin === 'student' ? 'bubble student-bubble' : 'bubble'}>{message.speaker[0]}</span><div><strong>{message.speaker} {message.origin === 'voice' && '🎙'}</strong><p>{message.text}</p></div></article>)}
          </div>
        </section>
      </aside>
    </div>
  );
}

'use client';

import { useEffect, useMemo, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';

const seedNotes = [
  { id: 'quadratic', title: 'Quadratic Equations', date: 'Today, 2:20 PM' },
  { id: 'systems', title: 'System of Equations', date: 'Yesterday, 4:05 PM' },
  { id: 'inequalities', title: 'Inequalities', date: 'Mar 12, 2025' },
  { id: 'functions', title: 'Functions', date: 'Mar 10, 2025' },
];

const initialContent = `<h1>Quadratic Equations</h1><h2>1. Overview</h2><p><strong>ax² + bx + c = 0</strong> &nbsp; (a ≠ 0)</p><ul><li>a, b, c are real numbers.</li><li>a ≠ 0.</li></ul><h2>2. Quadratic Formula</h2><p>x = (−b ± √(b² − 4ac)) / 2a</p><h2>3. Example</h2><p>Solve x² − 5x + 6 = 0.</p>`;

export function LessonEditor() {
  const [notes, setNotes] = useState(seedNotes);
  const [selected, setSelected] = useState('quadratic');
  const [query, setQuery] = useState('');
  const [saveState, setSaveState] = useState<'Saved' | 'Saving…'>('Saved');
  const editor = useEditor({ extensions: [StarterKit, Image], content: initialContent, immediatelyRender: false, onUpdate: () => setSaveState('Saving…') });

  useEffect(() => {
    if (saveState !== 'Saving…') return;
    const timeout = window.setTimeout(() => setSaveState('Saved'), 700);
    return () => window.clearTimeout(timeout);
  }, [saveState]);

  const filtered = useMemo(() => notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())), [notes, query]);
  const addNote = () => {
    const id = crypto.randomUUID(); setNotes((items) => [{ id, title: 'Untitled Note', date: 'Just now' }, ...items]); setSelected(id); editor?.commands.setContent('<h1>Untitled Note</h1><p>Start writing…</p>');
  };

  return (
    <div className="lesson-page">
      <aside className="notes-sidebar">
        <button className="primary new-note" onClick={addNote}>＋ New Note</button>
        <label className="search">⌕<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search notes…" /></label>
        <div className="notes-heading"><strong>All Notes</strong><span>{filtered.length}</span></div>
        <div className="notes-list">{filtered.map((note) => <button key={note.id} className={selected === note.id ? 'note active' : 'note'} onClick={() => setSelected(note.id)}><span>▤</span><span><strong>{note.title}</strong><small>{note.date}</small></span></button>)}</div>
      </aside>
      <section className="editor card">
        <header className="editor-heading"><div><h1>▤ {notes.find((note) => note.id === selected)?.title ?? 'Note'}</h1><span>◷ Last edited: Today, 2:20 PM · {saveState}</span></div><button aria-label="More note actions">•••</button></header>
        <div className="format-bar" role="toolbar" aria-label="Text formatting">
          <button onClick={() => editor?.chain().focus().undo().run()}>↶</button><button onClick={() => editor?.chain().focus().redo().run()}>↷</button>
          <button onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}>Heading</button>
          <button className={editor?.isActive('bold') ? 'active' : ''} onClick={() => editor?.chain().focus().toggleBold().run()}><b>B</b></button>
          <button className={editor?.isActive('italic') ? 'active' : ''} onClick={() => editor?.chain().focus().toggleItalic().run()}><i>I</i></button>
          <button onClick={() => editor?.chain().focus().toggleBulletList().run()}>☷ List</button><button aria-label="Insert image">▧ Image</button>
        </div>
        <EditorContent editor={editor} className="editor-content" />
      </section>
    </div>
  );
}

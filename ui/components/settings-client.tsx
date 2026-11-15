'use client';

import { useState } from 'react';
import type { Language } from '@teachback/contracts';

export function SettingsClient() {
  const [displayLanguage, setDisplayLanguage] = useState<Language>('en');
  const [teachingLanguage, setTeachingLanguage] = useState<Language>('en');
  return (
    <div className="settings-page page">
      <h1>Settings</h1>
      <section className="settings-section card"><h2>♙ Account</h2><div className="account-row"><div className="profile-avatar">MN</div><div><strong>Minh Nguyen</strong><p>minhnguyen123@example.com</p></div><button className="secondary" disabled title="Coming soon">✎ Edit Profile · Coming soon</button></div></section>
      <section className="settings-section card"><h2>☷ Preferences</h2><div className="setting-row"><label htmlFor="display-language">◎ Display Language</label><select id="display-language" value={displayLanguage} onChange={(event) => setDisplayLanguage(event.target.value as Language)}><option value="en">English</option><option value="vi">Tiếng Việt</option></select></div><div className="setting-row"><span>☼ Theme</span><div className="theme-options"><button className="active">☀ Light</button><button disabled title="Coming soon">☾ Dark</button><button disabled title="Coming soon">▣ System</button></div></div></section>
      <section className="settings-section card"><h2>▣ Teaching</h2><div className="setting-row"><label htmlFor="teaching-language">◇ Teaching Language</label><select id="teaching-language" value={teachingLanguage} onChange={(event) => setTeachingLanguage(event.target.value as Language)}><option value="en">English</option><option value="vi">Tiếng Việt</option></select></div></section>
      <section className="settings-section card"><h2>ⓘ About</h2><div className="setting-row"><span>Version</span><strong>TeachBack AI (Beta) v0.1.0</strong></div></section>
    </div>
  );
}

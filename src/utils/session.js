// Persists just the most recent in-progress/recent download so a refresh
// or accidental tab close doesn't lose it. Stored in the browser's own
// localStorage — nothing sent anywhere, purely local to this device.

const STORAGE_KEY = 'clipflow-session';

export function saveSession(session) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } catch {
    // Storage can fail (private browsing, full storage, etc.) — not worth
    // breaking the app over, the user just loses persistence silently.
  }
}

export function loadSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearSession() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore — nothing meaningful to do if this fails.
  }
}
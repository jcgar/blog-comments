import provideMap from 'provide-map';
import { PUSH_WINDOW_PATH, REPLACE_WINDOW_PATH } from 'provide-page';

const entries = provideMap('entries', 'entry', 'entryKey');

const { SET_ENTRY, UPDATE_ENTRY, DELETE_ENTRY } = entries;
const SELECT_ENTRY = 'SELECT_ENTRY';
const CREATE_ENTRY = 'CREATE_ENTRY';
const EDIT_ENTRY = 'EDIT_ENTRY';

function normalizeEntry(entry) {
  const { contents = '' } = entry;

  const name = entry.name || contents
    .split('\n')
    .shift()
    .replace(/^#/, '')
    .trim();

  const href = entry.href || name
    .toLowerCase()
    .replace(/[^a-z0-9 ]/gi, '')
    .trim()
    .replace(/ /gi, '-');

  return { ...entry, name, href };
}

Object.assign(entries.actions, {
  selectEntry(entryKey) {
    return { type: SELECT_ENTRY, entryKey };
  },

  createEntry() {
    return { type: CREATE_ENTRY };
  },

  editEntry() {
    return { type: EDIT_ENTRY };
  },

  setEntry(entryKey, entry) {
    entry = normalizeEntry(entry);
    entryKey = entryKey || entry.href;
    return { type: SET_ENTRY, entryKey, entry };
  },

  updateEntry(entryKey, entry) {
    entry = normalizeEntry(entry);
    entryKey = entryKey || entry.href;
    return { type: UPDATE_ENTRY, entryKey, entry };
  }
});

Object.assign(entries.reducers, {
  selectedEntryKey(state = null, action) {
    switch (action.type) {
      case CREATE_ENTRY:
      case DELETE_ENTRY:
        return null;

      case SELECT_ENTRY:
        return action.entryKey || null;

      case PUSH_WINDOW_PATH:
      case REPLACE_WINDOW_PATH:
        return action.windowPathSplit[0] || null;

      default:
        return state;
    }
  },

  creatingEntry(state = 0, action) {
    switch (action.type) {
      case CREATE_ENTRY:
        return state || new Date().getTime();

      case PUSH_WINDOW_PATH:
      case REPLACE_WINDOW_PATH:
        return action.windowPathSplit[0] === 'create'
          ? state || new Date().getTime()
          : 0;

      default:
        return state;
    }
  },

  editingEntry(state = false, action) {
    switch (action.type) {
      case EDIT_ENTRY:
        return true;

      case PUSH_WINDOW_PATH:
      case REPLACE_WINDOW_PATH:
        return action.windowPathSplit[1] === 'edit';

      default:
        return state;
    }
  },

  deletedEntry(state = false, action) {
    switch (action.type) {
      case DELETE_ENTRY:
        return true;

      default:
        return false;
    }
  }
});

const entriesMerge = entries.merge;
entries.merge = function merge(stateProps, dispatchProps, parentProps) {
  const merged = entriesMerge(stateProps, dispatchProps, parentProps);
  const { entries, selectedEntryKey } = merged;

  return {
    ...merged,
    selectedEntry: entries && entries.get(selectedEntryKey) || null,
    isSelectedEntry: merged.entryKey === selectedEntryKey
  };
}

export default entries;

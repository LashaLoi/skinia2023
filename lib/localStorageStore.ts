import { useEffect, useSyncExternalStore } from "react";

type LSValue = string | null;
type Listener = (lsValue: LSValue) => void;

let lsValue: LSValue = null;
let listeners: Array<Listener> = [];

const emitChange = () => {
  for (let listener of listeners) {
    listener(lsValue);
  }
};

const localStorageStore = {
  setValue(value: LSValue) {
    lsValue = value;

    if (value) {
      localStorage.setItem("registered", value);
    } else {
      localStorage.removeItem("registered");
    }

    emitChange();
  },
  getSnapshot() {
    return lsValue;
  },
  subscribe(listener: (lsValue: LSValue) => void) {
    listeners = [...listeners, listener];

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
};

export const useLocalStorageStore = () => {
  useEffect(() => {
    const lsValue = localStorage.getItem("registered");

    localStorageStore.setValue(lsValue);
  }, []);

  return [
    useSyncExternalStore(
      localStorageStore.subscribe,
      localStorageStore.getSnapshot,
      localStorageStore.getSnapshot
    ),
    localStorageStore.setValue,
  ] as const;
};

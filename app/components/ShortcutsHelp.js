"use client";
import { useState } from 'react';
import { FiCommand } from 'react-icons/fi';

export default function ShortcutsHelp() {
  const [isOpen, setIsOpen] = useState(false);

  const shortcuts = [
    { key: 'h', description: 'Go to Home' },
    { key: 'b', description: 'Go to Blog' },
    { key: 't', description: 'Toggle theme' },
    { key: 'k', description: 'Open search' },
    { key: '←', description: 'Previous post' },
    { key: '→', description: 'Next post' },
    { key: '?', description: 'Show this help' }
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800
          hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        aria-label="Keyboard shortcuts"
      >
        <FiCommand className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-neutral-800 rounded-xl max-w-md w-full p-6">
            <h2 className="text-lg font-semibold mb-4">Keyboard Shortcuts</h2>
            <div className="space-y-2">
              {shortcuts.map(({ key, description }) => (
                <div key={key} className="flex justify-between items-center">
                  <span>{description}</span>
                  <kbd className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded">
                    {key}
                  </kbd>
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full py-2 bg-neutral-100 dark:bg-neutral-700 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
} 
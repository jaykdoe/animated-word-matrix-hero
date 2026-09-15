'use client';

import { ArrowRight } from 'lucide-react';
import { BACKGROUND_OPTIONS } from '@/components/bg/background';
import { Button } from '@/components/ui/button';
import Playground from '@/components/bg/playground';
import { useState } from 'react';
import { Toaster } from 'sonner';

export default function BGPage() {
  const [preview, setPreview] = useState<null | React.ReactNode>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const resetBg = () => {
    setPreview(null);
    setTheme('light');
  };

  return (
    <>
      <Toaster />
      <div className={`${theme}`}>
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          {preview ? preview : null}
        </div>
        <div className="relative w-full h-screen px-6 mx-auto max-w-7xl md:px-8 lg:px-12">
          <header className="flex items-center justify-between py-8">
            <div />
            <nav className="flex gap-6">
              <a
                href="https://twitter.com/Ibelick"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <svg className="w-6 h-6 transition-colors text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com/ibelick/background-snippets"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <svg className="w-6 h-6 transition-colors text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </nav>
          </header>
          <div className="pt-8">
            <div className="relative flex flex-col items-center max-w-2xl mx-auto">
              <div className="flex mb-8">
                <a
                  href="https://github.com/ibelick/background-snippets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                    <div className="inline-flex justify-center w-full h-full px-3 py-1 text-xs font-medium leading-5 bg-white rounded-full cursor-pointer text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                      New snippets ⚡️
                      <span className="inline-flex items-center pl-2 text-black dark:text-white">
                        Read more{' '}
                        <ArrowRight
                          className="pl-0.5 text-black dark:text-white"
                          size={16}
                        />
                      </span>
                    </div>
                  </span>
                </a>
              </div>
              <h2 className="text-3xl font-medium text-center text-gray-900 dark:text-gray-50 sm:text-6xl">
                Collection of modern,{' '}
                <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                  background snippets
                </span>
              </h2>
              <p className="mt-6 text-lg leading-6 text-center text-gray-600 dark:text-gray-200">
                Ready-to-use, simply copy and paste into your next project. All
                snippets crafted with Tailwind CSS and{' '}
                <span className="cursor-wait opacity-70">Vanilla CSS</span> for
                easy integration.
              </p>
              <div className="flex gap-4 mt-10">
                <a
                  href="https://github.com/ibelick/background-snippets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Button>
                    Go to GitHub <ArrowRight className="pl-0.5" size={16} />
                  </Button>{' '}
                </a>
                <Button variant="secondary" onClick={resetBg}>
                  Reset background
                </Button>
              </div>
            </div>
          </div>
          <div className="px-4 pb-20 overflow-hidden pt-52 md:px-10">
            <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
              {BACKGROUND_OPTIONS.map((background, index) => {
                return (
                  <Playground
                    key={index}
                    setPreview={setPreview}
                    theme={background.theme}
                    setTheme={setTheme}
                  >
                    {background.component}
                  </Playground>
                );
              })}
            </div>
            <div className="inline-flex max-w-2xl p-2 text-sm bg-white border rounded-md border-neutral-200 text-neutral-900 dark:border-neutral-900 dark:bg-black dark:text-neutral-200">
              {`These backgrounds are made for a full page background. The preview
              can be different from the actual result. Click on preview to test
              it. And don't forget to tweak it to your needs.`}
            </div>
          </div>
          <footer>
            <div className="flex items-center justify-center py-8">
              <span className="text-sm text-neutral-800 dark:text-neutral-200">
                Made by
                <a
                  href="https://twitter.com/Ibelick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-neutral-950 dark:text-neutral-100"
                >
                  @Ibelick
                </a>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

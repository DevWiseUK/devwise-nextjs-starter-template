'use client';

import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Badge,
  Tooltip,
  formatCurrency,
} from '@devwise/core';
import Link from 'next/link';

import { siteConfig } from '@/lib/config';

export default function HomePage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-14 items-center'>
          <div className='mr-4 flex'>
            <Link className='mr-6 flex items-center space-x-2' href='/'>
              <span className='font-bold text-xl'>{siteConfig.name}</span>
            </Link>
          </div>
          <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
            <nav className='flex items-center space-x-6'>
              <Link
                href={siteConfig.links.github}
                target='_blank'
                rel='noreferrer'
                className='flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground'
              >
                <span>⚡</span>
                <span>GitHub</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='container grid place-items-center gap-8 py-20 md:py-32'>
          <div className='mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center'>
            <Badge variant='outline' className='mb-4'>
              Built with DevWise Core
            </Badge>
            <h1 className='text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]'>
              {siteConfig.name}
            </h1>
            <p className='max-w-[750px] text-lg text-muted-foreground sm:text-xl'>
              {siteConfig.description}
            </p>
            <div className='flex gap-4 mt-6'>
              <Button size='lg'>Get Started →</Button>
              <Link href={siteConfig.links.github} target='_blank' rel='noreferrer'>
                <Button variant='outline' size='lg'>
                  ⚡ View on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='container py-16'>
          <div className='mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center'>
            <h2 className='text-3xl font-bold leading-tight tracking-tighter md:text-4xl'>
              DevWise Core Components Demo
            </h2>
            <p className='max-w-[700px] text-lg text-muted-foreground'>
              This template showcases components from the DevWise Core library
            </p>
          </div>

          <div className='mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
            {/* Button Examples */}
            <Card className='p-6'>
              <CardHeader>
                <h3 className='text-lg font-semibold'>Button Component</h3>
                <p className='text-sm text-muted-foreground'>
                  Versatile button with multiple variants
                </p>
              </CardHeader>
              <div className='space-y-3'>
                <div className='flex gap-2'>
                  <Button variant='primary' size='sm'>
                    Primary
                  </Button>
                  <Button variant='secondary' size='sm'>
                    Secondary
                  </Button>
                </div>
                <div className='flex gap-2'>
                  <Button variant='outline' size='sm'>
                    Outline
                  </Button>
                  <Button variant='ghost' size='sm'>
                    Ghost
                  </Button>
                </div>
              </div>
            </Card>

            {/* Badge Examples */}
            <Card className='p-6'>
              <CardHeader>
                <h3 className='text-lg font-semibold'>Badge Component</h3>
                <p className='text-sm text-muted-foreground'>Status and label indicators</p>
              </CardHeader>
              <div className='space-y-3'>
                <div className='flex gap-2'>
                  <Badge variant='success'>New</Badge>
                  <Badge variant='warning'>Beta</Badge>
                  <Badge variant='error'>Deprecated</Badge>
                </div>
                <div className='flex gap-2'>
                  <Badge variant='outline'>v1.0.0</Badge>
                  <Badge variant='secondary'>Feature</Badge>
                </div>
              </div>
            </Card>

            {/* Tooltip Example */}
            <Card className='p-6'>
              <CardHeader>
                <h3 className='text-lg font-semibold'>Tooltip Component</h3>
                <p className='text-sm text-muted-foreground'>Contextual information display</p>
              </CardHeader>
              <div className='space-y-3'>
                <Tooltip content='This is a helpful tooltip!'>
                  <Button variant='outline'>Hover me</Button>
                </Tooltip>
                <Tooltip content='Click to see more options' trigger='click' position='bottom'>
                  <Button variant='secondary'>Click me</Button>
                </Tooltip>
              </div>
            </Card>

            {/* Utility Functions */}
            <Card className='p-6'>
              <CardHeader>
                <h3 className='text-lg font-semibold'>Utility Functions</h3>
                <p className='text-sm text-muted-foreground'>Helpful formatting utilities</p>
              </CardHeader>
              <div className='space-y-2 text-sm'>
                <div>Price: {formatCurrency(29.99)}</div>
                <div>Sale Price: {formatCurrency(19.99)}</div>
                <div>Total: {formatCurrency(49.98)}</div>
              </div>
            </Card>

            {/* More Components */}
            <Card className='p-6'>
              <CardHeader>
                <h3 className='text-lg font-semibold'>More Components</h3>
                <p className='text-sm text-muted-foreground'>Explore the full library</p>
              </CardHeader>
              <CardFooter className='p-0'>
                <Link href={siteConfig.links.docs} target='_blank' rel='noreferrer'>
                  <Button variant='outline' size='sm'>
                    ↗ View Docs
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Getting Started */}
            <Card className='p-6'>
              <CardHeader>
                <h3 className='text-lg font-semibold'>Get Started</h3>
                <p className='text-sm text-muted-foreground'>Start building with DevWise Core</p>
              </CardHeader>
              <CardFooter className='p-0'>
                <Button size='sm'>Learn More →</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='border-t py-6 md:py-0'>
        <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
          <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
            <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
              Built by{' '}
              <Link
                href='https://devwise.uk'
                target='_blank'
                rel='noreferrer'
                className='font-medium underline underline-offset-4'
              >
                DevWise
              </Link>
              . The source code is available on{' '}
              <Link
                href={siteConfig.links.github}
                target='_blank'
                rel='noreferrer'
                className='font-medium underline underline-offset-4'
              >
                GitHub
              </Link>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

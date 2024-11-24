import React from 'react';

export default function HeroLead() {
  return (
    <div className='space-y-4 sm:space-y-6'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight'>
        Shorten Your Loooong Links{' '}
        <span className='inline-block animate-bounce'>😎</span>
      </h1>
      <p className='text-base sm:text-lg text-muted-foreground max-w-lg mx-auto'>
        Linkly is an efficient and easy-to-use URL shortening service that
        streamlines your online experience.
      </p>
    </div>
  );
}

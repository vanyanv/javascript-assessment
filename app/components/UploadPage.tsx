'use client';

import type { PutBlobResult } from '@vercel/blob';
import React, { useState, useRef } from 'react';
import { Button, Heading, TextField } from '@radix-ui/themes';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);

  console.log(file);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file as Blob);

    const response = await fetch('/api/file', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Heading>Upload a file</Heading>
      <input
        name='file'
        onChange={(e) => setFile(e.target.files?.item(0) || null)}
        type='file'
        required
      />
      <Button type='submit'>Upload</Button>
    </form>
  );
}

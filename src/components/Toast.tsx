'use client';

import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Toast({
  alert,
  successMessage
}: {
  alert: string | null;
  successMessage?: string | null;
}) {
  useEffect(() => {
    if (alert) {
      toast.error(alert);
    }
    if (successMessage) {
      toast.success(successMessage);
    }
  }, []);
  return (
    <div>
      <Toaster />
    </div>
  );
}

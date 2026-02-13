'use client';

import { useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { login } from '@/app/login/actions';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

const initialState = {
    success: false,
    error: '',
};

export function LoginForm() {
    const [state, formAction, isPending] = useActionState(login, initialState);

    return (
        <div className="space-y-4">
            <form action={formAction} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="username">Benutzername</Label>
                    <Input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="admin"
                        required
                        autoComplete="username"
                        autoFocus
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Passwort</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        autoComplete="current-password"
                    />
                </div>

                {state?.error && (
                    <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
                        {state.error}
                    </div>
                )}

                <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Anmelden...
                        </>
                    ) : (
                        'Anmelden'
                    )}
                </Button>
            </form>
            <div className="mt-4 text-center text-sm">
                <p className="text-muted-foreground">
                    Noch kein Konto?{' '}
                    <Link href="/register" className="text-primary hover:underline font-medium">
                        Jetzt registrieren
                    </Link>
                </p>
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground border-t pt-4">
                <p><strong>Standard Login:</strong> admin / admin123</p>
                <p className="text-xs mt-1">Bitte ändern Sie das Passwort nach dem ersten Login!</p>
            </div>
        </div>
    );
}

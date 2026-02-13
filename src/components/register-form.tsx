'use client';

import { useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { register } from '@/app/register/actions';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

const initialState = {
    success: false,
    error: '',
};

export function RegisterForm() {
    const [state, formAction, isPending] = useActionState(register, initialState);

    return (
        <>
            <form action={formAction} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="username">Benutzername</Label>
                    <Input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="benutzername"
                        required
                        autoComplete="username"
                        autoFocus
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">E-Mail</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email@beispiel.de"
                        required
                        autoComplete="email"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Ihr Name"
                        required
                        autoComplete="name"
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
                        autoComplete="new-password"
                        minLength={6}
                    />
                    <p className="text-xs text-muted-foreground">
                        Mindestens 6 Zeichen
                    </p>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Passwort bestätigen</Label>
                    <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        required
                        autoComplete="new-password"
                        minLength={6}
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
                            Registrieren...
                        </>
                    ) : (
                        'Registrieren'
                    )}
                </Button>
            </form>
            <div className="mt-4 text-center text-sm">
                <p className="text-muted-foreground">
                    Haben Sie bereits ein Konto?{' '}
                    <Link href="/login" className="text-primary hover:underline font-medium">
                        Jetzt anmelden
                    </Link>
                </p>
            </div>
        </>
    );
}

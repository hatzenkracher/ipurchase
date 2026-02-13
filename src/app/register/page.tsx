import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RegisterForm } from '@/components/register-form';
import Link from 'next/link';

export default async function RegisterPage() {
    // If already logged in, redirect to home
    const user = await getCurrentUser();
    if (user) {
        redirect('/');
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/50 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Konto erstellen</CardTitle>
                    <CardDescription className="text-center">
                        Erstellen Sie ein neues Konto für iPurchase Management
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <RegisterForm />
                </CardContent>
            </Card>
        </div>
    );
}

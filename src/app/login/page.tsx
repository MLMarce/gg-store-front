import { LoginForm } from "@/components/Login"

export default function Page() {
    return (
            <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 pt-20 md:pt-20">
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </div>
    )
}

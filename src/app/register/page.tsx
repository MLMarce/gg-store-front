import { RegisterForm } from "@/components/RegisterForm"

export default function Page() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <img src="https://mirasol-centre.com/nousite/wp-content/uploads/2017/05/20161221_164800.jpg" alt="background image" className="w-screen min-h-screen object-cover absolute top-0 left-0 -z-10" />

            <div className="w-full max-w-sm">
                <RegisterForm />
            </div>
        </div>
    )
}

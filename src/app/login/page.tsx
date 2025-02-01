import { LoginForm } from "@/components/Login"

export default function Page() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 ">
            <img src="https://png.pngtree.com/background/20211215/original/pngtree-mens-clothing-casual-summer-clothing-store-photography-map-with-map-picture-image_1485291.jpg" alt="background image" className="w-screen h-screen object-cover absolute top-0 left-0 -z-10" />
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </div>
    )
}

'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import Link from "next/link"

export function RegisterForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    })
    const [error, setError] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validación simple
        if (formData.password !== formData.confirmPassword) {
            setError("Las contraseñas no coinciden.")
            return
        }

        // Aquí podrías hacer la lógica para enviar los datos al servidor
        // Por ejemplo:
        // await axios.post('/api/register', formData)
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Crea una cuenta</CardTitle>
                    <CardDescription>
                        Crea tu cuenta rellenando los datos a continuación.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            {/* Nombre */}
                            <div className="grid gap-2">
                                <Label htmlFor="name">Nombre</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    placeholder="Carlos Garcia"
                                    onChange={handleChange}
                                    required
                                    minLength={3}
                                />
                            </div>

                            {/* Correo */}
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    placeholder="example@example.com"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Teléfono */}
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Teléfono</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    placeholder="0123456789"
                                    onChange={handleChange}
                                    required
                                    pattern="^[0-9]{10}$"
                                    title="El teléfono debe ser un número de 10 dígitos."
                                />
                            </div>

                            {/* Contraseña */}
                            <div className="grid gap-2">
                                <Label htmlFor="password">Contraseña</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$"
                                    title="La contraseña debe contener al menos una letra minúscula, una mayúscula, un número y un carácter especial."
                                />
                            </div>

                            {/* Confirmar Contraseña */}
                            <div className="grid gap-2">
                                <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>



                            {error && <p className="text-red-500 text-sm">{error}</p>}

                            <Button type="submit" className="w-full">
                                Registrarse
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            ¿Ya tienes una cuenta?{" "}
                            <Link href="/login" className="underline underline-offset-4">
                                Iniciar Sesión
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

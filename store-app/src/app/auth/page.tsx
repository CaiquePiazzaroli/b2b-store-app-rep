'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"


export default function users() {

    function enviar (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Enviou")
    }

    return (
        <div className="text-center">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-[20px]">Login</h1>
            <form onSubmit={enviar} method="post">
                <Label htmlFor="email" className="mb-2 mt-6">Email:</Label>
                <Input id="email" type="email" required></Input>
                <Label htmlFor="password" className="mb-2 mt-6">Senha:</Label>
                <Input id="password" type="password" required></Input>
                <Button className="ml-4 mt-4" type="submit">Login</Button>
            </form>
        </div>
    );
}

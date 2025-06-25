export default function Footer() {
    return (
        <footer className="bg-blue-500 text-white py-6 mt-10">
            <div className="container mx-auto px-4 text-center">
                <h4 className="text-2xl font-bold mb-2">Eletronix</h4>
                <p className="text-sm">© {new Date().getFullYear()} Eletronix. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

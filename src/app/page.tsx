import Navbar from "@/component/Navbar"

export default function page() {
    return (
        <main>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen">
                <p>This is the main content area.</p>
            </div>
        </main>
    );
}

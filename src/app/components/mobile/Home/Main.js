import WhiteLogo from "@/app/components/reuse/logo/WhiteLogo";

export default function Main() {
    return (
        <div className="flex min-h-screen flex-col bg-mobile-landing bg-cover bg-center">
            <div className="p-5">
                <div>
                    <WhiteLogo />
                </div>

                <div className="absolute ml-3 bottom-[20%] text-white">
                    <div className="font-carot text-3xl md:text-4xl">
                        <h1>Exploring</h1>
                        <h2>Indonesia&apos;s</h2>
                        <h2>Traditional Paintings</h2>
                    </div>
                    <div>
                        <button className="font-museo font-[500] text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
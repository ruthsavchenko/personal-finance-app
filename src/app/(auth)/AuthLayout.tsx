import Image from "next/image";

interface AuthLayoutProps {
    title: string;
    children: React.ReactNode;
    bottomText?: React.ReactNode;
}

export function AuthLayout({ title, children, bottomText }: AuthLayoutProps) {
    return (
        <div className="min-h-screen flex bg-beige-100">
            <div className="hidden lg:flex flex-col justify-between p-250 w-[560px]">
                <div className="bg-white rounded-2xl overflow-hidden relative">
                    <div className="relative h-[calc(100vh-40px)] w-full">
                        <Image
                            src="/finance-login-image.png"
                            alt="Finance illustration"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="absolute inset-0 flex items-start justify-start p-500">
                        <Image alt="logo" src="/logo.png" width={121} height={22} />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-end flex-col p-500 gap-300">
                        <h3 className="text-preset-1 text-white self-start">
                            Keep track of your money <br /> and save for your future
                        </h3>

                        <p className="text-preset-4 text-white self-start">
                            Personal finance app puts you in control of your spending. Track transactions, set budgets,
                            and add to savings pots easily.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 items-center justify-center px-6 lg:p-400">
                <div className="w-full max-w-[560px] bg-white rounded-2xl p-400 space-y-400">
                    <h1 className="text-preset-1 text-gray-900">{title}</h1>
                    {children}
                    {bottomText && <p className="text-center text-preset-4 text-gray-500">{bottomText}</p>}
                </div>
            </div>
        </div>
    );
}

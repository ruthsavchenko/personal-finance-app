export default function Header({ title, actions }: { title: string; actions?: React.ReactNode }) {
    return (
        <header className="w-full h-14 flex items-center justify-between px-8">
            <h2 className="text-preset-1 text-grey-900">{title}</h2>
            <div className="flex items-center gap-4">{actions}</div>
        </header>
    );
}

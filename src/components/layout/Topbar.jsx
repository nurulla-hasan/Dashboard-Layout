import { Bell, Moon, Sun, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/theme/theme-provider";
import { Toggle } from "../ui/toggle";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Topbar = ({ onMenuClick }) => {
    const { setTheme, theme } = useTheme();
    return (
        <header className="fixed top-0 right-0 left-0 flex items-center justify-between p-4 h-20 bg-card text-card-foreground border-b border-border lg:justify-end">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
                <Menu />
            </Button>
            <div className="flex items-center space-x-5 pr-6">
                <Link to="notifications" className="relative cursor-pointer">
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <Bell />
                </Link>
                <Toggle
                    variant="outline"
                    className="group rounded-full"
                    pressed={theme === "dark"}
                    onPressedChange={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                    <Moon
                        size={16}
                        className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
                        aria-hidden="true"
                    />
                    <Sun
                        size={16}
                        className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
                        aria-hidden="true"
                    />
                </Toggle>

                <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                        {/* Replace with actual user image */}
                        <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                        <AvatarFallback>NH</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">Nurulla Hasan</span>
                </div>
            </div>
        </header>
    );
};

export default Topbar;

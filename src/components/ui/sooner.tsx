import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps as SonnerToasterProps } from "sonner";

// Extend the original props type from Sonner
interface ToasterProps extends Omit<SonnerToasterProps, "theme"> {
  // Theme is optional since we handle it internally with useTheme
  theme?: SonnerToasterProps["theme"];
}

const Toaster = ({ ...props }: ToasterProps) => {
  // Extract theme from useTheme hook with system as fallback
  const { theme = "system" } = useTheme();
  
  // Map the theme to valid sonner theme type
  const sonnerTheme = theme as SonnerToasterProps["theme"];

  return (
    <Sonner
      theme={sonnerTheme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
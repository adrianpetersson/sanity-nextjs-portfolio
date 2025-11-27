export const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center py-10 text-center text-black dark:text-white">
      <p className="text-muted-foreground text-sm">
        Designed and developed by Adrian Petersson {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export const Footer = () => {
  return (
    <footer className="text-black dark:text-white text-center flex items-center justify-center w-full py-10">
      <p className="text-sm text-muted-foreground">
        Designed and developed by Adrian Petersson {new Date().getFullYear()}
      </p>
    </footer>
  );
};

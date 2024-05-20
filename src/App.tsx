import { useRoutes } from "react-router-dom";
import router from "./routes";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function App() {
  const element = useRoutes(router);
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <NextUIProvider>{element}</NextUIProvider>
    </NextThemesProvider>
  );
}

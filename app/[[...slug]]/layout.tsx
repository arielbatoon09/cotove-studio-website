import { Button } from "@/components/ui/button"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <footer><Button>Test</Button></footer>
    </>
  )
}
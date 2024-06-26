import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

type LayoutProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

function Layout({ left, right }: LayoutProps) {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={25}>{left}</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>{right}</ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default Layout;

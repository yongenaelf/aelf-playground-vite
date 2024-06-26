import FileExplorer from "@/components/app/file-explorer";
import Menu from "@/components/app/menu";
import CodeEditor from "@/components/app/code-editor";
import Layout from "@/components/app/layout";

function App() {
  return (
    <>
      <Menu />
      <Layout left={<FileExplorer />} right={<CodeEditor />} />
    </>
  );
}

export default App;

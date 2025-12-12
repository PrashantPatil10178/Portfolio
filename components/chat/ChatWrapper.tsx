import Chat from "@/components/chat/Chat";
import SidebarToggle from "../SidebarToggle";

function ChatWrapper() {
  return (
    <div className="h-full w-full">
      <div className="md:hidden p-2 sticky top-0 z-10">
        <SidebarToggle />
      </div>

      <Chat />
    </div>
  );
}

export default ChatWrapper;

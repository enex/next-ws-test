"use client";

import { useMemo } from "react";

export default function WsPage() {
  const ws = useMemo(() => {
    if (typeof window === "undefined") return null;
    return new WebSocket(
      `${window?.location.origin.replace(/^http/, "ws")}/ws`,
      "echo-protocol"
    );
  }, []);
  return (
    <div>
      <button onClick={() => ws?.send("hello")}>Send</button>
    </div>
  );
}

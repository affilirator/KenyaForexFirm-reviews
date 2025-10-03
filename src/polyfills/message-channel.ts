// MessageChannel polyfill for Cloudflare Workers
if (typeof MessageChannel === 'undefined') {
  globalThis.MessageChannel = class MessageChannel {
    port1: MessagePort;
    port2: MessagePort;

    constructor() {
      const channel = new (class {
        port1 = new MessagePort();
        port2 = new MessagePort();
      })();
      
      this.port1 = channel.port1;
      this.port2 = channel.port2;
    }
  };

  globalThis.MessagePort = class MessagePort extends EventTarget {
    onmessage: ((event: MessageEvent) => void) | null = null;
    onmessageerror: ((event: MessageEvent) => void) | null = null;

    postMessage(data: any) {
      // Simple implementation for React's needs
      setTimeout(() => {
        const event = new MessageEvent('message', { data });
        this.dispatchEvent(event);
        if (this.onmessage) this.onmessage(event);
      }, 0);
    }

    start() {
      // No-op for this polyfill
    }

    close() {
      // No-op for this polyfill feature/serverSideRendering
    }
  };
}
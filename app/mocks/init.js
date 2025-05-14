export async function init() {
  if (typeof window === "undefined") return;

  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./browser");
    worker.start();
  }
}
